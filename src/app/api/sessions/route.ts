import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";
import { Event, Session, Speaker } from "@/types";

async function getGoogleSheetsClient() {
  const credentials = {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    // Replace literal "\n" in the key with actual newlines
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  };

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  return sheets;
}

async function fetchSessionsFromGoogleSheets(sheetId: string): Promise<Event> {
  try {
    const sheets = await getGoogleSheetsClient();

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: "A2:I21",
    });

    const rows = response.data.values || [];
    
    // Parse rows into sessions
    const sessions: Session[] = [];
    const speakers: Speaker[] = [];
    const speakerMap = new Map<string, Speaker>();
    
    rows.forEach((row: string[], index: number) => {
      if (row.length < 8) return;
      
      const [
        hafta,
        tarih,
        gun,
        saatAraligi,
        dersTuru,
        unite,
        konuBasligi,
        egitmenKonusmaci,
        sirket,
      ] = row;
      
      // Skip empty rows
      if (!konuBasligi || !egitmenKonusmaci) return;
      
      // Parse date
      let parsedDate = "";
      if (tarih) {
        // Handle Turkish date format (e.g., "11 Ağustos" -> "2025-08-11")
        const dateMatch = tarih.match(/(\d+)\s+(\w+)/);
        if (dateMatch) {
          const day = dateMatch[1];
          const month = dateMatch[2];

          function normalizeMonth(month: string): string {
            return month
              .toLowerCase()
              .replace(/ş/g, "s")
              .replace(/ç/g, "c")
              .replace(/ğ/g, "g")
              .replace(/ü/g, "u")
              .replace(/ö/g, "o")
              .replace(/ı/g, "i");
          }

          // Map'i İngilizce karakterlerle tanımla
          const monthMap: { [key: string]: string } = {
            // Tam isimler
            ocak: "01",
            subat: "02", 
            mart: "03",
            nisan: "04",
            mayis: "05",
            haziran: "06",
            temmuz: "07",
            agustos: "08",
            eylul: "09",
            ekim: "10",
            kasim: "11",
            aralik: "12",
            
            // Kısaltmalar
            oca: "01",
            sub: "02",
            mar: "03", 
            nis: "04",
            may: "05",
            haz: "06",
            tem: "07",
            a: "08",
            eyl: "09",
            eki: "10",
            kas: "11", 
            ara: "12"
          };

          // Gelen ayı normalize ederek map'ten ara
          const normalizedMonth = normalizeMonth(month);
          const monthNum = monthMap[normalizedMonth] || "01";
          parsedDate = `2025-${monthNum}-${day.padStart(2, "0")}`;
        }
      }
      
      // Parse time
      let startTime = "20:00";
      let endTime = "22:00";
      if (saatAraligi) {
        const timeMatch = saatAraligi.match(/(\d{1,2}):?(\d{2})?/);
        if (timeMatch) {
          const hour = timeMatch[1].padStart(2, "0");
          const minute = timeMatch[2] || "00";
          startTime = `${hour}:${minute}`;
          // Assume 2 hours duration
          const endHour = (parseInt(hour) + 2).toString().padStart(2, "0");
          endTime = `${endHour}:${minute}`;
        }
      }
      
      // Create session
      const session: Session = {
        topic: konuBasligi,
        date: parsedDate,
        startTime,
        endTime,
        speakerName: egitmenKonusmaci,
        url: undefined, // Will be added later if needed
      };
      
      sessions.push(session);
      
      // Create speaker if not exists
      if (!speakerMap.has(egitmenKonusmaci)) {
        const speaker: Speaker = {
          fullName: egitmenKonusmaci,
          title: dersTuru || "Eğitmen",
          company: sirket || "MultiGroup",
        };
        speakerMap.set(egitmenKonusmaci, speaker);
        speakers.push(speaker);
      }
    });
    
    const result = {
      speakers,
      sessions,
      sponsors: [], // Will be handled separately if needed
    };
    
    return result;
    
  } catch (error) {
    throw error;
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sheetId = searchParams.get("sheetId");
    
    if (!sheetId) {
      return NextResponse.json(
        { error: "Sheet ID is required" },
        { status: 400 }
      );
    }
    
    const event = await fetchSessionsFromGoogleSheets(sheetId);
    
    // Return a JSON response and set caching headers.
    return NextResponse.json(event, {
      headers: {
        "Cache-Control": "s-maxage=3600, stale-while-revalidate",
      },
    });
  } catch (error: any) {
    const message =
      process.env.NODE_ENV === "development"
        ? error.message
        : "Internal Server Error";

    return NextResponse.json(
      { error: "Failed to fetch sessions data", message },
      { status: 500 }
    );
  }
}

import { Event } from "@/types";

export async function fetchSessionsFromGoogleSheets(sheetId: string): Promise<Event> {
  try {
    // Use our API route instead of direct Google Sheets API
    const response = await fetch(`/api/sessions?sheetId=${encodeURIComponent(sheetId)}`);
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }
    
    return data;
    
  } catch (error) {
    throw error;
  }
}

// Fallback function to use static data if Google Sheets fails
export async function getSessionsData(sheetId?: string): Promise<Event> {
  if (!sheetId) {
    // Return static data if no sheet ID provided
    const events = await import('@/data/events');
    return events.default[0];
  }
  
  try {
    return await fetchSessionsFromGoogleSheets(sheetId);
  } catch (error) {
    // Fallback to static data
    const events = await import('@/data/events');
    return events.default[0];
  }
} 
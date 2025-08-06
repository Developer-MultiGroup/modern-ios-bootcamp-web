"use client";

import { generateCalendarFile } from "@/lib/generateCalendar";
import type { Event, Session } from "@/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Queue } from "@phosphor-icons/react";
import { slugify } from "@/lib/slugify";
// import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { formatIsoDate } from "@/lib/event-utils";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import { getSessionsData } from "@/lib/google-sheets";

interface SessionContainerProps {
  event?: Event;
  sheetId?: string; // Optional Google Sheets ID
}

export default function SessionContainer({ event: propEvent, sheetId }: SessionContainerProps) {
  // const { toast } = useToast();
  const router = useRouter();
  const [selectedSessions, setSelectedSessions] = useState<Session[]>([]);
  const [event, setEvent] = useState<Event | null>(propEvent || null);
  const [isLoading, setIsLoading] = useState(!propEvent);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from Google Sheets if sheetId is provided
  useEffect(() => {
    const fetchData = async () => {
      if (propEvent) {
        setEvent(propEvent);
        return;
      }

      if (!sheetId) {
        // Use static data if no sheetId provided
        try {
          const events = await import('@/data/events');
          setEvent(events.default[0]);
        } catch (err) {
          setError('Failed to load static data');
        }
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        const fetchedEvent = await getSessionsData(sheetId);
        setEvent(fetchedEvent);
      } catch (err) {
        setError('Failed to fetch data from Google Sheets');
        // Fallback to static data
        try {
          const events = await import('@/data/events');
          setEvent(events.default[0]);
        } catch (fallbackErr) {
          setError('Failed to load data');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [propEvent, sheetId]);

  const handleCalendarDownload = async (sessions: Session[]) => {
    if (sessions.length === 0) return;

    // Get current date at the start of the day (midnight)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Filter out sessions that occurred before today
    const upcomingSessions = sessions.filter((session) => {
      if (!session.date || session.date.trim() === "") {
        return false;
      }
      // Parse date and time fields to create a proper date object
      const [year, month, day] = session.date.split("-").map(Number);
      const [hours, minutes] = session.startTime.split(":").map(Number);

      // JavaScript months are 0-indexed (0-11), so subtract 1 from month
      const sessionDate = new Date(year, month - 1, day, hours, minutes);

      return sessionDate >= today;
    });

    // Check if there are any upcoming sessions left
    if (upcomingSessions.length === 0) {
      //   toast({
      //     title: "Bilgi",
      //     description: "Gelecek etkinlik bulunamadı.",
      //     className: "bg-yellow-500 text-white",
      //     duration: 3000,
      //   });
      return;
    }

    if (!event) return;

    const eventData = {
      ...event,
      sessions: upcomingSessions,
    };

    await generateCalendarFile(eventData);

    // toast({
    //   title: "Takvim dosyası indirildi",
    //   description: `${upcomingSessions.length} etkinlik takviminize eklendi.`,
    //   className: "bg-green-500 text-white",
    //   duration: 3000,
    // });
  };

  const toggleSessionSelection = (session: Session) => {
    const isSelected = selectedSessions.some(
      (s) => s.speakerName === session.speakerName && s.topic === session.topic
    );

    if (isSelected) {
      setSelectedSessions(
        selectedSessions.filter(
          (s) =>
            !(
              s.speakerName === session.speakerName && s.topic === session.topic
            )
        )
      );
    } else {
      setSelectedSessions([...selectedSessions, session]);
    }
  };

  // Check if it's a networking event based on speaker info
  const isNetworkingEvent = event?.sessions.some(
    (session) =>
      session.topic.toLowerCase().includes("network") ||
      session.speakerName.toLowerCase().includes("network")
  ) || false;

  // Animation variants for the session badges
  const badgeContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  const handleRoute = () => {
    router.push(
      "https://www.youtube.com/playlist?list=PLQvJkakaBRKcEf3tq169jkNvoyiQN2XzN"
    );
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto md:w-5/6 px-4 md:px-0">
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#007AFF]"></div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !event) {
    return (
      <div className="max-w-7xl mx-auto md:w-5/6 px-4 md:px-0">
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">Veri Yüklenemedi</h3>
            <p className="text-gray-300">{error || 'Bilinmeyen bir hata oluştu'}</p>
          </div>
        </div>
      </div>
    );
  }

  // Get unique speakers from sessions
  const uniqueSpeakers = event?.speakers || [];

  return (
    <div className="max-w-7xl mx-auto md:w-5/6 px-4 md:px-0">
      <AnimatePresence>
        {selectedSessions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: "auto", marginBottom: 32 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <motion.div
              className="p-4 bg-[#007AFF]/20 rounded-lg border border-[#007AFF]/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-2 md:items-center mb-4">
                <h3 className="text-lg font-bold text-white">
                  Seçilen Oturumlar ({selectedSessions.length})
                </h3>
                <Button
                  data-umami-event="Generate Custom Calendar"
                  onClick={() => handleCalendarDownload(selectedSessions)}
                  className="bg-[#007AFF] hover:bg-[#007AFF]/90 shadow-md"
                >
                  <Calendar className="mr-2" size={16} />
                  Seçilenleri Ekle
                </Button>
              </div>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={badgeContainerVariants}
                initial="hidden"
                animate="show"
              >
                <AnimatePresence>
                  {selectedSessions.map((session) => (
                    <motion.div
                      key={`selected-${session.speakerName}-${session.topic}`}
                      variants={badgeVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      layout
                    >
                      <Badge
                        className="bg-[#007AFF]/20 text-[#FA7343] hover:bg-[#007AFF]/30 cursor-pointer flex items-center gap-1 p-2 border border-[#007AFF]/30"
                        onClick={() => toggleSessionSelection(session)}
                      >
                        <span className="font-medium">{session.startTime}</span>
                        <span className="mx-1">-</span>
                        <span>{session.speakerName}</span>
                        <button className="ml-1 text-[#FA7343] hover:text-[#FA7343]/80">
                          ×
                        </button>
                      </Badge>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {isNetworkingEvent ? (
        // For Networking events, show speaker photos without interactive elements
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {event.sessions.map((session) => {
            const speaker = event.speakers.find(
              (s) => s.fullName === session.speakerName
            );
            return (
              <div
                key={`network-speaker-${session.speakerName}-${session.topic}`}
                className="flex flex-col items-center w-[calc(100%/2-1.5rem)] sm:w-[calc(100%/3-1.5rem)] md:w-[calc(100%/4-1.5rem)] lg:w-[calc(100%/5-1.5rem)]"
              >
                <div className="relative">
                  <Image
                    src={`/images/speakers/${slugify(
                      session.speakerName
                    )}.webp`}
                    alt={session.speakerName}
                    width={160}
                    height={160}
                    className="object-cover object-center opacity-80"
                    loading="lazy"
                  />
                </div>
                <p className="text-lg font-bold text-center mt-3">
                  {session.speakerName}
                </p>
                {speaker && (
                  <p className="text-sm text-gray-600 text-center">
                    {speaker.title}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        // For regular sessions, show without interactive controls if event is past.
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {event.sessions.map((session) => {
            const isSelected = selectedSessions.some(
              (s) =>
                s.speakerName === session.speakerName &&
                s.topic === session.topic
            );
            return (
              <Card
                key={`session-card-${session.speakerName}-${session.topic}`}
                className={`select-none bg-[#007AFF]/20 shadow-lg w-full mx-auto transition-all overflow-hidden h-full min-h-48 md:min-h-36 py-0 border border-[#333] hover:border-[#007AFF]/50 ${
                  isSelected ? "ring-2 ring-[#007AFF]" : ""
                }`}
              >
                <div className="flex h-full">
                  <div className="relative min-w-[160px] w-[160px] h-full bg-[#141414] overflow-hidden shrink-0">
                    <Image
                      src={`/images/speakers/${slugify(
                        session.speakerName
                      )}.webp`}
                      alt={session.speakerName}
                      fill
                      sizes="160px"
                      className="object-cover object-center opacity-80 h-full w-full"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className={`flex-1 p-6 flex items-start justify-between relative hover:cursor-pointer ${
                      isSelected ? "bg-[#007AFF]/10" : "bg-transparent"
                    }`}
                    onClick={() => {
                      toggleSessionSelection(session);
                    }}
                  >
                    <div className="flex-1">
                      <div className="flex items-center">
                        <p className="text-sm font-medium text-gray-400">
                          {session.date != ""
                            ? `${formatIsoDate(session.date)} ${
                                session.startTime
                              } - ${session.endTime}`
                            : "Tarih Belirlenecek"}
                        </p>
                      </div>
                      <p className="text-xl font-bold text-white mt-1">
                        {session.speakerName}
                      </p>
                      <p className="text-[#FA7343] text-sm mt-1">
                        {session.topic}
                      </p>
                      {session.url && (
                        <a
                          href={session.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-2 text-sm font-medium text-[#FA7343] hover:text-[#FA7343]/80 transition-colors"
                          aria-label={`Watch ${session.topic} by ${session.speakerName} on YouTube`}
                        >
                          <span className="hover:underline hover:cursor">
                            Youtube'da İzle
                          </span>
                        </a>
                      )}
                    </div>

                    <div className="flex flex-col items-center ml-4 gap-2">
                      <Checkbox
                        aria-label="checkbox"
                        checked={isSelected}
                        onCheckedChange={() => toggleSessionSelection(session)}
                        className={`${
                          isSelected
                            ? "bg-[#007AFF] text-white border-[#007AFF]"
                            : "border-[#007AFF]"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* Only show the download button if event is upcoming */}
      {!isNetworkingEvent && (
        <div className="flex flex-col md:flex-row justify-center pt-8 gap-y-2 md:gap-x-4">
          <div className="bg-accent p-[2px] rounded-2xl w-full md:w-1/3">
            <Button
              data-umami-event="Generate Full Calendar"
              onClick={() => handleCalendarDownload(event.sessions)}
              className="w-full bg-gray-700 hover:bg-gray-800 active:bg-gray-900 font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center p-6 rounded-2xl"
            >
              <Calendar className="mr-2" />
              Tüm Yayınları Ekle
            </Button>
          </div>
          <div className="bg-accent p-[2px] rounded-2xl w-full md:w-1/3">
            <Button
              data-umami-event="Youtube Playlist"
              onClick={() => handleRoute()}
              className="w-full bg-gray-700 hover:bg-gray-800 active:bg-gray-900 font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center p-6 rounded-2xl"
            >
              <Queue className="mr-2" />
              Oynatma Listesi
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

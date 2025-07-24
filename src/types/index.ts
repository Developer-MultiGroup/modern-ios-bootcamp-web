export type Speaker = {
    fullName: string;
    title: string;
    phrase?: string;
    company?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
  
  export type Session = {
    topic: string;
    date: string;
    dateTime?: string;
    startTime: string; // start time for session
    endTime: string; // end time for session
    speakerName: string;
    url?: string;
  };
  
  export type Sponsor = {
    tier: "platin" | "altın" | "gümüş" | "bronz" | "";
    sponsorSlug: string;
  };
  
  export type Event = {
    speakers: Speaker[];
    sessions: Session[];
    sponsors: Sponsor[];
  };
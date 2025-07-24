// src/lib/events.ts
// Centralized data model for Bolt Gun Nation events

export interface Event {
  id: string;
  date: Date;
  event: string;
  location: string;
  address: string;
  distance?: string;
  points?: string;
  status: 'Monthly' | 'Special' | 'Championship' | 'Workshop';
  description?: string;
  registrationUrl?: string;
  registrationStatus?: string;
  imageUrl?: string;
}

/**
 * Get all upcoming events sorted by date
 * @returns Array of upcoming events
 */
export function getAllEvents(): Event[] {
  const today = new Date();
  const currentYear = today.getFullYear();
  const events: Event[] = [];
  
  // Generate Del Norte matches (2nd Sunday of each month)
  for (let month = 0; month < 12; month++) {
    const year = month < today.getMonth() ? currentYear + 1 : currentYear;
    let secondSunday = new Date(year, month, 1);
    
    // Find the first Sunday
    while (secondSunday.getDay() !== 0) {
      secondSunday.setDate(secondSunday.getDate() + 1);
    }
    
    // Add 7 days to get to the second Sunday
    secondSunday.setDate(secondSunday.getDate() + 7);
    
    events.push({
      id: `delNorte-${year}-${month + 1}`,
      date: secondSunday,
      event: "Del Norte Gun Club PRS Match",
      location: "Del Norte Gun Club",
      address: "208 Torcido Rd NW, Rio Rancho, NM 87144",
      distance: "600-1120 yards",
      points: "70 pts max",
      status: "Monthly",
      description: "Monthly precision rifle match at Del Norte Gun Club featuring long-range targets from 600-1120 yards. This match is part of the Bolt Gun Nation points race series.",
      registrationStatus: secondSunday < today ? "Completed" : "Open Registration"
    });
  }
  
  // Generate Zia matches (3rd Saturday of each month)
  for (let month = 0; month < 12; month++) {
    const year = month < today.getMonth() ? currentYear + 1 : currentYear;
    let thirdSaturday = new Date(year, month, 1);
    
    // Find the first Saturday
    while (thirdSaturday.getDay() !== 6) {
      thirdSaturday.setDate(thirdSaturday.getDate() + 1);
    }
    
    // Add 14 days to get to the third Saturday
    thirdSaturday.setDate(thirdSaturday.getDate() + 14);
    
    events.push({
      id: `zia-${year}-${month + 1}`,
      date: thirdSaturday,
      event: "Zia PRS Match",
      location: "Zia Rifle & Pistol Club",
      address: "3822-, 3916 Los Picaros Rd SE, Albuquerque, NM 87105",
      distance: "300-950 yards",
      points: "60 pts max",
      status: "Monthly",
      description: "Monthly precision rifle match at Zia Rifle & Pistol Club featuring targets from 300-950 yards. This match is part of the Bolt Gun Nation points race series.",
      registrationStatus: thirdSaturday < today ? "Completed" : "Open Registration"
    });
  }

  // Sort events by date
  return events.sort((a, b) => a.date.getTime() - b.date.getTime());
}

/**
 * Get upcoming events (future events only)
 * @param limit Optional number of events to return
 * @returns Array of upcoming events
 */
export function getUpcomingEvents(limit?: number): Event[] {
  const today = new Date();
  const events = getAllEvents().filter(event => event.date >= today);
  
  if (limit) {
    return events.slice(0, limit);
  }
  
  return events;
}

/**
 * Get past events (completed events only)
 * @param limit Optional number of events to return
 * @returns Array of past events
 */
export function getPastEvents(limit?: number): Event[] {
  const today = new Date();
  const events = getAllEvents()
    .filter(event => event.date < today)
    .sort((a, b) => b.date.getTime() - a.date.getTime()); // Reverse chronological
  
  if (limit) {
    return events.slice(0, limit);
  }
  
  return events;
}

/**
 * Format a date for display
 * @param date Date to format
 * @returns Formatted date string
 */
export function formatEventDate(date: Date): { month: string, day: string, year: string } {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return {
    month: months[date.getMonth()],
    day: date.getDate().toString(),
    year: date.getFullYear().toString()
  };
}

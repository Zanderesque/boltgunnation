/**
 * API utilities for Bolt Gun Nation
 * Handles communication with Next.js API routes
 */

export interface StandingsEntry {
  rank: number;
  name: string;
  points: number;
  matches: number;
  avg: number;
  badge: string;
}

export interface StandingsData {
  standings: StandingsEntry[];
  lastUpdated: string;
  season: string;
  totalCompetitors: number;
  matchesCompleted: number;
  remainingMatches: number;
  averageScore: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Fetches current standings from the API
 * @returns Promise resolving to standings data
 */
export async function fetchStandings(): Promise<StandingsData> {
  try {
    const response = await fetch('/api/standings', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Ensure fresh data
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: ApiResponse<StandingsData> = await response.json();

    if (!result.success || !result.data) {
      throw new Error(result.error || 'Failed to fetch standings');
    }

    return result.data;
  } catch (error) {
    console.error('Error fetching standings:', error);
    throw error;
  }
}

/**
 * Updates standings data via API
 * @param standingsData - New standings data to update
 * @returns Promise resolving to updated standings data
 */
export async function updateStandings(standingsData: Partial<StandingsData>): Promise<StandingsData> {
  try {
    const response = await fetch('/api/standings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(standingsData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result: ApiResponse<StandingsData> = await response.json();

    if (!result.success || !result.data) {
      throw new Error(result.error || 'Failed to update standings');
    }

    return result.data;
  } catch (error) {
    console.error('Error updating standings:', error);
    throw error;
  }
}

/**
 * Fetches standings with error handling and fallback
 * @returns Promise resolving to standings data (with fallback on error)
 */
export async function fetchStandingsWithFallback(): Promise<StandingsData> {
  try {
    return await fetchStandings();
  } catch (error) {
    console.error('Error fetching standings, using fallback:', error);
    
    // Return fallback data
    return {
      standings: [
        { rank: 1, name: "Loading...", points: 0, matches: 0, avg: 0, badge: "" }
      ],
      lastUpdated: new Date().toISOString(),
      season: "2025",
      totalCompetitors: 0,
      matchesCompleted: 0,
      remainingMatches: 0,
      averageScore: 0
    };
  }
}

/**
 * Validates standings entry data
 * @param entry - Standings entry to validate
 * @returns Boolean indicating if entry is valid
 */
export function validateStandingsEntry(entry: any): entry is StandingsEntry {
  return (
    typeof entry === 'object' &&
    entry !== null &&
    typeof entry.name === 'string' &&
    typeof entry.points === 'number' &&
    typeof entry.matches === 'number' &&
    typeof entry.avg === 'number'
  );
}

/**
 * Validates complete standings data
 * @param data - Standings data to validate
 * @returns Boolean indicating if data is valid
 */
export function validateStandingsData(data: any): data is Partial<StandingsData> {
  if (!data || typeof data !== 'object') {
    return false;
  }

  // Check if standings array is valid (if provided)
  if (data.standings && (!Array.isArray(data.standings) || !data.standings.every(validateStandingsEntry))) {
    return false;
  }

  return true;
}

/**
 * Formats last updated time for display
 * @param isoString - ISO date string
 * @returns Formatted date string
 */
export function formatLastUpdated(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });
}

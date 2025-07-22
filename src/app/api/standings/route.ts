import { NextRequest, NextResponse } from 'next/server';

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

// In-memory storage (in production, you'd use a database)
let standingsData: StandingsData = {
  standings: [
    { rank: 1, name: "Miguel Rodriguez", points: 485, matches: 12, avg: 40.4, badge: "🏆" },
    { rank: 2, name: "Sarah Chen", points: 467, matches: 11, avg: 42.5, badge: "🥈" },
    { rank: 3, name: "David Martinez", points: 445, matches: 10, avg: 44.5, badge: "🥉" },
    { rank: 4, name: "Lisa Thompson", points: 423, matches: 11, avg: 38.5, badge: "" },
    { rank: 5, name: "Carlos Gutierrez", points: 401, matches: 9, avg: 44.6, badge: "" },
    { rank: 6, name: "Amanda Foster", points: 389, matches: 10, avg: 38.9, badge: "" },
    { rank: 7, name: "Robert Kim", points: 367, matches: 8, avg: 45.9, badge: "" },
    { rank: 8, name: "Jennifer Walsh", points: 345, matches: 9, avg: 38.3, badge: "" }
  ],
  lastUpdated: new Date().toISOString(),
  season: "2025",
  totalCompetitors: 47,
  matchesCompleted: 8,
  remainingMatches: 4,
  averageScore: 41.2
};

/**
 * GET /api/standings - Retrieve current standings
 */
export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: standingsData
    });
  } catch (error) {
    console.error('Error fetching standings:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch standings' 
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/standings - Update standings data
 * Requires authentication in production
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic validation
    if (!body.standings || !Array.isArray(body.standings)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid standings data format' 
        },
        { status: 400 }
      );
    }

    // Process and sort standings
    const processedStandings = body.standings
      .map((entry: any, index: number) => ({
        rank: entry.rank || index + 1,
        name: entry.name || `Shooter ${index + 1}`,
        points: parseFloat(entry.points) || 0,
        matches: parseInt(entry.matches) || 0,
        avg: parseFloat(entry.avg) || 0,
        badge: ''
      }))
      .sort((a: StandingsEntry, b: StandingsEntry) => b.points - a.points)
      .map((entry: StandingsEntry, index: number) => {
        entry.rank = index + 1;
        // Assign badges
        if (entry.rank === 1) entry.badge = '🏆';
        else if (entry.rank === 2) entry.badge = '🥈';
        else if (entry.rank === 3) entry.badge = '🥉';
        else entry.badge = '';
        return entry;
      });

    // Update standings data
    standingsData = {
      standings: processedStandings,
      lastUpdated: new Date().toISOString(),
      season: body.season || standingsData.season,
      totalCompetitors: body.totalCompetitors || processedStandings.length,
      matchesCompleted: body.matchesCompleted || standingsData.matchesCompleted,
      remainingMatches: body.remainingMatches || standingsData.remainingMatches,
      averageScore: body.averageScore || calculateAverageScore(processedStandings)
    };

    return NextResponse.json({
      success: true,
      message: 'Standings updated successfully',
      data: standingsData
    });

  } catch (error) {
    console.error('Error updating standings:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to update standings' 
      },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/standings - Replace all standings data
 */
export async function PUT(request: NextRequest) {
  return POST(request); // Same logic as POST for now
}

/**
 * Calculate average score from standings
 */
function calculateAverageScore(standings: StandingsEntry[]): number {
  if (standings.length === 0) return 0;
  
  const totalScore = standings.reduce((sum, entry) => sum + entry.avg, 0);
  return Math.round((totalScore / standings.length) * 10) / 10;
}

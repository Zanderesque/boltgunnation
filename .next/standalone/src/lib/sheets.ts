/**
 * Google Sheets integration utilities
 * Fetches data from Google Sheets using public CSV export
 */

export interface LeaderboardEntry {
  rank: number;
  seasonTotal: number;
  name: string;
  topScore: number;
  secondTopScore: number;
  thirdScore: number;
  badge?: string;
}

export interface SheetData {
  leaderboard: LeaderboardEntry[];
  lastUpdated: string;
}

/**
 * Converts Google Sheets URL to CSV export URL
 * @param sheetUrl - The Google Sheets URL
 * @returns CSV export URL
 */
function getCSVUrl(sheetUrl: string): string {
  // For published sheets, we need to extract the published ID and convert to CSV
  // Try the direct CSV export format for published sheets
  
  // Extract the published ID from the URL
  const publishedIdMatch = sheetUrl.match(/\/d\/e\/([a-zA-Z0-9-_]+)/);
  
  if (publishedIdMatch) {
    const publishedId = publishedIdMatch[1];
    // Try the direct CSV export URL - this might work better than pub format
    const csvUrl = `https://docs.google.com/spreadsheets/d/e/${publishedId}/pub?output=csv&gid=915428776`;
    console.log('Generated CSV URL:', csvUrl);
    return csvUrl;
  }
  
  // Fallback for regular spreadsheet URLs
  const spreadsheetIdMatch = sheetUrl.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  
  if (!spreadsheetIdMatch) {
    throw new Error('Invalid Google Sheets URL: Could not extract spreadsheet ID');
  }
  
  const spreadsheetId = spreadsheetIdMatch[1];
  const csvUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?format=csv`;
  console.log('Generated CSV URL:', csvUrl);
  return csvUrl;
}

/**
 * Parses CSV data and converts it to leaderboard entries
 * Expected columns: SEASON RANK, Season Total, NAME, Top Score, 2nd Top Score, 3rd Score
 */
function parseCSVData(csvData: string): LeaderboardEntry[] {
  const lines = csvData.trim().split('\n');
  
  if (lines.length <= 1) {
    console.warn('CSV data appears to be empty or only contains headers');
    return [];
  }
  
  // Skip header row and parse data rows
  const dataRows = lines.slice(1);
  const result: LeaderboardEntry[] = [];
  
  for (let i = 0; i < dataRows.length; i++) {
    const line = dataRows[i].trim();
    if (!line) continue;
    
    // Parse CSV line (handle quoted values)
    const columns = parseCSVLine(line);
    
    // Skip rows that don't have enough columns
    if (columns.length < 6) {
      console.warn(`Row ${i + 2} has insufficient columns:`, columns);
      continue;
    }
    
    const seasonRank = parseInt(columns[0]) || (i + 1);
    const seasonTotal = parseFloat(columns[1]) || 0;
    const name = columns[2]?.trim() || `Shooter ${i + 1}`;
    const topScore = parseFloat(columns[3]) || 0;
    const secondTopScore = parseFloat(columns[4]) || 0;
    const thirdScore = parseFloat(columns[5]) || 0;
    
    // Assign badges for top 3 positions
    let badge = '';
    if (seasonRank === 1) badge = '🏆';
    else if (seasonRank === 2) badge = '🥈';
    else if (seasonRank === 3) badge = '🥉';
    
    result.push({
      rank: seasonRank,
      seasonTotal,
      name,
      topScore,
      secondTopScore,
      thirdScore,
      badge
    });
  }
  
  // Sort by season total (descending) and reassign ranks if needed
  result.sort((a, b) => b.seasonTotal - a.seasonTotal);
  result.forEach((entry, index) => {
    entry.rank = index + 1;
    // Reassign badges based on sorted position
    if (entry.rank === 1) entry.badge = '🏆';
    else if (entry.rank === 2) entry.badge = '🥈';
    else if (entry.rank === 3) entry.badge = '🥉';
    else entry.badge = '';
  });
  
  return result;
}

/**
 * Parses a single CSV line, handling quoted values
 * @param line - CSV line to parse
 * @returns Array of column values
 */
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}

/**
 * Fetches leaderboard data from Google Sheets
 * @param sheetUrl - The Google Sheets URL
 * @returns Promise resolving to sheet data
 */
export async function fetchLeaderboardData(sheetUrl: string): Promise<SheetData> {
  try {
    const csvUrl = getCSVUrl(sheetUrl);
    
    // Try different CORS proxy services
    const corsProxies = [
      `https://corsproxy.io/?${encodeURIComponent(csvUrl)}`,
      `https://api.allorigins.win/raw?url=${encodeURIComponent(csvUrl)}`,
      `https://cors-anywhere.herokuapp.com/${csvUrl}`
    ];
    
    console.log('Original CSV URL:', csvUrl);
    
    // Try each proxy until one works
    for (const proxyUrl of corsProxies) {
      try {
        console.log('Trying proxy:', proxyUrl);
        
        const response = await fetch(proxyUrl, {
          // Add cache control to ensure fresh data
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        });
        
        if (response.ok) {
          const csvData = await response.text();
          console.log('Successfully fetched CSV data:', csvData.substring(0, 200) + '...');
          
          const leaderboard = parseCSVData(csvData);
          
          return {
            leaderboard,
            lastUpdated: new Date().toISOString()
          };
        }
      } catch (proxyError) {
        console.warn('Proxy failed:', proxyUrl, proxyError);
        continue;
      }
    }
    
    throw new Error('All CORS proxies failed');
    
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    
    // Return empty data on error
    return {
      leaderboard: [],
      lastUpdated: new Date().toISOString()
    };
  }
}

/**
 * Fetches leaderboard data with error handling and fallback
 * @param sheetUrl - The Google Sheets URL
 * @returns Promise resolving to sheet data (with fallback mock data on error)
 */
export async function fetchLeaderboardDataWithFallback(sheetUrl: string): Promise<SheetData> {
  try {
    const data = await fetchLeaderboardData(sheetUrl);
    
    // If no data was returned, use fallback
    if (data.leaderboard.length === 0) {
      console.warn('No leaderboard data found, using fallback data');
      return getFallbackData();
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching leaderboard data, using fallback:', error);
    return getFallbackData();
  }
}

/**
 * Returns fallback mock data when sheets are unavailable
 */
function getFallbackData(): SheetData {
  return {
    leaderboard: [
      { rank: 1, seasonTotal: 0, name: "Loading...", topScore: 0, secondTopScore: 0, thirdScore: 0, badge: "" },
    ],
    lastUpdated: new Date().toISOString()
  };
}

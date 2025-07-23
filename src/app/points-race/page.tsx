'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchLeaderboardDataWithFallback, type LeaderboardEntry, type SheetData } from '@/lib/sheets';
import { 
  TrophyIcon, 
  ChartBarIcon,
  CalendarDaysIcon,
  StarIcon,
  ViewfinderCircleIcon,
  MapIcon,
  ClockIcon,
  FireIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';

/**
 * Points Race Page - Competition standings and leaderboard
 * Shows current season standings and upcoming race events
 * Using WordPress color variables and consistent Tailwind classes
 */
export default function PointsRacePage() {
  // State for Google Sheets data
  const [sheetData, setSheetData] = useState<SheetData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Google Sheets URL
  const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRLsAuWw2zruUzP-RwCkm9pFl0nW4BmeXitVO4LICxfF3WSnArvVo8S6ve4P4e9e80SUliIsZ7Udf6z/pubhtml?gid=915428776&single=true";

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchLeaderboardDataWithFallback(SHEET_URL);
        setSheetData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load leaderboard data');
        console.error('Error fetching leaderboard:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Set up periodic refresh every 5 minutes
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Use data from Google Sheets or fallback
  const leaderboard = sheetData?.leaderboard || [];

  // Manual refresh function
  const handleRefresh = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchLeaderboardDataWithFallback(SHEET_URL);
      setSheetData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh leaderboard data');
      console.error('Error refreshing leaderboard:', err);
    } finally {
      setLoading(false);
    }
  };

  // Format last updated time
  const formatLastUpdated = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  const upcomingRaces = [
    {
      date: "Feb 22",
      event: "Desert Challenge",
      location: "White Sands Range",
      distance: "600-1000 yards",
      points: "50 pts max",
      status: "Open"
    },
    {
      date: "Mar 15",
      event: "High Desert Classic",
      location: "Santa Fe Range",
      distance: "300-800 yards", 
      points: "45 pts max",
      status: "Registration Opens Soon"
    },
    {
      date: "Apr 5",
      event: "Rio Grande Precision",
      location: "Las Cruces",
      distance: "500-1200 yards",
      points: "55 pts max",
      status: "Planning Stage"
    }
  ];

  const seasonStats = [
    { label: "Total Competitors", value: "47" },
    { label: "Matches Completed", value: "8" },
    { label: "Remaining Matches", value: "4" },
    { label: "Average Score", value: "41.2" }
  ];

  return (
    <div className="min-h-screen bg-wp-base">
      {/* Subtle geometric background */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50L20 20M50 50L80 20M50 50L80 80M50 50L20 80' stroke='%23B45309' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-wp-accent-1/10 border border-wp-accent-1/20 text-wp-accent-1 font-semibold text-sm mb-6">
              <TrophyIcon className="h-4 w-4 mr-2 text-wp-accent-1" />
              2025 New Mexico Precision Rifle Points Race
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-wp-contrast">Championship</span>
              <br />
              <span className="text-wp-accent-1">
                Standings
              </span>
            </h1>
            
            <p className="text-xl text-wp-contrast/70 leading-relaxed max-w-3xl mx-auto">
              Track the current standings in our annual points race competition. 
              Points are awarded based on match performance and participation.
            </p>
          </motion.div>

          {/* Season Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {seasonStats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-wp-base/60 backdrop-blur-sm border border-wp-contrast/10 rounded-2xl p-6 text-center hover:bg-wp-base/80 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-wp-accent-1 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-wp-contrast/70">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Data Status */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-wp-base/80 backdrop-blur-sm border border-wp-contrast/10 rounded-xl p-4">
            <div className="mb-4 md:mb-0 flex items-center">
              <ClockIcon className="h-5 w-5 text-wp-accent-2 mr-2" />
              <span className="text-sm text-wp-contrast/70">
                {sheetData?.lastUpdated ? (
                  <>Last updated: {formatLastUpdated(sheetData.lastUpdated)}</>
                ) : (
                  <>Loading data...</>
                )}
              </span>
            </div>
            <button 
              onClick={handleRefresh} 
              disabled={loading}
              className="bg-wp-base border border-wp-contrast/10 text-wp-contrast px-4 py-2 rounded-lg font-medium hover:bg-wp-contrast/5 hover:shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50"
            >
              {loading ? 'Refreshing...' : 'Refresh Data'}
            </button>
          </div>

          {/* Leaderboard Section */}
          <div className="mb-16">
            <div className="mb-8 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-wp-contrast mb-2">Current Standings</h2>
              <p className="text-wp-contrast/70 text-lg">
                Season leaders based on cumulative points from completed matches
              </p>
              {sheetData?.lastUpdated && (
                <p className="text-sm text-wp-contrast/60">
                  Last updated: {formatLastUpdated(sheetData.lastUpdated)}
                </p>
              )}
            </div>

            {/* Leaderboard Table */}
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-red-600 to-blue-700 text-white p-4">
                <div className="grid grid-cols-6 gap-1 font-semibold text-sm md:text-base">
                  <div className="text-center">Rank</div>
                  <div className="text-center">Shooter</div>
                  <div className="text-center">Season Total</div>
                  <div className="text-center">Top Score</div>
                  <div className="text-center">2nd Top Score</div>
                  <div className="text-center">3rd Score</div>
                </div>
                <div className="grid grid-cols-6 gap-1 font-semibold text-sm mt-2">
                  <div className="text-center">Finale Score</div>
                  <div className="col-span-5"></div>
                </div>
              </div>
              <div className="bg-white">
                {loading && !leaderboard.length ? (
                  <div className="p-8 text-center">
                    <div className="animate-spin w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className="text-slate-600">Loading leaderboard data...</p>
                  </div>
                ) : error ? (
                  <div className="p-8 text-center">
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm max-w-md mx-auto">
                      <strong>Error:</strong> {error}
                    </div>
                  </div>
                ) : !leaderboard.length ? (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ChartBarIcon className="h-8 w-8 text-slate-400" />
                    </div>
                    <p className="text-slate-600 mb-2">No leaderboard data available</p>
                    <p className="text-sm text-slate-500">Scores will appear here once the spreadsheet is populated</p>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100">
                    {leaderboard.slice(0, 16).map((entry, index) => (
                      <div 
                        key={index} 
                        className={`grid grid-cols-6 gap-1 p-4 hover:bg-slate-50 transition-colors ${
                          index < 3 ? 'bg-gradient-to-r from-amber-50/50 to-orange-50/50' : ''
                        }`}
                      >
                        <div className="flex items-center justify-center">
                          <div className="text-lg font-bold text-slate-700">
                            {index === 0 ? (
                              <span className="flex items-center">
                                #{index + 1} <span className="ml-1 text-yellow-500">🏆</span>
                              </span>
                            ) : index === 1 ? (
                              <span className="flex items-center">
                                #{index + 1} <span className="ml-1 text-gray-400">🥈</span>
                              </span>
                            ) : index === 2 ? (
                              <span className="flex items-center">
                                #{index + 1} <span className="ml-1 text-amber-700">🥉</span>
                              </span>
                            ) : (
                              <span>#{index + 1}</span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
                            index === 0 ? 'bg-red-600' :
                            index === 1 ? 'bg-purple-600' :
                            index === 2 ? 'bg-blue-600' :
                            'bg-slate-600'
                          }`}>
                            {entry.name.split(' ').map(part => part[0]).join('')}
                          </div>
                          <span className="ml-2 font-semibold text-slate-900">{entry.name}</span>
                        </div>
                        <div className="text-center font-bold text-slate-900 flex items-center justify-center">
                          {entry.totalPoints || entry.seasonTotal}
                        </div>
                        <div className="text-center text-slate-600 flex items-center justify-center">
                          {entry.topScore}
                        </div>
                        <div className="text-center text-slate-600 flex items-center justify-center">
                          {entry.secondTopScore}
                        </div>
                        <div className="text-center text-slate-600 flex items-center justify-center">
                          {entry.thirdScore}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Upcoming Races */}
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-wp-contrast mb-2">Upcoming Races</h2>
              <p className="text-wp-contrast/70">
                Mark your calendar for these upcoming competition events.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {upcomingRaces.map((race, index) => (
                <div 
                  key={index}
                  className="bg-wp-base border border-wp-contrast/10 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex">
                    <div className="bg-wp-accent-1 text-wp-contrast p-6 flex flex-col items-center justify-center">
                      <span className="text-2xl font-bold">{race.date.split(" ")[1]}</span>
                      <span className="text-sm font-medium">{race.date.split(" ")[0]}</span>
                    </div>
                    <div className="p-6 flex-1">
                      <h3 className="font-bold text-wp-contrast mb-2">{race.event}</h3>
                      <div className="flex items-center text-wp-contrast/70 text-sm mb-1">
                        <MapIcon className="h-4 w-4 mr-1" />
                        {race.location}
                      </div>
                      <div className="flex items-center text-wp-contrast/70 text-sm mb-1">
                        <ViewfinderCircleIcon className="h-4 w-4 mr-1" />
                        {race.distance}
                      </div>
                      <div className="flex items-center text-wp-contrast/70 text-sm mb-3">
                        <StarIcon className="h-4 w-4 mr-1" />
                        {race.points}
                      </div>
                      <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-wp-accent-2/10 text-wp-accent-2">
                        {race.status}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rules Section */}
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-wp-contrast mb-2">Points Race Rules</h2>
              <p className="text-wp-contrast/70">
                Understanding how points are awarded and standings are calculated.
              </p>
            </div>

            <div className="bg-wp-base/80 backdrop-blur-sm border border-wp-contrast/10 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-wp-contrast mb-2 flex items-center">
                    <CheckBadgeIcon className="h-5 w-5 mr-2 text-wp-accent-1" />
                    Match Points
                  </h3>
                  <p className="text-wp-contrast/70">
                    Points are awarded based on your finishing position in each match. 
                    First place receives 25 points, with a sliding scale for lower positions.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-wp-contrast mb-2 flex items-center">
                    <CheckBadgeIcon className="h-5 w-5 mr-2 text-wp-accent-1" />
                    Participation Points
                  </h3>
                  <p className="text-wp-contrast/70">
                    Each competitor receives 5 participation points for each match they attend, 
                    regardless of finishing position.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-wp-contrast mb-2 flex items-center">
                    <CheckBadgeIcon className="h-5 w-5 mr-2 text-wp-accent-1" />
                    Season Standings
                  </h3>
                  <p className="text-wp-contrast/70">
                    Your season total is calculated from your best 8 match results. 
                    This allows competitors to miss some matches while remaining competitive.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-wp-contrast mb-2 flex items-center">
                    <CheckBadgeIcon className="h-5 w-5 mr-2 text-wp-accent-1" />
                    Divisions
                  </h3>
                  <p className="text-wp-contrast/70">
                    Competitors are classified into divisions based on equipment: Open, Tactical, 
                    Production, and Factory. Each division has its own champion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-16">
            <div className="bg-wp-accent-1/10 rounded-3xl p-8 md:p-12 lg:p-16 text-center max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-wp-contrast">
                Ready to Compete?
              </h2>
              <p className="text-xl text-wp-contrast/70 mb-10 max-w-3xl mx-auto">
                Join our next match and start earning points in the season standings. 
                New competitors are always welcome, regardless of experience level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/register" 
                  className="group bg-wp-accent-1 text-wp-contrast px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-wp-accent-1/25 transition-all duration-300 flex items-center justify-center"
                >
                  Register for Next Match
                </a>
                <a 
                  href="/contact" 
                  className="group bg-wp-base border border-wp-contrast/10 text-wp-contrast px-8 py-4 rounded-xl font-semibold hover:bg-wp-contrast/5 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  Contact Match Director
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

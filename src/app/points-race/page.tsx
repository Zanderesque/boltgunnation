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
  CheckBadgeIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import { getUpcomingEvents } from '@/lib/events';
import EventCard from '@/components/events/EventCard';
import Link from 'next/link';

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

  // Calculate season stats
  const calculateSeasonStats = (leaderboardData: LeaderboardEntry[]) => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const seasonStartDate = new Date(currentYear, 0, 1); // January 1st of current year
    const seasonEndDate = new Date(currentYear, 11, 31); // December 31st of current year
    
    // Count Del Norte matches (2nd Sunday of each month)
    let totalMatches = 0;
    let completedMatches = 0;
    
    // Count Del Norte matches
    for (let month = 0; month < 12; month++) {
      const firstDayOfMonth = new Date(currentYear, month, 1);
      let secondSunday = new Date(currentYear, month, 1);
      
      // Find the first Sunday
      while (secondSunday.getDay() !== 0) {
        secondSunday.setDate(secondSunday.getDate() + 1);
      }
      
      // Add 7 days to get to the second Sunday
      secondSunday.setDate(secondSunday.getDate() + 7);
      
      totalMatches++;
      if (secondSunday < today) {
        completedMatches++;
      }
    }
    
    // Count Zia matches (3rd Saturday of each month)
    for (let month = 0; month < 12; month++) {
      const firstDayOfMonth = new Date(currentYear, month, 1);
      let thirdSaturday = new Date(currentYear, month, 1);
      
      // Find the first Saturday
      while (thirdSaturday.getDay() !== 6) {
        thirdSaturday.setDate(thirdSaturday.getDate() + 1);
      }
      
      // Add 14 days to get to the third Saturday
      thirdSaturday.setDate(thirdSaturday.getDate() + 14);
      
      totalMatches++;
      if (thirdSaturday < today) {
        completedMatches++;
      }
    }
    
    const remainingMatches = totalMatches - completedMatches;
    
    // Calculate total competitors and average score from leaderboard data
    const totalCompetitors = leaderboardData.length;
    
    // Calculate average score if there's data
    let averageScore = "N/A";
    if (totalCompetitors > 0) {
      const totalPoints = leaderboardData.reduce((sum, entry) => {
        return sum + (entry.totalPoints || entry.seasonTotal || 0);
      }, 0);
      averageScore = (totalPoints / totalCompetitors).toFixed(1);
    }
    
    return [
      { label: "Total Competitors", value: totalCompetitors.toString() },
      { label: "Matches Completed", value: completedMatches.toString() },
      { label: "Remaining Matches", value: remainingMatches.toString() },
      { label: "Average Score", value: averageScore }
    ];
  };

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

  // Get upcoming matches and season stats from our centralized events data model
  const upcomingEvents = getUpcomingEvents(3);
  const seasonStats = calculateSeasonStats(leaderboard);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Enhanced geometric background */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50L20 20M50 50L80 20M50 50L80 80M50 50L20 80' stroke='%23334155' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section with enhanced styling */}
        <section className="container mx-auto px-4 sm:px-6 py-16">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-red-500/10 border border-amber-500/20 text-amber-600 font-semibold text-sm mb-6 shadow-sm">
              <TrophyIcon className="h-4 w-4 mr-2 text-amber-500" />
              2025 New Mexico Precision Rifle Points Race
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800">
              <span>Championship</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-600">
                Standings
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Track the current standings in our annual points race competition. 
              Points are awarded based on match performance and participation.
            </p>
          </motion.div>

          {/* Season Stats with improved card design */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {seasonStats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="bg-white backdrop-blur-sm border border-slate-200 rounded-2xl p-6 text-center hover:shadow-xl hover:border-slate-300 transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-600 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Data Status with improved design */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white backdrop-blur-sm border border-slate-200 rounded-xl p-4 shadow-sm">
            <div className="mb-4 md:mb-0 flex items-center">
              <ClockIcon className="h-5 w-5 text-amber-500 mr-2" />
              <span className="text-sm text-slate-600">
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
              className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-50 hover:shadow-md transition-all duration-300 flex items-center justify-center disabled:opacity-50"
            >
              <ArrowPathIcon className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              {loading ? 'Refreshing...' : 'Refresh Data'}
            </button>
          </div>

          {/* Leaderboard Section with improved design */}
          <div className="mb-16">
            <div className="mb-8 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-900 mb-2">Current Standings</h2>
              <p className="text-slate-600 text-lg">
                Season leaders based on cumulative points from completed matches
              </p>
              {sheetData?.lastUpdated && (
                <p className="text-sm text-slate-500">
                  Last updated: {formatLastUpdated(sheetData.lastUpdated)}
                </p>
              )}
            </div>

            {/* Leaderboard Table with enhanced styling */}
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <div className="bg-gradient-to-r from-amber-500 to-red-600 text-white p-6">
                <div className="grid grid-cols-6 gap-1 font-semibold text-sm md:text-base">
                  <div className="text-center">Rank</div>
                  <div className="text-center">Shooter</div>
                  <div className="text-center">Season Total</div>
                  <div className="text-center">Top Score</div>
                  <div className="text-center">2nd Top Score</div>
                  <div className="text-center">3rd Score</div>
                </div>
              </div>
              <div className="bg-white">
                {loading && !leaderboard.length ? (
                  <div className="p-8 text-center">
                    <div className="animate-spin w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full mx-auto mb-4"></div>
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
                      <motion.div 
                        key={index} 
                        className={`grid grid-cols-6 gap-1 p-4 hover:bg-slate-50 transition-colors ${
                          index < 3 ? 'bg-gradient-to-r from-amber-50 to-amber-100/50' : ''
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <div className="flex items-center justify-center">
                          <div className="text-lg font-bold text-slate-700">
                            {index === 0 ? (
                              <span className="flex items-center">
                                <span className="text-yellow-500 text-2xl">🏆</span>
                              </span>
                            ) : index === 1 ? (
                              <span className="flex items-center">
                                <span className="text-gray-400 text-2xl">🥈</span>
                              </span>
                            ) : index === 2 ? (
                              <span className="flex items-center">
                                <span className="text-amber-700 text-2xl">🥉</span>
                              </span>
                            ) : (
                              <span className="text-slate-500">#{index + 1}</span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md ${
                            index === 0 ? 'bg-gradient-to-br from-yellow-400 to-amber-600' :
                            index === 1 ? 'bg-gradient-to-br from-slate-300 to-slate-500' :
                            index === 2 ? 'bg-gradient-to-br from-amber-600 to-amber-800' :
                            'bg-gradient-to-br from-slate-500 to-slate-700'
                          }`}>
                            {entry.name.split(' ').map(part => part[0]).join('')}
                          </div>
                          <span className="ml-2 font-semibold text-slate-900">{entry.name}</span>
                        </div>
                        <div className="text-center font-bold text-slate-900 flex items-center justify-center">
                          <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                            {entry.totalPoints || entry.seasonTotal}
                          </span>
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
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Upcoming Matches with improved card design - Now using EventCard component */}
          <div className="mb-16">
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between">
              <div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-900 mb-2">Upcoming Matches</h2>
                <p className="text-slate-600">
                  Mark your calendar for these monthly competition events.
                </p>
              </div>
              <Link href="/events" className="inline-flex items-center text-amber-600 font-semibold group mt-4 md:mt-0">
                View all events
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event.id} event={event} compact={false} index={index} />
              ))}
            </div>
          </div>

          {/* Rules Section with improved design */}
          <div className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-900 mb-2">Points Race Rules</h2>
              <p className="text-slate-600">
                Understanding how points are awarded and standings are calculated.
              </p>
            </div>

            <div className="bg-white backdrop-blur-sm border border-slate-200 rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center">
                    <div className="bg-amber-100 p-2 rounded-lg mr-3">
                      <CheckBadgeIcon className="h-5 w-5 text-amber-600" />
                    </div>
                    Match Points
                  </h3>
                  <p className="text-slate-600 pl-12">
                    Points are awarded based on your finishing position in each match. 
                    First place receives 25 points, with a sliding scale for lower positions.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center">
                    <div className="bg-amber-100 p-2 rounded-lg mr-3">
                      <CheckBadgeIcon className="h-5 w-5 text-amber-600" />
                    </div>
                    Participation Points
                  </h3>
                  <p className="text-slate-600 pl-12">
                    Each competitor receives 5 participation points for each match they attend, 
                    regardless of finishing position.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center">
                    <div className="bg-amber-100 p-2 rounded-lg mr-3">
                      <CheckBadgeIcon className="h-5 w-5 text-amber-600" />
                    </div>
                    Season Standings
                  </h3>
                  <p className="text-slate-600 pl-12">
                    Your season total is calculated from your best 8 match results. 
                    This allows competitors to miss some matches while remaining competitive.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center">
                    <div className="bg-amber-100 p-2 rounded-lg mr-3">
                      <CheckBadgeIcon className="h-5 w-5 text-amber-600" />
                    </div>
                    Divisions
                  </h3>
                  <p className="text-slate-600 pl-12">
                    Competitors are classified into divisions based on equipment: Open, Tactical, 
                    Production, and Factory. Each division has its own champion.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* CTA Section with improved design */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-8 md:p-12 lg:p-16 text-center max-w-5xl mx-auto border border-amber-200 shadow-xl">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-red-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Ready to Compete?
              </motion.h2>
              <motion.p 
                className="text-xl text-slate-700 mb-10 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join our next match and start earning points in the season standings! 
                <span className="block mt-2">New competitors are always welcome, regardless of experience level.</span>
                <span className="block mt-2">Have questions? Reach out through our Facebook group.</span>
              </motion.p>
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <a 
                  href="/bolt-gun-points-race" 
                  className="group bg-gradient-to-r from-amber-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-amber-500/25 transition-all duration-300 flex items-center justify-center"
                >
                  Register for Next Match
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

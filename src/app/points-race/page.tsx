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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/50">
      {/* Subtle geometric background */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50L20 20M50 50L80 20M50 50L80 80M50 50L20 80' stroke='%23B45309' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-amber-100/50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-700 rounded-xl blur-sm opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-red-600 to-blue-700 p-3 rounded-xl">
                    <ViewfinderCircleIcon className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-red-800 to-blue-800 bg-clip-text text-transparent">
                    Bolt Gun Nation
                  </div>
                  <div className="text-xs font-semibold text-amber-700 tracking-wider uppercase">
                    Points Race • Season 2025
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex items-center space-x-8">
                <a href="/" className="text-slate-700 hover:text-red-700 font-medium transition-colors">Home</a>
                <a href="/points-race" className="text-red-700 font-medium border-b-2 border-red-600">Points Race</a>
                <a href="/sponsors" className="text-slate-700 hover:text-red-700 font-medium transition-colors">Sponsors</a>
                <a href="/#community" className="text-slate-700 hover:text-red-700 font-medium transition-colors">Community</a>
                <a 
                  href="https://www.facebook.com/groups/339663940504983/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Join Group
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">
          <motion.div 
            className="text-center max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 text-red-800 font-semibold text-sm mb-6">
              <TrophyIcon className="h-4 w-4 mr-2 text-red-600" />
              2025 New Mexico Precision Rifle Points Race
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-slate-900">Championship</span>
              <br />
              <span className="bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                Standings
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Track the season-long competition as New Mexico's finest precision rifle shooters 
              battle for the championship title and qualification spots for national events.
            </p>
            
            {/* Sign-up CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScrVfdf7qWpmMe91bAs9JCA4yMqXOMogH7LaMETfwj4gkmPHg/viewform"
                target="_blank"  
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-red-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
              >
                <TrophyIcon className="h-6 w-6 mr-3" />
                Join the Points Race - $60
              </a>
              <div className="text-center sm:text-left">
                <p className="text-sm text-slate-600 font-medium">Entry fee: $60 • Can join anytime</p>
                <p className="text-xs text-slate-500">100% of fees returned to shooters</p>
              </div>
            </div>
          </motion.div>

          {/* Season Stats */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {seasonStats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl p-6 text-center hover:bg-white/80 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Rules and Information Section */}
        <section className="py-16 bg-white/40 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
                Competition Rules & Structure
              </h2>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto">
                The goal of the points race is to use the crucible of competition to improve our New Mexico 
                Precision Rifle shooters' skills and prepare them to attend bigger regional and national matches, 
                while bringing together like-minded individuals to grow our sport, our club, and our sense of fellowship.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Schedule & Venues */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                    <CalendarDaysIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Schedule & Venues</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-1">Season Timeline</h4>
                    <p className="text-slate-600">Series runs from 2nd weekend in March through two-day finale in September</p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-1">Del Norte Gun Club</h4>
                    <p className="text-slate-600">Rio Rancho • 2nd Sunday of each month</p>
                  </div>
                  
                  <div className="border-l-4 border-amber-500 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-1">Zia Rifle & Pistol Club</h4>
                    <p className="text-slate-600">Albuquerque • 3rd Saturday of each month</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-1">Two-Day Finale</h4>
                    <p className="text-slate-600">September (likely 2nd weekend) • Double points</p>
                  </div>
                </div>
              </motion.div>

              {/* Entry & Fees */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center mr-4">
                    <TrophyIcon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Entry & Prizes</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-800 text-xl mb-2">$60 Entry Fee</h4>
                    <p className="text-green-700">Can enter at any time during the season</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-slate-700">
                      <CheckBadgeIcon className="h-5 w-5 text-green-500 mr-3" />
                      Look-back entry permitted (previous match counts)
                    </div>
                    <div className="flex items-center text-slate-700">
                      <CheckBadgeIcon className="h-5 w-5 text-green-500 mr-3" />
                      100% of fees returned to shooters
                    </div>
                    <div className="flex items-center text-slate-700">
                      <CheckBadgeIcon className="h-5 w-5 text-green-500 mr-3" />
                      Cash payouts for top finishers
                    </div>
                    <div className="flex items-center text-slate-700">
                      <CheckBadgeIcon className="h-5 w-5 text-green-500 mr-3" />
                      Prize table, swag bag & finale banquet
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Scoring System */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mr-4">
                  <ChartBarIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Scoring System</h3>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 text-lg">How Points Are Calculated</h4>
                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-800 mb-2">Part 1: Percentage Score</h5>
                      <p className="text-blue-700 text-sm">Your score ÷ High series competitor's score</p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <h5 className="font-semibold text-amber-800 mb-2">Part 2: Competitors Beaten</h5>
                      <p className="text-amber-700 text-sm">3 points for every shooter you beat (including absent BGN members and future joiners)</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-slate-900 mb-4 text-lg">Season Total Calculation</h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-slate-700">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">1</div>
                      Top score
                    </div>
                    <div className="flex items-center text-slate-700">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">2</div>
                      Second highest score
                    </div>
                    <div className="flex items-center text-slate-700">
                      <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">3</div>
                      Third highest score
                    </div>
                    <div className="flex items-center text-slate-700">
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">4</div>
                      Finale score (double points)
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Awards Structure */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                  <StarIcon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Awards & Recognition</h3>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-white/80 rounded-xl p-6 border border-amber-200">
                  <h4 className="font-bold text-slate-900 mb-3">Awards Banquet</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Immediately after two-day finale</li>
                    <li>• Only finale attendees eligible</li>
                    <li>• Season champion determined</li>
                  </ul>
                </div>
                
                <div className="bg-white/80 rounded-xl p-6 border border-amber-200">
                  <h4 className="font-bold text-slate-900 mb-3">Top Finishers</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Cash payout & trophy</li>
                    <li>• 1st & 2nd not eligible for prize table</li>
                    <li>• Recognition at banquet</li>
                  </ul>
                </div>
                
                <div className="bg-white/80 rounded-xl p-6 border border-amber-200">
                  <h4 className="font-bold text-slate-900 mb-3">Prize Table</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>• Random draw system</li>
                    <li>• Higher finish = more tickets</li>
                    <li>• Top shooters encouraged to share</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-slate-100 rounded-lg p-4">
                <p className="text-slate-700 text-sm italic">
                  <strong>Community Spirit:</strong> We encourage top shooters in the race to leave products they don't need 
                  for up-and-coming shooters, fostering the growth and fellowship that makes our community strong.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Leaderboard Section */}
        <section className="py-16 bg-white/40 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center mb-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mr-4">
                  Current Standings
                </h2>
                <button
                  onClick={handleRefresh}
                  disabled={loading}
                  className="bg-gradient-to-r from-red-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:from-red-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  <svg 
                    className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  {loading ? 'Refreshing...' : 'Refresh'}
                </button>
              </div>
              <p className="text-lg text-slate-600 mb-2">
                Season leaders based on cumulative points from completed matches
              </p>
              {sheetData?.lastUpdated && (
                <p className="text-sm text-slate-500">
                  Last updated: {formatLastUpdated(sheetData.lastUpdated)}
                </p>
              )}
              {error && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm max-w-md mx-auto">
                  <strong>Error:</strong> {error}
                </div>
              )}
            </motion.div>

            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 to-blue-700 text-white p-4">
                  <div className="grid grid-cols-6 gap-1 font-semibold text-xs">
                    <div className="text-center whitespace-nowrap">Rank</div>
                    <div className="text-center whitespace-nowrap">Shooter</div>
                    <div className="text-center whitespace-nowrap">Season Total</div>
                    <div className="text-center whitespace-nowrap">Top Score</div>
                    <div className="text-center whitespace-nowrap">2nd Score</div>
                    <div className="text-center whitespace-nowrap">3rd Score</div>
                  </div>
                </div>
                <div className="divide-y divide-slate-100">
                  {loading && leaderboard.length === 0 ? (
                    // Loading state
                    <div className="p-8 text-center">
                      <div className="animate-spin w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                      <p className="text-slate-600">Loading leaderboard data...</p>
                    </div>
                  ) : leaderboard.length === 0 ? (
                    // Empty state
                    <div className="p-8 text-center">
                      <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ChartBarIcon className="h-8 w-8 text-slate-400" />
                      </div>
                      <p className="text-slate-600 mb-2">No leaderboard data available</p>
                      <p className="text-sm text-slate-500">Scores will appear here once the spreadsheet is populated</p>
                    </div>
                  ) : (
                    // Actual leaderboard data - Show only top 16
                    leaderboard.slice(0, 16).map((shooter, index) => (
                      <div 
                        key={index} 
                        className={`grid grid-cols-6 gap-1 p-4 hover:bg-slate-50 transition-colors ${
                          shooter.rank <= 3 ? 'bg-gradient-to-r from-amber-50/50 to-orange-50/50' : ''
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="text-2xl font-bold text-slate-700 mr-2">#{shooter.rank}</span>
                          <span className="text-xl">{shooter.badge}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-semibold text-slate-900">{shooter.name}</span>
                        </div>
                        <div className="text-center font-bold text-slate-900">{shooter.seasonTotal}</div>
                        <div className="text-center text-slate-600">{shooter.topScore}</div>
                        <div className="text-center text-slate-600">{shooter.secondTopScore}</div>
                        <div className="text-center text-slate-600">{shooter.thirdScore}</div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Races */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
                Upcoming Races
              </h2>
              <p className="text-lg text-slate-600">
                Don't miss your chance to earn points and climb the leaderboard
              </p>
            </motion.div>

            <motion.div 
              className="grid lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {upcomingRaces.map((race, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-red-600">{race.date}</div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      race.status === 'Open' 
                        ? 'bg-green-100 text-green-700' 
                        : race.status === 'Registration Opens Soon'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {race.status}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{race.event}</h3>
                  
                  <div className="space-y-2 text-slate-600 mb-4">
                    <div className="flex items-center">
                      <MapIcon className="h-4 w-4 mr-2 text-slate-400" />
                      {race.location}
                    </div>
                    <div className="flex items-center">
                      <ViewfinderCircleIcon className="h-4 w-4 mr-2 text-slate-400" />
                      {race.distance}
                    </div>
                    <div className="flex items-center">
                      <StarIcon className="h-4 w-4 mr-2 text-slate-400" />
                      {race.points}
                    </div>
                  </div>
                  
                  <button className={`w-full py-2 rounded-lg font-medium transition-all duration-300 ${
                    race.status === 'Open'
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-lg'
                      : 'bg-slate-100 text-slate-600 cursor-not-allowed'
                  }`}>
                    {race.status === 'Open' ? 'Register Now' : 'Coming Soon'}
                  </button>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Sign-up CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="bg-gradient-to-r from-red-50 via-white to-blue-50 border border-red-100 rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Ready to Join the Competition?
                </h3>
                <p className="text-slate-600 mb-6">
                  Enter the Points Race today and start competing with New Mexico's finest precision rifle shooters. 
                  Remember, you can join at any time during the season!
                </p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScrVfdf7qWpmMe91bAs9JCA4yMqXOMogH7LaMETfwj4gkmPHg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-red-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <TrophyIcon className="h-5 w-5 mr-2" />
                  Sign Up Now - $60 Entry
                </a>
                <p className="text-xs text-slate-500 mt-3">
                  100% of entry fees returned to shooters through prizes, cash payouts, and finale banquet
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 py-16">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <div className="flex justify-center items-center mb-6">
                <div className="bg-gradient-to-r from-red-600 to-blue-700 p-2 rounded-lg mr-3">
                  <ViewfinderCircleIcon className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Bolt Gun Nation</span>
              </div>
              <p className="text-slate-400 mb-4">
                New Mexico's Premier Precision Rifle Community
              </p>
              <p className="text-sm text-slate-500">
                &copy; 2025 Bolt Gun Nation • Growing Through Competition • Building Excellence Together
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

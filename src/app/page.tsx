'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon, 
  TrophyIcon, 
  UsersIcon, 
  StarIcon,
  FlagIcon,
  MapIcon,
  AcademicCapIcon,
  ViewfinderCircleIcon,
  ChartBarIcon,
  CalendarDaysIcon,
  PlayIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';

/**
 * Bolt Gun Nation Homepage - Modern Precision Rifle Competition Community
 * Mission: Use competition to improve NM precision rifle shooters' skills
 */
export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const features = [
    {
      icon: TrophyIcon,
      title: "Elite Competition",
      description: "Master your craft through structured competition and advance to regional and national championships"
    },
    {
      icon: UsersIcon,
      title: "Expert Community",
      description: "Connect with New Mexico's most dedicated precision rifle enthusiasts and learn from the best"
    },
    {
      icon: ChartBarIcon,
      title: "Performance Analytics",
      description: "Track your progress with detailed statistics and personalized improvement recommendations"
    }
  ];

  const upcomingEvents = [
    { 
      date: "Feb", 
      day: "15", 
      event: "Monthly Precision Match", 
      location: "Santa Fe Range",
      participants: "24 registered"
    },
    { 
      date: "Mar", 
      day: "8", 
      event: "Long Range Workshop", 
      location: "Albuquerque",
      participants: "12 spots left"
    },
    { 
      date: "Apr", 
      day: "12", 
      event: "Regional Qualifier", 
      location: "Las Cruces",
      participants: "Open registration"
    }
  ];

  const stats = [
    { number: "250+", label: "Active Members" },
    { number: "48", label: "Competitions Held" },
    { number: "15", label: "National Qualifiers" },
    { number: "92%", label: "Skill Improvement" }
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
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 lg:py-32">
          <motion.div 
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div variants={fadeInUp} className="mb-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 text-red-800 font-semibold text-sm">
                    <TrophyIcon className="h-4 w-4 mr-2 text-red-600" />
                    New Mexico's Premier Precision Rifle Community
                  </div>
                </motion.div>
                
                <motion.h1 
                  variants={fadeInUp}
                  className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
                >
                  <span className="text-slate-900">
                    Forge Excellence
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                    Through Competition
                  </span>
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp}
                  className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl"
                >
                  Join New Mexico's most dedicated precision rifle community. We use structured competition to sharpen skills, build lasting fellowship, and prepare our members for regional and national championships.
                </motion.p>
                
                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a
                    href="https://www.facebook.com/groups/339663940504983/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center"
                  >
                    Join Our Community
                    <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button className="group bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                    <PlayIcon className="mr-2 h-5 w-5" />
                    Watch Introduction
                  </button>
                </motion.div>
              </div>

              {/* Stats Grid */}
              <motion.div 
                variants={fadeInUp}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl p-6 text-center hover:bg-white/80 transition-all duration-300">
                    <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                    <div className="text-sm font-medium text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white/40 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
                The Path to Mastery
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Every expert was once a beginner. Every champion was forged through dedication, practice, and the crucible of competition.
              </p>
            </motion.div>

            <motion.div 
              className="grid lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
                >
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-700 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-gradient-to-r from-red-600 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
                Upcoming Competitions
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Test your skills, learn from others, and prepare for the next level of competition
              </p>
            </motion.div>

            <motion.div 
              className="grid lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{event.date}</div>
                      <div className="text-3xl font-bold text-slate-900">{event.day}</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {event.participants}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{event.event}</h3>
                  <p className="text-slate-600 flex items-center mb-4">
                    <MapIcon className="h-4 w-4 mr-2 text-slate-400" />
                    {event.location}
                  </p>
                  <button className="w-full bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 py-2 rounded-lg font-medium hover:from-red-50 hover:to-red-100 hover:text-red-700 transition-all duration-300">
                    Register Now
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="py-16 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 text-blue-800 font-semibold text-sm mb-6">
                <UsersIcon className="h-4 w-4 mr-2 text-blue-600" />
                Join Our Active Community
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-slate-900">
                Connect with Fellow
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Precision Shooters
                </span>
              </h2>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
                Join our vibrant Facebook community where New Mexico's precision rifle enthusiasts 
                share knowledge, coordinate matches, celebrate achievements, and build lasting friendships.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Community Features */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4">
                      <CalendarDaysIcon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Match Updates & Results</h3>
                  </div>
                  <p className="text-slate-600">Get real-time updates on upcoming matches, weather conditions, and live results from competitions.</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center mr-4">
                      <AcademicCapIcon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Tips & Techniques</h3>
                  </div>
                  <p className="text-slate-600">Learn from experienced shooters, share your knowledge, and discuss equipment, ballistics, and shooting techniques.</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mr-4">
                      <UsersIcon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Fellowship & Support</h3>
                  </div>
                  <p className="text-slate-600">Connect with like-minded individuals, find shooting partners, and build lasting friendships in our tight-knit community.</p>
                </div>
              </motion.div>

              {/* Facebook CTA */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">Join Our Facebook Group</h3>
                    <p className="text-blue-100 mb-6 leading-relaxed">
                      Connect with 500+ precision rifle enthusiasts across New Mexico. 
                      Get match announcements, share your achievements, and be part of our growing community.
                    </p>
                    
                    <div className="space-y-4">
                      <a 
                        href="https://www.facebook.com/groups/339663940504983/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Join Facebook Group
                        <ArrowRightIcon className="h-4 w-4 ml-2" />
                      </a>
                      
                      <div className="text-sm text-blue-200">
                        Free to join • Active community • Daily updates
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 via-red-900 to-blue-900">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center text-white max-w-4xl mx-auto"
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Ready to Elevate Your Game?
              </h2>
              <p className="text-xl mb-10 opacity-90 leading-relaxed">
                Whether you're a seasoned competitor or just starting your precision rifle journey, 
                our community provides the structure, support, and competition you need to reach your full potential.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.facebook.com/groups/339663940504983/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-slate-900 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  Join Bolt Gun Nation
                </a>
                <a
                  href="/points-race"
                  className="bg-amber-500 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-amber-600 transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  View Competition Calendar
                </a>
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

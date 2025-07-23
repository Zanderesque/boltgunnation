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
 * Using WordPress color variables and consistent Tailwind classes
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
    <div className="min-h-screen bg-wp-base">
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
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-wp-accent-1/10 border border-wp-accent-1/20 text-wp-accent-1 font-semibold text-sm">
                    <TrophyIcon className="h-4 w-4 mr-2 text-wp-accent-1" />
                    New Mexico's Premier Precision Rifle Community
                  </div>
                </motion.div>
                
                <motion.h1 
                  variants={fadeInUp}
                  className="text-5xl lg:text-7xl font-bold mb-8 leading-tight"
                >
                  <span className="text-wp-contrast">
                    Forge Excellence
                  </span>
                  <br />
                  <span className="text-wp-accent-1">
                    Through Competition
                  </span>
                </motion.h1>
                
                <motion.p 
                  variants={fadeInUp}
                  className="text-xl text-wp-contrast/70 mb-10 leading-relaxed max-w-xl"
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
                    className="group bg-wp-accent-1 text-wp-contrast px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-wp-accent-1/25 transition-all duration-300 flex items-center justify-center"
                  >
                    Join Our Community
                    <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button className="group bg-wp-base border border-wp-contrast/10 text-wp-contrast px-8 py-4 rounded-xl font-semibold hover:bg-wp-contrast/5 hover:shadow-lg transition-all duration-300 flex items-center justify-center">
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
                  <div key={index} className="bg-wp-base/60 backdrop-blur-sm border border-wp-contrast/10 rounded-2xl p-6 text-center hover:bg-wp-base/80 transition-all duration-300">
                    <div className="text-3xl font-bold text-wp-accent-1 mb-2">{stat.number}</div>
                    <div className="text-sm font-medium text-wp-contrast/70">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-wp-base/40 backdrop-blur-sm border-y border-wp-contrast/10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-wp-contrast">
                The Path to Mastery
              </h2>
              <p className="text-xl text-wp-contrast/70 max-w-3xl mx-auto">
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
                  className="group bg-wp-base/80 backdrop-blur-sm border border-wp-contrast/10 rounded-2xl p-8 hover:bg-wp-base hover:shadow-xl hover:shadow-wp-contrast/5 transition-all duration-500"
                >
                  <div className="bg-wp-accent-1/10 rounded-xl p-4 inline-block mb-6">
                    <feature.icon className="h-8 w-8 text-wp-accent-1" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-wp-contrast">{feature.title}</h3>
                  <p className="text-wp-contrast/70">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="py-20 bg-wp-base">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16 flex flex-col md:flex-row md:items-end justify-between"
            >
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-wp-contrast">Upcoming Events</h2>
                <p className="text-xl text-wp-contrast/70 max-w-2xl">
                  Join us for our next competition or training event. All skill levels welcome.
                </p>
              </div>
              <a href="/events" className="inline-flex items-center text-wp-accent-1 font-semibold group mt-6 md:mt-0">
                View all events
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-wp-base border border-wp-contrast/10 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex">
                    <div className="bg-wp-accent-1 text-wp-contrast p-6 flex flex-col items-center justify-center">
                      <span className="text-sm font-medium">{event.date}</span>
                      <span className="text-2xl font-bold">{event.day}</span>
                    </div>
                    <div className="p-6 flex-1">
                      <h3 className="font-bold text-wp-contrast mb-2">{event.event}</h3>
                      <div className="flex items-center text-wp-contrast/70 text-sm mb-1">
                        <MapIcon className="h-4 w-4 mr-1" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-wp-contrast/70 text-sm">
                        <UsersIcon className="h-4 w-4 mr-1" />
                        {event.participants}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-wp-accent-1/10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-wp-base border border-wp-contrast/10 rounded-3xl p-8 md:p-12 lg:p-16 text-center max-w-5xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-wp-contrast">
                Ready to Join New Mexico's Premier Precision Rifle Community?
              </h2>
              <p className="text-xl text-wp-contrast/70 mb-10 max-w-3xl mx-auto">
                Whether you're a seasoned competitor or just getting started, Bolt Gun Nation has a place for you. Join us and take your precision shooting to the next level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.facebook.com/groups/339663940504983/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-wp-accent-1 text-wp-contrast px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-wp-accent-1/25 transition-all duration-300 flex items-center justify-center"
                >
                  Join Our Community
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="/contact"
                  className="group bg-wp-base border border-wp-contrast/10 text-wp-contrast px-8 py-4 rounded-xl font-semibold hover:bg-wp-contrast/5 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

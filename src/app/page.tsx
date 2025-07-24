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
import { getUpcomingEvents } from '@/lib/events';
import EventCard from '@/components/events/EventCard';
import Link from 'next/link';
import Typography from '@/components/ui/Typography';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import { sectionStyles, spacingStyles } from '@/lib/styles';

/**
 * Bolt Gun Nation Homepage - Modern Precision Rifle Competition Community
 * Mission: Use competition to improve NM precision rifle shooters' skills
 * Using standardized components for consistent styling and animations
 */
export default function HomePage() {
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

  // Get upcoming events from our centralized data model
  const upcomingEvents = getUpcomingEvents(3);

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
        <section className={`${sectionStyles.base} py-20 lg:py-32`}>
          <AnimatedContainer 
            className="max-w-6xl mx-auto"
            variant="staggerContainer"
            stagger={true}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <AnimatedContainer variant="fadeInUp" className="mb-8">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-wp-accent-1/20 text-wp-accent-1 font-semibold text-sm">
                    <TrophyIcon className="h-4 w-4 mr-2 text-wp-accent-1" />
                    New Mexico's Premier Precision Rifle Community
                  </div>
                </AnimatedContainer>
                
                <Typography 
                  variant="h1" 
                  animate={true} 
                  animationVariant="fadeInUp" 
                  animationDelay={0.1}
                  gradient={true}
                  className="mb-8 leading-tight"
                >
                  Elevate Your <br />Precision Rifle Skills
                </Typography>

                <AnimatedContainer variant="fadeInUp" delay={0.2}>
                  <Typography variant="bodyLg" className="mb-8 text-wp-contrast/80">
                    Join New Mexico's most dedicated precision rifle community. 
                    We use competition to drive skill development and foster 
                    a supportive community of marksmen.
                  </Typography>
                </AnimatedContainer>

                <AnimatedContainer variant="fadeInUp" delay={0.3} className="flex flex-wrap gap-4">
                  <Button 
                    variant="primary" 
                    href="/events" 
                    icon={<CalendarDaysIcon className="w-5 h-5" />}
                  >
                    Upcoming Events
                  </Button>
                  <Button 
                    variant="outline" 
                    href="/bolt-gun-points-race"
                    icon={<TrophyIcon className="w-5 h-5" />}
                  >
                    Points Race Series
                  </Button>
                </AnimatedContainer>
              </div>
              
              <AnimatedContainer 
                variant="fadeInScale" 
                delay={0.4} 
                className="relative hidden lg:block"
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-wp-accent-1/20 to-wp-accent-2/20 p-1">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <img 
                      src="/media/images/uploads/2023/03/50-BMG-Shockwave-1536x864.jpg" 
                      alt="Precision rifle shooter in competition" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 w-48">
                  <div className="flex items-center gap-3">
                    <div className="bg-wp-accent-1/20 rounded-full p-2">
                      <TrophyIcon className="h-6 w-6 text-wp-accent-1" />
                    </div>
                    <div>
                      <Typography variant="h6" className="m-0">Points Race</Typography>
                      <Typography variant="bodySm" className="text-wp-contrast/70">Next event: Aug 15</Typography>
                    </div>
                  </div>
                </div>
              </AnimatedContainer>
            </div>
          </AnimatedContainer>
        </section>

        {/* Features Section */}
        <section className={`${sectionStyles.base} ${sectionStyles.withBackground}`}>
          <div className="max-w-6xl mx-auto">
            <SectionHeader 
              title="Why Join Bolt Gun Nation" 
              subtitle="We're dedicated to improving precision rifle skills through competition and community"
              centered={true}
            />
            
            <AnimatedContainer 
              variant="staggerContainer" 
              stagger={true} 
              className="grid md:grid-cols-3 gap-8 mt-16"
            >
              {features.map((feature, index) => (
                <AnimatedContainer key={index} variant="fadeInUp">
                  <div className="bg-white rounded-xl p-6 shadow-md border border-wp-contrast/10 h-full">
                    <div className="bg-wp-accent-1/10 rounded-full p-3 inline-block mb-4">
                      <feature.icon className="h-6 w-6 text-wp-accent-1" />
                    </div>
                    <Typography variant="h4" className="mb-2">{feature.title}</Typography>
                    <Typography variant="body">{feature.description}</Typography>
                  </div>
                </AnimatedContainer>
              ))}
            </AnimatedContainer>
          </div>
        </section>

        {/* Events Section */}
        <section className={sectionStyles.base}>
          <div className="max-w-6xl mx-auto">
            <SectionHeader 
              title="Upcoming Events" 
              subtitle="Join us at our next competition or training session"
            />
            
            <AnimatedContainer 
              variant="staggerContainer" 
              stagger={true} 
              className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event, index) => (
                  <EventCard key={event.id} event={event} index={index} />
                ))
              ) : (
                <AnimatedContainer variant="fadeIn" className="md:col-span-2 lg:col-span-3">
                  <Typography variant="muted" className="text-center py-8">
                    No upcoming events scheduled at this time.
                  </Typography>
                </AnimatedContainer>
              )}
              
              <AnimatedContainer variant="fadeInUp" delay={0.2} className="flex justify-center mt-8 md:col-span-2 lg:col-span-3">
                <Button 
                  variant="secondary"
                  href="/events"
                  icon={<ArrowRightIcon className="w-5 h-5" />}
                  iconPosition="right"
                >
                  View All Events
                </Button>
              </AnimatedContainer>
            </AnimatedContainer>
          </div>
        </section>

        {/* Stats Section */}
        <section className={`${sectionStyles.base} bg-wp-accent-1/5`}>
          <div className="max-w-6xl mx-auto">
            <AnimatedContainer 
              variant="staggerContainer" 
              stagger={true} 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <AnimatedContainer key={index} variant="fadeInUp">
                  <div className="text-center">
                    <Typography variant="h2" gradient={true} className="mb-2">{stat.number}</Typography>
                    <Typography variant="muted">{stat.label}</Typography>
                  </div>
                </AnimatedContainer>
              ))}
            </AnimatedContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className={sectionStyles.base}>
          <AnimatedContainer variant="fadeInScale" className="max-w-4xl mx-auto text-center">
            <Typography variant="h2" gradient={true} className="mb-6">
              Ready to Join New Mexico's Premier Precision Rifle Community?
            </Typography>
            
            <Typography variant="bodyLg" className="mb-8 text-wp-contrast/80">
              Whether you're a seasoned competitor or just getting started, 
              Bolt Gun Nation offers the resources, community, and competitions 
              to take your precision rifle skills to the next level.
            </Typography>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="primary" 
                href="/events" 
                size="lg"
              >
                Join Our Next Event
              </Button>
              <Button 
                variant="outline" 
                href="/about" 
                size="lg"
              >
                Learn More About Us
              </Button>
            </div>
          </AnimatedContainer>
        </section>
      </div>
    </div>
  );
}

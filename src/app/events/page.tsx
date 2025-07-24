'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getUpcomingEvents, getPastEvents } from '@/lib/events';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import EventCard from '@/components/events/EventCard';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import { sectionStyles, motionVariants, typographyStyles, spacingStyles } from '@/lib/styles';

/**
 * Events Page - Displays all upcoming and past events
 * Updated to use standardized styles and reusable components
 */
export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents(12); // Show last 12 past events

  return (
    <div className="min-h-screen bg-wp-base">
      <div className={`${sectionStyles.base} ${spacingStyles.section}`}>
        {/* Page Header */}
        <motion.div 
          className={`text-center ${spacingStyles.betweenElements}`}
          {...motionVariants.fadeInUp}
        >
          <h1 className={`${typographyStyles.h1} ${typographyStyles.gradientText}`}>
            Upcoming Events
          </h1>
          <p className={`mt-4 ${typographyStyles.bodyLg} ${typographyStyles.muted} max-w-3xl mx-auto`}>
            Join us for our next competition or training event. All skill levels welcome.
          </p>
        </motion.div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <Button
              variant={activeTab === 'upcoming' ? 'primary' : 'secondary'}
              onClick={() => setActiveTab('upcoming')}
              className="rounded-r-none"
              icon={<CalendarDaysIcon className="w-4 h-4" />}
            >
              Upcoming Events
            </Button>
            <Button
              variant={activeTab === 'past' ? 'primary' : 'secondary'}
              onClick={() => setActiveTab('past')}
              className="rounded-l-none"
            >
              Past Events
            </Button>
          </div>
        </div>
        
        {/* Events List */}
        <motion.div
          className="space-y-6"
          variants={motionVariants.staggerContainer}
          initial="initial"
          animate="animate"
        >
          {activeTab === 'upcoming' ? (
            upcomingEvents.length > 0 ? (
              upcomingEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className={typographyStyles.muted}>No upcoming events scheduled at this time.</p>
              </div>
            )
          ) : (
            pastEvents.length > 0 ? (
              pastEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className={typographyStyles.muted}>No past events to display.</p>
              </div>
            )
          )}
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          className="mt-16 text-center"
          {...motionVariants.fadeInUp}
        >
          <SectionHeader 
            title="Want to Join Our Events?" 
            subtitle="Register for upcoming competitions or learn more about our training sessions"
            centered={true}
            withAccentLine={false}
          />
          
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              href="/bolt-gun-points-race"
              icon={<CalendarDaysIcon className="w-5 h-5" />}
            >
              Points Race Series
            </Button>
            <Button 
              variant="outline" 
              href="mailto:info@boltgunnation.com"
              external={true}
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

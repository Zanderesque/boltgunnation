'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPinIcon,
  ArrowLongRightIcon,
  ClockIcon,
  CheckBadgeIcon,
  FireIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';
import { formatEventDate, type Event } from '@/lib/events';
import Card from '@/components/ui/Card';
import Typography from '@/components/ui/Typography';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

interface EventCardProps {
  event: Event;
  compact?: boolean;
  index?: number;
}

/**
 * Reusable event card component
 * Uses standardized Card, Typography, and Badge components
 * Can be used in compact mode for homepage or full mode for events page
 */
export default function EventCard({ event, compact = false, index = 0 }: EventCardProps) {
  const { month, day } = formatEventDate(event.date);
  
  // Helper function to render status badge
  const renderStatusBadge = (status: Event['status']) => {
    if (compact) return null; // Don't show badges in compact mode
    
    switch (status) {
      case 'Monthly':
        return (
          <Badge variant="primary" icon={<ClockIcon className="w-3 h-3" />}>
            Monthly
          </Badge>
        );
      case 'Championship':
        return (
          <Badge variant="accent" icon={<TrophyIcon className="w-3 h-3" />}>
            Championship
          </Badge>
        );
      case 'Workshop':
        return (
          <Badge variant="secondary" icon={<CheckBadgeIcon className="w-3 h-3" />}>
            Workshop
          </Badge>
        );
      case 'Special':
        return (
          <Badge variant="tertiary" icon={<FireIcon className="w-3 h-3" />}>
            Special
          </Badge>
        );
      default:
        return null;
    }
  };

  // Determine if this is a Points Race event
  const isPointsRace = event.event.toLowerCase().includes('points race');
  
  // Image path for Points Race events - ensure it starts without a leading slash for public directory
  const imagePath = isPointsRace 
    ? 'media/images/uploads/2023/03/50-BMG-Shockwave-1536x864.jpg'
    : null;

  if (compact) {
    // Compact version for homepage
    return (
      <Card 
        variant="white"
        className="overflow-hidden"
        animationDelay={index * 0.1}
      >
        <div className="flex">
          {/* Date column */}
          <div className="bg-gradient-to-br from-wp-primary to-wp-primary-dark text-white p-3 flex flex-col items-center justify-center w-20">
            <Typography variant="h4" className="m-0 text-white">{day}</Typography>
            <Typography variant="bodySm" className="text-white/90">{month}</Typography>
          </div>
          
          {/* Content column */}
          <div className="p-3 flex-1">
            <Typography variant="h5" className="m-0 truncate">{event.event}</Typography>
            <div className="mt-1 flex items-center">
              <MapPinIcon className="w-3 h-3 text-wp-primary mr-1 flex-shrink-0" />
              <Typography variant="bodySm" className="truncate text-wp-contrast/70">
                {event.location}
              </Typography>
            </div>
            
            <div className="mt-2 flex justify-between items-center">
              <Typography variant="bodySm" className="text-wp-primary font-medium">
                {event.registrationStatus}
              </Typography>
              
              <Button 
                variant="link" 
                href="/events"
                size="sm"
                icon={<ArrowLongRightIcon className="w-3 h-3" />}
                iconPosition="right"
              >
                Details
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
  
  // Full version for events page
  return (
    <Card 
      variant="base"
      className="overflow-hidden"
      animationDelay={index * 0.1}
    >
      {/* Image for Points Race events */}
      {isPointsRace && imagePath && (
        <div className="relative w-full h-64">
          <Image
            src={imagePath}
            alt="Precision rifle shooter in competition"
            fill
            style={{ objectFit: 'cover' }}
            priority
            unoptimized
          />
          <div className="absolute bottom-0 right-0 bg-white p-3 rounded-tl-lg shadow-md">
            <div className="flex items-center">
              <TrophyIcon className="h-5 w-5 text-amber-500 mr-2" />
              <div>
                <Typography variant="h5" className="m-0">Points Race</Typography>
                <Typography variant="bodySm" className="text-slate-600">Next event: Aug 15</Typography>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex flex-col md:flex-row">
        {/* Date column */}
        <div className="bg-gradient-to-br from-wp-primary to-wp-primary-dark text-white p-4 md:p-6 flex flex-row md:flex-col items-center justify-center md:w-32">
          <Typography variant="h2" className="m-0 text-white">{day}</Typography>
          <Typography variant="h5" className="ml-2 md:ml-0 m-0 text-white/90">{month}</Typography>
        </div>
        
        {/* Content column */}
        <div className="p-4 md:p-6 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <Typography variant="h3" className="m-0">{event.event}</Typography>
            {renderStatusBadge(event.status)}
          </div>
          
          <div className="mt-3 flex items-start">
            <MapPinIcon className="w-5 h-5 text-wp-primary mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <Typography variant="body" className="font-medium">{event.location}</Typography>
              <Typography variant="bodySm" className="text-wp-contrast/70">{event.address}</Typography>
            </div>
          </div>
          
          {event.distance && (
            <Typography variant="bodySm" className="mt-2 text-wp-contrast/80">
              <span className="font-medium">Distance:</span> {event.distance}
            </Typography>
          )}
          
          {event.points && (
            <Typography variant="bodySm" className="mt-1 text-wp-contrast/80">
              <span className="font-medium">Points:</span> {event.points}
            </Typography>
          )}
        </div>
      </div>
    </Card>
  );
}

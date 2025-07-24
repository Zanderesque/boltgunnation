'use client';

import Image from 'next/image';
import { TrophyIcon, StarIcon, GiftIcon, MegaphoneIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Typography from '@/components/ui/Typography';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import { sectionStyles } from '@/lib/styles';

// Current sponsors organized by tier
const currentSponsors = {
  stage: [
    {
      name: 'Vortex Optics',
      logo: '/media/images/sponsors/vortex-extreme-seeklogo.svg',
      website: 'https://vortexoptics.com',
      description: 'High-quality optics for shooting and hunting'
    }
  ],
  platinum: [
    {
      name: 'Bulldog Firearms',
      logo: '/media/images/uploads/2023/03/Bulldog-Logo.png', // TODO: Copy from /media/images/uploads/2023/03/Bulldog-Logo.png
      website: 'https://www.bulldogfirearmsnm.com',
      description: 'Rio Rancho, New Mexico'
    }
  ],
  gold: [
    {
      name: 'QPro Defense',
      logo: '/media/images/sponsors/QPRO-D-logo.jpg',
      website: 'https://www.qproprofessionaldefense.com',
      description: 'Rio Rancho, New Mexico'
    },
    {
      name: 'Kelbly',
      logo: '/media/images/sponsors/kelby-logo.jpg',
      website: 'https://kelbly.com',
      description: 'Premium custom rifles and actions'
    },
    {
      name: 'AMP Annealing',
      logo: '/media/images/sponsors/amp logo.png',
      website: 'https://www.ampannealing.com',
      description: 'Precision case annealing machines and equipment'
    },
    {
      name: 'MDT',
      logo: '/media/images/sponsors/mdt-seeklogo.svg',
      website: 'https://mdt.com',
      description: 'Precision rifle chassis systems and accessories'
    }
  ],
  silver: [
    {
      name: 'Del Norte Gun Club',
      logo: '/media/images/uploads/2023/03/Del-Norte-Gun-Club-logo.jpg', // TODO: Copy from /media/images/uploads/2023/03/Del-Norte-Gun-Club-logo.jpg
      website: 'https://www.dngnm.com',
      description: 'Rio Rancho, New Mexico'
    }
  ],
  bronze: [
    {
      name: 'Area 419',
      logo: '/media/images/sponsors/area419 logo.jpg', // TODO: Copy from /media/images/uploads/2024/07/area419-400x250.webp
      website: 'https://area419.com',
      description: 'Precision rifle accessories and components'
    }
  ]
};

const sponsorshipLevels = [
  {
    name: 'Stage',
    amount: '$1,250+',
    color: 'from-purple-600 to-indigo-700',
    icon: TrophyIcon,
    benefits: [
      'Match book recognition',
      'Extra large logo on jersey',
      'Social media recognition',
      'Sponsorship webpage placement',
      'Press release',
      'Free invite to the two-day finale points match',
      'Finale match speech',
      'Stage sponsorship during entire Points Race'
    ],
    featured: true
  },
  {
    name: 'Platinum',
    amount: '$1,000',
    color: 'from-slate-600 to-slate-700',
    icon: StarIcon,
    benefits: [
      'Match book recognition',
      'Large logo on jersey',
      'Social media recognition',
      'Sponsorship webpage placement',
      'Press release'
    ]
  },
  {
    name: 'Gold',
    amount: '$500',
    color: 'from-amber-600 to-yellow-600',
    icon: GiftIcon,
    benefits: [
      'Match book recognition',
      'Medium logo on jersey',
      'Social media recognition',
      'Sponsorship webpage placement',
      'Press release'
    ]
  },
  {
    name: 'Silver',
    amount: '$250',
    color: 'from-gray-500 to-gray-600',
    icon: MegaphoneIcon,
    benefits: [
      'Match book recognition',
      'Small logo on jersey',
      'Social media recognition',
      'Sponsorship webpage placement',
      'Press release'
    ]
  },
  {
    name: 'Bronze',
    amount: '$100',
    color: 'from-orange-600 to-red-600',
    icon: UserGroupIcon,
    benefits: [
      'Match book recognition',
      'Social media recognition',
      'Sponsorship webpage placement',
      'Press release'
    ]
  }
];

export default function SponsorsPage() {
  const renderSponsorTier = (tierName: string, sponsors: any[], tierColor: string, logoSize: string) => {
    if (sponsors.length === 0) return null;

    return (
      <AnimatedContainer variant="fadeInUp" className="mb-12" delay={tierName === 'Stage' ? 0.1 : tierName === 'Platinum' ? 0.2 : tierName === 'Gold' ? 0.3 : tierName === 'Silver' ? 0.4 : 0.5}>
        <Typography 
          variant="h3" 
          className={`text-center mb-6 bg-gradient-to-r ${tierColor} bg-clip-text text-transparent`}
        >
          {tierName} Sponsors
        </Typography>
        <div className={`grid ${sponsors.length === 1 ? 'grid-cols-1 justify-items-center' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
          {sponsors.map((sponsor, index) => (
            <Card
              key={index}
              variant="glass"
              className="hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className={`${logoSize} mx-auto mb-4 relative`}>
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <Typography variant="h4" className="mb-2">{sponsor.name}</Typography>
              <Typography variant="body" className="text-slate-600 mb-3">{sponsor.description}</Typography>
              {sponsor.website && (
                <Button
                  variant="text"
                  href={sponsor.website}
                  target="_blank"
                  size="sm"
                  className="text-amber-600 hover:text-red-600"
                >
                  Visit Website →
                </Button>
              )}
            </Card>
          ))}
        </div>
      </AnimatedContainer>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Subtle geometric background */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50L20 20M50 50L80 20M50 50L80 80M50 50L20 80' stroke='%23334155' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="relative z-10">
        <section className={sectionStyles.base}>
          <AnimatedContainer className="max-w-6xl mx-auto" variant="staggerContainer" stagger={true}>
            <AnimatedContainer variant="fadeInUp" className="text-center mb-16">
              <Typography 
                variant="h1" 
                className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800"
              >
                <span>Our</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-600">
                  Sponsors
                </span>
              </Typography>
              <Typography variant="bodyLg" className="text-slate-600 max-w-3xl mx-auto">
                We're grateful for the support of these organizations that help make our competitions possible.
              </Typography>
            </AnimatedContainer>

            {/* Current Sponsors */}
            <AnimatedContainer variant="fadeInUp" className="mb-20" delay={0.1}>
              <SectionHeader
                title="Current Sponsors"
                className="text-center mb-12"
              />
              
              {renderSponsorTier('Stage', currentSponsors.stage, 'from-purple-600 to-indigo-700', 'h-32 w-full')}
              {renderSponsorTier('Platinum', currentSponsors.platinum, 'from-slate-600 to-slate-700', 'h-28 w-full')}
              {renderSponsorTier('Gold', currentSponsors.gold, 'from-amber-500 to-yellow-600', 'h-24 w-full')}
              {renderSponsorTier('Silver', currentSponsors.silver, 'from-slate-400 to-slate-500', 'h-20 w-full')}
              {renderSponsorTier('Bronze', currentSponsors.bronze, 'from-amber-700 to-yellow-800', 'h-16 w-full')}
            </AnimatedContainer>

            {/* Become a Sponsor */}
            <AnimatedContainer variant="fadeInUp" className="mb-20" delay={0.2}>
              <SectionHeader
                title="Become a Sponsor"
                className="text-center mb-12"
              />
              
              <Card variant="white" className="mb-12">
                <Typography variant="bodyLg" className="text-slate-600 mb-6">
                  Bolt Gun Nation offers various sponsorship opportunities for businesses and organizations interested in supporting the precision rifle community in New Mexico. Our sponsorship packages provide excellent exposure to a dedicated audience of shooting enthusiasts.
                </Typography>
                <Typography variant="bodyLg" className="text-slate-600">
                  By becoming a sponsor, you'll help support our mission to improve New Mexico precision rifle shooters' skills through competition while gaining visibility for your brand among our growing community.
                </Typography>
              </Card>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sponsorshipLevels.map((level, index) => (
                  <AnimatedContainer 
                    key={index}
                    variant="fadeInUp" 
                    delay={0.1 * (index + 1)}
                  >
                    <Card 
                      variant="white"
                      className={`${level.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-amber-500/50' : ''}`}
                    >
                      <div className={`bg-gradient-to-r ${level.color} rounded-xl p-4 inline-block mb-4`}>
                        <level.icon className="h-6 w-6 text-white" />
                      </div>
                      <Typography variant="h3" className="mb-2">{level.name}</Typography>
                      <Typography variant="emphasis" className="text-2xl text-amber-600 mb-4">{level.amount}</Typography>
                      <ul className="space-y-2 mb-6">
                        {level.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <Typography variant="body" className="text-slate-600">{benefit}</Typography>
                          </li>
                        ))}
                      </ul>
                      {level.featured && (
                        <div className="inline-block bg-amber-500/10 text-amber-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                          Most Popular
                        </div>
                      )}
                    </Card>
                  </AnimatedContainer>
                ))}
              </div>
            </AnimatedContainer>

            {/* Contact CTA */}
            <AnimatedContainer variant="fadeInScale" delay={0.3}>
              <div className="bg-gradient-to-r from-amber-500/10 to-red-500/10 border border-amber-500/20 rounded-3xl p-8 md:p-12 text-center">
                <Typography variant="h2" className="mb-6">
                  Interested in Becoming a Sponsor?
                </Typography>
                <Typography variant="bodyLg" className="text-slate-600 mb-8 max-w-3xl mx-auto">
                  Contact us to discuss sponsorship opportunities and find the package that best fits your organization's goals.
                </Typography>
                <Button 
                  variant="primary"
                  href="mailto:sponsorship@boltgunnation.com"
                  size="lg"
                  icon={<MegaphoneIcon className="h-5 w-5" />}
                  className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-amber-500/25 transition-all duration-300"
                >
                  Contact Our Sponsorship Team
                </Button>
              </div>
            </AnimatedContainer>
          </AnimatedContainer>
        </section>
      </div>
    </div>
  );
}

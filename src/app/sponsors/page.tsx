import { Metadata } from 'next';
import Image from 'next/image';
import { TrophyIcon, StarIcon, GiftIcon, MegaphoneIcon, UserGroupIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Sponsors | Bolt Gun Nation',
  description: 'Support Bolt Gun Nation and the New Mexico precision rifle community through our sponsorship program.',
};

// Current sponsors organized by tier
const currentSponsors = {
  stage: [
    // Add Stage level sponsors here
  ],
  platinum: [
    {
      name: 'Area 419',
      logo: '/media/images/uploads/2024/07/area419-400x250.webp',
      website: 'https://area419.com',
      description: 'Precision rifle accessories and components'
    }
  ],
  gold: [
    // Add Gold level sponsors here
  ],
  silver: [
    // Add Silver level sponsors here  
  ],
  bronze: [
    // Add Bronze level sponsors here
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
      <div className="mb-12">
        <h3 className={`text-2xl font-bold text-center mb-6 bg-gradient-to-r ${tierColor} bg-clip-text text-transparent`}>
          {tierName} Sponsors
        </h3>
        <div className={`grid ${sponsors.length === 1 ? 'grid-cols-1 justify-items-center' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 text-center"
            >
              <div className={`${logoSize} mx-auto mb-4 relative`}>
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{sponsor.name}</h4>
              <p className="text-sm text-slate-600 mb-3">{sponsor.description}</p>
              {sponsor.website && (
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                >
                  Visit Website →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/50">
      {/* Subtle geometric background */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50L20 20M50 50L80 20M50 50L80 80M50 50L20 80' stroke='%23B45309' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <header className="mb-16 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                Our Sponsors
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
                We're grateful to our sponsors who make the New Mexico Precision Rifle Points Race possible and help grow our shooting community.
              </p>
            </header>

            {/* Current Sponsors Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Current Sponsors</h2>
                <p className="text-lg text-slate-600">
                  Thank you to our valued partners who support precision rifle sports in New Mexico
                </p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-3xl p-8">
                {renderSponsorTier('Stage', currentSponsors.stage, 'from-purple-600 to-indigo-700', 'w-48 h-32')}
                {renderSponsorTier('Platinum', currentSponsors.platinum, 'from-slate-600 to-slate-700', 'w-40 h-28')}
                {renderSponsorTier('Gold', currentSponsors.gold, 'from-amber-600 to-yellow-600', 'w-36 h-24')}
                {renderSponsorTier('Silver', currentSponsors.silver, 'from-gray-500 to-gray-600', 'w-32 h-20')}
                {renderSponsorTier('Bronze', currentSponsors.bronze, 'from-orange-600 to-red-600', 'w-28 h-18')}
                
                {/* Show message if no sponsors in some tiers */}
                {currentSponsors.stage.length === 0 && currentSponsors.gold.length === 0 && 
                 currentSponsors.silver.length === 0 && currentSponsors.bronze.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-slate-600 mb-4">
                      We're always looking for more sponsors to join our community!
                    </p>
                    <p className="text-sm text-slate-500">
                      Contact us to learn about partnership opportunities.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Partnership Opportunities Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Partnership Opportunities</h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
                Support the growth of precision rifle shooting in New Mexico and help build our community through sponsorship.
              </p>
              <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-6 max-w-2xl mx-auto">
                <p className="text-lg text-slate-700 leading-relaxed">
                  With your donation in <strong>cash value or product</strong>, you will receive recognition and benefits that help promote your business while supporting our shooting community.
                </p>
              </div>
            </div>

            {/* Sponsorship Levels */}
            <div className="space-y-8 mb-16">
              {sponsorshipLevels.map((level, index) => (
                <div
                  key={level.name}
                  className={`bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 ${
                    level.featured ? 'ring-2 ring-purple-200 shadow-lg' : ''
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    {/* Level Info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${level.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg`}>
                          <level.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-slate-900">{level.name}</h3>
                          <p className="text-2xl font-bold text-slate-600">{level.amount}</p>
                        </div>
                      </div>
                      {level.featured && (
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-200 text-purple-800 font-semibold text-sm">
                          <StarIcon className="h-4 w-4 mr-1" />
                          Premium Level
                        </div>
                      )}
                    </div>

                    {/* Benefits */}
                    <div className="lg:w-2/3">
                      <h4 className="text-xl font-bold text-slate-900 mb-4">Benefits Include:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {level.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-start">
                            <div className={`w-2 h-2 bg-gradient-to-r ${level.color} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                            <span className="text-slate-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Sponsor Section */}
            <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Why Sponsor Bolt Gun Nation?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <UserGroupIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Growing Community</h3>
                  <p className="text-slate-600">Connect with an active and passionate community of precision rifle enthusiasts across New Mexico.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrophyIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Competitive Excellence</h3>
                  <p className="text-slate-600">Support shooters who are preparing for regional and national competitions, representing New Mexico with pride.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CalendarDaysIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Year-Round Exposure</h3>
                  <p className="text-slate-600">Gain visibility throughout our entire Points Race series, from March through our September finale.</p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold mb-4">Ready to Become a Sponsor?</h3>
                <p className="text-blue-100 mb-8 leading-relaxed text-lg max-w-2xl mx-auto">
                  Thank you for taking the time to consider adding a sponsorship to our Points Series Race. 
                  Contact us today to discuss how we can work together to grow the sport of precision rifle shooting in New Mexico.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://www.facebook.com/groups/339663940504983/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Contact Us on Facebook
                  </a>
                  <a 
                    href="/about"
                    className="inline-flex items-center bg-blue-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-600 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Learn More About BGN
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

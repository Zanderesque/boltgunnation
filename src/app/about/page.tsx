import Typography from '@/components/ui/Typography';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import { sectionStyles } from '@/lib/styles';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-wp-base">
      {/* Subtle geometric background */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50L20 20M50 50L80 20M50 50L80 80M50 50L20 80' stroke='%23B45309' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10">
        <section className={sectionStyles.base}>
          <AnimatedContainer className="max-w-4xl mx-auto" variant="staggerContainer" stagger={true}>
            <AnimatedContainer variant="fadeInUp" className="text-center mb-12">
              <Typography variant="h1" gradient={true} className="mb-6">
                About Bolt Gun Nation
              </Typography>
              <Typography variant="bodyLg" className="text-wp-contrast/70 max-w-3xl mx-auto">
                Welcome to Bolt Gun Nation - your premier destination for precision rifle shooting in New Mexico.
              </Typography>
            </AnimatedContainer>
            
            <div className="space-y-12">
              {/* Mission Section */}
              <AnimatedContainer variant="fadeInUp" delay={0.1}>
                <Card variant="base" className="hover:shadow-xl transition-all duration-300">
                  <Typography variant="h2" className="mb-6">Our Mission</Typography>
                  <Typography variant="bodyLg" className="text-wp-contrast/70">
                    We use the crucible of competition to improve our New Mexico Precision Rifle shooters' skills and prepare them to attend bigger regional and national matches. At the same time, we bring together like-minded individuals to grow our sport, our club, and a sense of fellowship.
                  </Typography>
                </Card>
              </AnimatedContainer>

              {/* What We Offer Section */}
              <AnimatedContainer variant="fadeInUp" delay={0.2}>
                <Card variant="base" className="hover:shadow-xl transition-all duration-300">
                  <Typography variant="h2" className="mb-6">What We Offer</Typography>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-wp-accent-1 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <Typography variant="h5" className="mb-2">Competitive Shooting Series</Typography>
                          <Typography variant="body" className="text-wp-contrast/70">
                            Our annual Bolt Gun Race series provides structured competition throughout the shooting season
                          </Typography>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-wp-accent-1 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <Typography variant="h5" className="mb-2">Member Community</Typography>
                          <Typography variant="body" className="text-wp-contrast/70">
                            Access to private forums and member-only content
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-wp-accent-1 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <Typography variant="h5" className="mb-2">Skill Development</Typography>
                          <Typography variant="body" className="text-wp-contrast/70">
                            Opportunities to improve precision rifle shooting skills
                          </Typography>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-3 h-3 bg-wp-accent-1 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <Typography variant="h5" className="mb-2">Fellowship</Typography>
                          <Typography variant="body" className="text-wp-contrast/70">
                            Connect with fellow shooting enthusiasts in New Mexico
                          </Typography>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedContainer>

              {/* Competition Venues Section */}
              <AnimatedContainer variant="fadeInUp" delay={0.3}>
                <Card variant="base" className="hover:shadow-xl transition-all duration-300">
                  <Typography variant="h2" className="mb-6">Competition Venues</Typography>
                  <Typography variant="bodyLg" className="text-wp-contrast/70 mb-6">
                    Our matches are held at premier shooting facilities including:
                  </Typography>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card variant="gradient" className="p-6">
                      <Typography variant="h4" className="mb-2">Del Norte Gun Club</Typography>
                      <Typography variant="body" className="text-wp-contrast/70">Rio Rancho</Typography>
                      <Typography variant="emphasis" className="mt-2 text-sm">Monthly matches - 2nd Sunday</Typography>
                    </Card>
                    <Card variant="gradient" className="p-6 bg-gradient-to-r from-wp-accent-2/10 to-wp-accent-1/10">
                      <Typography variant="h4" className="mb-2">Zia Rifle And Pistol Club</Typography>
                      <Typography variant="body" className="text-wp-contrast/70">Albuquerque</Typography>
                      <Typography variant="emphasis" className="mt-2 text-sm">Monthly matches - 3rd Saturday</Typography>
                    </Card>
                  </div>
                </Card>
              </AnimatedContainer>

              {/* Join Community CTA */}
              <AnimatedContainer variant="fadeInScale" delay={0.4}>
                <div className="bg-wp-accent-1/10 rounded-3xl p-8 relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                  </div>
                  
                  <div className="relative z-10 text-center">
                    <Typography variant="h2" className="mb-6">Join Our Community</Typography>
                    <Typography variant="bodyLg" className="text-wp-contrast/70 mb-8 max-w-2xl mx-auto">
                      Connect with fellow precision rifle enthusiasts across New Mexico. Get match announcements, 
                      share your achievements, and be part of our growing community.
                    </Typography>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        variant="primary"
                        href="https://www.facebook.com/groups/339663940504983/"
                        target="_blank"
                        size="lg"
                        icon={
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        }
                      >
                        Join Facebook Group
                      </Button>
                      <Button 
                        variant="secondary"
                        href="/contact"
                        size="lg"
                      >
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedContainer>

              {/* History Section */}
              <AnimatedContainer variant="fadeInUp" delay={0.5}>
                <Card variant="base" className="hover:shadow-xl transition-all duration-300">
                  <Typography variant="h2" className="mb-6">Our History</Typography>
                  <Typography variant="bodyLg" className="text-wp-contrast/70 mb-6">
                    Bolt Gun Nation was founded in 2020 by a group of passionate precision rifle shooters who wanted to create a structured competition series and supportive community in New Mexico. Since then, we've grown to include hundreds of members and host regular matches at premier facilities across the state.
                  </Typography>
                  <Typography variant="bodyLg" className="text-wp-contrast/70">
                    Our commitment to excellence, sportsmanship, and community has made us the premier precision rifle organization in New Mexico, with many of our members going on to compete successfully at regional and national levels.
                  </Typography>
                </Card>
              </AnimatedContainer>
            </div>
          </AnimatedContainer>
        </section>
      </div>
    </div>
  );
}
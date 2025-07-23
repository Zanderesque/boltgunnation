import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Bolt Gun Nation',
  description: 'Learn about Bolt Gun Nation - New Mexico\'s premier precision rifle shooting community and competition series.',
};

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
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <header className="mb-12 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-wp-contrast mb-6">
                About Bolt Gun Nation
              </h1>
              <p className="text-xl text-wp-contrast/70 leading-relaxed max-w-3xl mx-auto">
                Welcome to Bolt Gun Nation - your premier destination for precision rifle shooting in New Mexico.
              </p>
            </header>
            
            <div className="space-y-12">
              {/* Mission Section */}
              <div className="bg-wp-base/80 backdrop-blur-sm border border-wp-contrast/10 rounded-2xl p-8 hover:bg-wp-base hover:shadow-xl hover:shadow-wp-contrast/5 transition-all duration-300">
                <h2 className="text-3xl font-bold text-wp-contrast mb-6">Our Mission</h2>
                <p className="text-lg text-wp-contrast/70 leading-relaxed">
                  We use the crucible of competition to improve our New Mexico Precision Rifle shooters' skills and prepare them to attend bigger regional and national matches. At the same time, we bring together like-minded individuals to grow our sport, our club, and a sense of fellowship.
                </p>
              </div>

              {/* What We Offer Section */}
              <div className="bg-wp-base/80 backdrop-blur-sm border border-wp-contrast/10 rounded-2xl p-8 hover:bg-wp-base hover:shadow-xl hover:shadow-wp-contrast/5 transition-all duration-300">
                <h2 className="text-3xl font-bold text-wp-contrast mb-6">What We Offer</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-wp-accent-1 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-bold text-wp-contrast mb-2">Competitive Shooting Series</h3>
                        <p className="text-wp-contrast/70">Our annual Bolt Gun Race series provides structured competition throughout the shooting season</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-wp-accent-1 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-bold text-wp-contrast mb-2">Member Community</h3>
                        <p className="text-wp-contrast/70">Access to private forums and member-only content</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-wp-accent-1 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-bold text-wp-contrast mb-2">Skill Development</h3>
                        <p className="text-wp-contrast/70">Opportunities to improve precision rifle shooting skills</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-wp-accent-1 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-bold text-wp-contrast mb-2">Fellowship</h3>
                        <p className="text-wp-contrast/70">Connect with fellow shooting enthusiasts in New Mexico</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Competition Venues Section */}
              <div className="bg-wp-base/80 backdrop-blur-sm border border-wp-contrast/10 rounded-2xl p-8 hover:bg-wp-base hover:shadow-xl hover:shadow-wp-contrast/5 transition-all duration-300">
                <h2 className="text-3xl font-bold text-wp-contrast mb-6">Competition Venues</h2>
                <p className="text-lg text-wp-contrast/70 mb-6">Our matches are held at premier shooting facilities including:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-wp-accent-1/10 border border-wp-accent-1/20 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-wp-contrast mb-2">Del Norte Gun Club</h3>
                    <p className="text-wp-contrast/70">Rio Rancho</p>
                    <p className="text-sm text-wp-accent-1 font-medium mt-2">Monthly matches - 2nd Sunday</p>
                  </div>
                  <div className="bg-wp-accent-2/10 border border-wp-accent-2/20 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-wp-contrast mb-2">Zia Rifle And Pistol Club</h3>
                    <p className="text-wp-contrast/70">Albuquerque</p>
                    <p className="text-sm text-wp-accent-2 font-medium mt-2">Monthly matches - 3rd Saturday</p>
                  </div>
                </div>
              </div>

              {/* Join Community CTA */}
              <div className="bg-wp-accent-1/10 rounded-3xl p-8 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <h2 className="text-3xl font-bold text-wp-contrast mb-6">Join Our Community</h2>
                  <p className="text-lg text-wp-contrast/70 mb-8 max-w-2xl mx-auto">
                    Connect with fellow precision rifle enthusiasts across New Mexico. Get match announcements, 
                    share your achievements, and be part of our growing community.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://www.facebook.com/groups/339663940504983/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group bg-wp-accent-1 text-wp-contrast px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-wp-accent-1/25 transition-all duration-300 flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Join Facebook Group
                    </a>
                    <a 
                      href="/contact" 
                      className="group bg-wp-base border border-wp-contrast/10 text-wp-contrast px-8 py-4 rounded-xl font-semibold hover:bg-wp-contrast/5 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>

              {/* History Section */}
              <div className="bg-wp-base/80 backdrop-blur-sm border border-wp-contrast/10 rounded-2xl p-8 hover:bg-wp-base hover:shadow-xl hover:shadow-wp-contrast/5 transition-all duration-300">
                <h2 className="text-3xl font-bold text-wp-contrast mb-6">Our History</h2>
                <p className="text-lg text-wp-contrast/70 leading-relaxed mb-6">
                  Bolt Gun Nation was founded in 2020 by a group of passionate precision rifle shooters who wanted to create a structured competition series and supportive community in New Mexico. Since then, we've grown to include hundreds of members and host regular matches at premier facilities across the state.
                </p>
                <p className="text-lg text-wp-contrast/70 leading-relaxed">
                  Our commitment to excellence, sportsmanship, and community has made us the premier precision rifle organization in New Mexico, with many of our members going on to compete successfully at regional and national levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
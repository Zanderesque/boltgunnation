import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Bolt Gun Nation',
  description: 'Learn about Bolt Gun Nation - New Mexico\'s premier precision rifle shooting community and competition series.',
};

export default function AboutPage() {
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
          <div className="max-w-4xl mx-auto">
            <header className="mb-12 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                About Bolt Gun Nation
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Welcome to Bolt Gun Nation - your premier destination for precision rifle shooting in New Mexico.
              </p>
            </header>
            
            <div className="space-y-12">
              {/* Mission Section */}
              <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We use the crucible of competition to improve our New Mexico Precision Rifle shooters' skills and prepare them to attend bigger regional and national matches. At the same time, we bring together like-minded individuals to grow our sport, our club, and a sense of fellowship.
                </p>
              </div>

              {/* What We Offer Section */}
              <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">What We Offer</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-gradient-to-r from-red-600 to-blue-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">Competitive Shooting Series</h3>
                        <p className="text-slate-600">Our annual Bolt Gun Race series provides structured competition throughout the shooting season</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-gradient-to-r from-red-600 to-blue-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">Member Community</h3>
                        <p className="text-slate-600">Access to private forums and member-only content</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-gradient-to-r from-red-600 to-blue-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">Skill Development</h3>
                        <p className="text-slate-600">Opportunities to improve precision rifle shooting skills</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-gradient-to-r from-red-600 to-blue-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">Fellowship</h3>
                        <p className="text-slate-600">Connect with fellow shooting enthusiasts in New Mexico</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Competition Venues Section */}
              <div className="bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Competition Venues</h2>
                <p className="text-lg text-slate-600 mb-6">Our matches are held at premier shooting facilities including:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Del Norte Gun Club</h3>
                    <p className="text-slate-600">Rio Rancho</p>
                    <p className="text-sm text-red-700 font-medium mt-2">Monthly matches - 2nd Sunday</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Zia Rifle And Pistol Club</h3>
                    <p className="text-slate-600">Albuquerque</p>
                    <p className="text-sm text-blue-700 font-medium mt-2">Monthly matches - 3rd Saturday</p>
                  </div>
                </div>
              </div>

              {/* Join Community CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    If you want to access the private forums or keep track of your points for the 2023 Bolt Gun Race, please login to our member portal.
                  </p>
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
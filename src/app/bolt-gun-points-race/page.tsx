import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Bolt Gun Nation - Points Race | Bolt Gun Nation',
  description: 'Join the Bolt Gun Nation - Points Race series - a precision rifle competition designed to improve New Mexico shooters\' skills through competitive matches.',
  openGraph: {
    title: 'Bolt Gun Nation - Points Race',
    description: 'Join the Bolt Gun Nation - Points Race series - a precision rifle competition designed to improve New Mexico shooters\' skills through competitive matches.',
    type: 'article',
  },
};

export default function BoltGunRacePage() {
  return (
    <div className="min-h-screen bg-wp-base">
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <header className="mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-wp-accent-1/30 to-wp-accent-2/30 rounded-xl -z-10"></div>
            <div className="bg-wp-base/90 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-wp-contrast/10">
              <h1 className="text-4xl md:text-6xl font-bold text-wp-contrast mb-6 bg-gradient-to-r from-wp-accent-1 to-wp-accent-2 bg-clip-text text-transparent">
                Bolt Gun Nation - Points Race
              </h1>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-wp-accent-1 text-wp-contrast px-6 py-4 rounded-lg">
                <div>
                  <p className="text-lg font-semibold">Open Registration</p>
                  <p className="text-xl font-bold">May 7, 2025 – March 30, 2026</p>
                </div>
                <div className="md:text-right">
                  <p className="font-semibold">Entry Fee</p>
                  <p className="text-xl font-bold">$60</p>
                  <p className="text-sm italic">100% returned through prizes and payouts</p>
                </div>
              </div>
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none text-wp-contrast">
            {/* About Section */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-wp-accent-1"></div>
                <h2 className="text-3xl font-bold m-0">About the Points Race</h2>
              </div>
              
              <div className="bg-wp-base shadow-md rounded-lg p-8 border border-wp-contrast/10">
                <p className="text-xl font-medium mb-6">The goal of the points race is to use the crucible of competition to improve our New Mexico Precision Rifle shooters' skills and prepare them to attend bigger regional and national matches. At the same time, doing this brings together like-minded individuals to grow our sport, our club, and a sense of fellowship.</p>

                <div className="p-4 border-l-4 border-wp-accent-1 bg-wp-accent-1/10 rounded-r-lg mb-6">
                  <p className="m-0">The series will run from the 2nd weekend in March and end with a 2-day match in April 2026. The Monthly matches will be held at the Del Norte Gun Club (Rio Rancho), and The Zia Rifle And Pistol Club (Albuquerque).</p>
                </div>

                <p>Entry into the Series is $60 and may be entered at any time. A look-back entry will be permitted, but only the previous match will count for points. <span className="font-semibold">100% of this money will be returned to the shooters</span> through:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-wp-accent-2/10 p-4 rounded-lg flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-wp-accent-2 flex items-center justify-center text-wp-base font-bold">1</div>
                    <span>Cash payouts</span>
                  </div>
                  <div className="bg-wp-accent-2/10 p-4 rounded-lg flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-wp-accent-2 flex items-center justify-center text-wp-base font-bold">2</div>
                    <span>Prize table</span>
                  </div>
                  <div className="bg-wp-accent-2/10 p-4 rounded-lg flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-wp-accent-2 flex items-center justify-center text-wp-base font-bold">3</div>
                    <span>Swag bag</span>
                  </div>
                  <div className="bg-wp-accent-2/10 p-4 rounded-lg flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-wp-accent-2 flex items-center justify-center text-wp-base font-bold">4</div>
                    <span>Finale banquet</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Scoring System */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-wp-accent-1"></div>
                <h2 className="text-3xl font-bold m-0">Scoring System</h2>
              </div>
              
              <div className="bg-wp-base shadow-md rounded-lg p-8 border border-wp-contrast/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-wp-accent-1/10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Part 1: Percentage Score</h3>
                    <p className="mb-0">Your score is divided by the highest score among all member shooters.</p>
                  </div>
                  <div className="bg-wp-accent-2/10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Part 2: Position Points</h3>
                    <p className="mb-0">Earn 3 points for every shooter you beat, including non-attending Bolt Gun Nation members.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">Scoring Example:</h3>
                
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full border-collapse border border-wp-contrast/20">
                    <thead>
                      <tr className="bg-wp-accent-1/20">
                        <th className="border border-wp-contrast/20 px-4 py-3">Position</th>
                        <th className="border border-wp-contrast/20 px-4 py-3">BGN Member?</th>
                        <th className="border border-wp-contrast/20 px-4 py-3">Name</th>
                        <th className="border border-wp-contrast/20 px-4 py-3">Raw Score</th>
                        <th className="border border-wp-contrast/20 px-4 py-3">Impact Points</th>
                        <th className="border border-wp-contrast/20 px-4 py-3">Position Points</th>
                        <th className="border border-wp-contrast/20 px-4 py-3">Overall Match Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-wp-accent-1/5">
                        <td className="border border-wp-contrast/20 px-4 py-3 font-bold">1</td>
                        <td className="border border-wp-contrast/20 px-4 py-3">Y</td>
                        <td className="border border-wp-contrast/20 px-4 py-3 font-medium">Jones</td>
                        <td className="border border-wp-contrast/20 px-4 py-3">65</td>
                        <td className="border border-wp-contrast/20 px-4 py-3">100 (65/65)</td>
                        <td className="border border-wp-contrast/20 px-4 py-3">15 (5×3)</td>
                        <td className="border border-wp-contrast/20 px-4 py-3 font-bold text-wp-accent-1">115</td>
                      </tr>
                      <tr>
                        <td className="border border-wp-contrast/20 px-4 py-3 font-bold">2</td>
                        <td className="border border-wp-contrast/20 px-4 py-3">N</td>
                        <td className="border border-wp-contrast/20 px-4 py-3 font-medium">Smith</td>
                        <td className="border border-wp-contrast/20 px-4 py-3">63</td>
                        <td className="border border-wp-contrast/20 px-4 py-3">0</td>
                        <td className="border border-wp-contrast/20 px-4 py-3">0</td>
                        <td className="border border-wp-contrast/20 px-4 py-3 font-bold">0</td>
                      </tr>
                      <tr className="bg-wp-accent-1/5">
                        <td className="border border-wp-contrast/20 px-4 py-3 font-bold">3</td>
                        <td className="border border-wp-contrast/20 px-4 py-3">Y</td>
                        <td className="border border-wp-contrast/20 px-4 py-3 font-medium">Doe</td>
                        <td className="border border-wp-contrast/20 px-4 py-3">44</td>
                        <td className="border border-wp-contrast/20 px-4 py-3">68 (44/65)</td>
                        <td className="border border-wp-contrast/20 px-4 py-3">9 (3×3)</td>
                        <td className="border border-wp-contrast/20 px-4 py-3 font-bold text-wp-accent-2">77</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 bg-wp-base border border-wp-contrast/20 rounded-lg p-5">
                    <h4 className="font-bold text-lg mb-2">Season Total Calculation</h4>
                    <p className="mb-0">Each shooter's season total consists of:</p>
                    <ul className="list-disc pl-5 mt-2 mb-0">
                      <li>Top score from Del Norte</li>
                      <li>Top score from Zia</li>
                      <li>Third highest score from either venue</li>
                      <li>Finale score</li>
                    </ul>
                  </div>
                  
                  <div className="flex-1 bg-wp-base border border-wp-contrast/20 rounded-lg p-5">
                    <h4 className="font-bold text-lg mb-2">Score Distribution</h4>
                    <p className="mb-0">Scores will be distributed via:</p>
                    <ul className="list-disc pl-5 mt-2 mb-0">
                      <li>Monthly email updates</li>
                      <li>Bolt Gun Nation Facebook page</li>
                      <li>www.boltgunnation.com</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Equipment Requirements */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-wp-accent-1"></div>
                <h2 className="text-3xl font-bold m-0">Equipment Requirements</h2>
              </div>
              
              <div className="bg-wp-base shadow-md rounded-lg overflow-hidden border border-wp-contrast/10">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="bg-gradient-to-br from-wp-accent-1/20 to-wp-accent-2/20 p-8 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-wp-accent-1/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-8">
                    <h3 className="text-2xl font-bold mb-3">What Gear Do I Need?</h3>
                    <p className="mb-6">Before participating in the Points Race, make sure you have all the required equipment for PRS style matches. Our comprehensive guide covers everything from rifles and optics to ammunition and safety gear.</p>
                    <a 
                      href="/blog/equipment-recommendations" 
                      className="inline-flex items-center gap-2 bg-wp-accent-1 text-wp-contrast font-semibold py-3 px-6 rounded-lg hover:bg-wp-accent-1/90 transition-colors"
                    >
                      View Equipment Guide
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Championship & Prizes */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-wp-accent-1"></div>
                <h2 className="text-3xl font-bold m-0">Championship & Prizes</h2>
              </div>
              
              <div className="bg-wp-base shadow-md rounded-lg p-8 border border-wp-contrast/10">
                <div className="p-5 bg-wp-accent-1/10 rounded-lg mb-8">
                  <p className="font-medium mb-0">The season champion will be determined at the 2-day finale match. This match will be scored the same as the season matches however will be worth <span className="font-bold text-wp-accent-1">double points</span>. Only competitors attending the finale are eligible for prize table prizes.</p>
                </div>

                <h3 className="text-2xl font-bold mb-6">Prize Structure <span className="text-base font-normal">(based on 20 shooters)</span></h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-wp-accent-2/20 to-wp-accent-1/20 p-6 rounded-lg shadow-sm">
                    <h4 className="text-xl font-bold mb-4 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-wp-accent-1 text-wp-base flex items-center justify-center mr-3">$</span>
                      Cash Payouts
                    </h4>
                    <ul className="space-y-3 mb-0">
                      <li className="flex justify-between items-center p-2 bg-wp-base/60 rounded">
                        <span className="font-bold">1st Place:</span>
                        <span className="font-mono bg-wp-accent-1 text-wp-base px-3 py-1 rounded">$252 (21%)</span>
                      </li>
                      <li className="flex justify-between items-center p-2 bg-wp-base/60 rounded">
                        <span className="font-bold">2nd Place:</span>
                        <span className="font-mono bg-wp-accent-1 text-wp-base px-3 py-1 rounded">$150 (12.5%)</span>
                      </li>
                      <li className="flex justify-between items-center p-2 bg-wp-base/60 rounded">
                        <span className="font-bold">3rd Place:</span>
                        <span className="font-mono bg-wp-accent-1 text-wp-base px-3 py-1 rounded">$96 (8%)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-wp-accent-1/20 to-wp-accent-2/20 p-6 rounded-lg shadow-sm">
                    <h4 className="text-xl font-bold mb-4 flex items-center">
                      <span className="w-8 h-8 rounded-full bg-wp-accent-2 text-wp-base flex items-center justify-center mr-3">🎟️</span>
                      Prize Table Tickets
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2 bg-wp-base/60 rounded">
                        <span className="font-bold">4th Place:</span> 12 Tickets
                      </div>
                      <div className="p-2 bg-wp-base/60 rounded">
                        <span className="font-bold">5th Place:</span> 8 Tickets
                      </div>
                      <div className="p-2 bg-wp-base/60 rounded">
                        <span className="font-bold">6th Place:</span> 6 Tickets
                      </div>
                      <div className="p-2 bg-wp-base/60 rounded">
                        <span className="font-bold">7th-8th:</span> 4 Tickets
                      </div>
                      <div className="p-2 bg-wp-base/60 rounded">
                        <span className="font-bold">9th-11th:</span> 3 Tickets
                      </div>
                      <div className="p-2 bg-wp-base/60 rounded">
                        <span className="font-bold">12th-15th:</span> 2 Tickets
                      </div>
                      <div className="p-2 bg-wp-base/60 rounded col-span-2">
                        <span className="font-bold">16th-20th Place:</span> 1 Ticket
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Registration */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-wp-accent-1"></div>
                <h2 className="text-3xl font-bold m-0">Registration</h2>
              </div>
              
              <div className="bg-gradient-to-br from-wp-accent-1 to-wp-accent-2 text-wp-contrast p-8 rounded-lg shadow-lg text-center">
                <div className="bg-wp-base/10 backdrop-blur-sm p-6 rounded-lg inline-block">
                  <h3 className="text-3xl font-bold mb-4">Ready to Join?</h3>
                  <div className="mb-6">
                    <p className="text-xl mb-1 font-medium">Open Registration</p>
                    <p className="text-2xl font-bold">May 7, 2025 – March 30, 2026</p>
                  </div>
                  <p className="text-lg mb-8">Sign up for the Bolt Gun Nation - Points Race series using our online registration form.</p>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLScrVfdf7qWpmMe91bAs9JCA4yMqXOMogH7LaMETfwj4gkmPHg/viewform" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-wp-contrast text-wp-accent-1 font-bold py-4 px-10 rounded-lg hover:bg-wp-contrast/90 transition-all hover:shadow-lg hover:scale-105 transform"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </section>
          </div>
          
          <footer className="mt-16 pt-8 border-t border-wp-contrast/10">
            <div className="flex items-center justify-between">
              <a 
                href="/" 
                className="text-wp-accent-1 hover:text-wp-accent-2 transition-colors font-medium flex items-center gap-2"
              >
                <span>←</span> Back to Home
              </a>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
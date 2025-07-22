import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2023 Bolt Gun Race | Bolt Gun Nation',
  description: 'Join the 2023 Bolt Gun Race series - a precision rifle competition designed to improve New Mexico shooters' skills through competitive matches.',
  openGraph: {
    title: '2023 Bolt Gun Race',
    description: 'Join the 2023 Bolt Gun Race series - a precision rifle competition designed to improve New Mexico shooters' skills through competitive matches.',
    type: 'article',
  },
};

export default function BoltGunRacePage() {
  return (
    <div className="min-h-screen bg-wp-base">
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-wp-contrast mb-6">
              2023 Bolt Gun Race
            </h1>
            <div className="bg-wp-accent-1 text-wp-contrast px-6 py-4 rounded-lg mb-8">
              <p className="text-lg font-semibold">Open Registration: March 7 – May 30</p>
              <p className="text-sm">Entry Fee: $60 (100% returned through prizes and payouts)</p>
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none text-wp-contrast">
            <h2>About the Bolt Race Series</h2>
            
            <p>The goal of the points race is to use the crucible of competition to improve our New Mexico Precision Rifle shooters' skills and prepare them to attend bigger regional and national matches. At the same time, doing this brings together like-minded individuals to grow our sport, our club, and a sense of fellowship.</p>

            <p>The series will run from the 2nd weekend in March and end with a 2-day match in September. The Monthly matches will be held at the Del Norte Gun Club (Rio Rancho), and The Zia Rifle And Pistol Club (Albuquerque). Entry into the Series is $60 and may be entered at any time. A look-back entry will be permitted, but only the previous match will count for points. 100% of this money will be returned to the shooters through, Cash payouts, a prize table, a swag bag, and a finale banquet!!!</p>

            <h2>Scoring System</h2>
            
            <p>The Series points will be based on both the shooter's overall score and the number of competitors beaten.</p>

            <p>The first part of the score will be the percentage of the high member's score. (The shooter's score is divided by the high score of all the member shooters.) The second half will be 3 points for every shooter the competitor beats. This will include both Non-Bolt Gun Nation Competitors attending the match and <strong>ALL</strong> Bolt Gun Nation Members even if they are not present at the match.</p>

            <h3>Scoring Example:</h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-wp-contrast/20">
                <thead>
                  <tr className="bg-wp-accent-1/20">
                    <th className="border border-wp-contrast/20 px-4 py-2">Position</th>
                    <th className="border border-wp-contrast/20 px-4 py-2">BGN Member?</th>
                    <th className="border border-wp-contrast/20 px-4 py-2">Name</th>
                    <th className="border border-wp-contrast/20 px-4 py-2">Raw Score</th>
                    <th className="border border-wp-contrast/20 px-4 py-2">Impact Points</th>
                    <th className="border border-wp-contrast/20 px-4 py-2">Position Points</th>
                    <th className="border border-wp-contrast/20 px-4 py-2">Overall Match Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-wp-contrast/20 px-4 py-2">1</td>
                    <td className="border border-wp-contrast/20 px-4 py-2">Y</td>
                    <td className="border border-wp-contrast/20 px-4 py-2">Jones</td>
                    <td className="border border-wp-contrast/20 px-4 py-2">65</td>
                    <td className="border border-wp-contrast/20 px-4 py-2">100(65/65)</td>
                    <td className="border border-wp-contrast/20 px-4 py-2">9 (1 of 6 or 5*3)</td>
                    <td className="border border-wp-contrast/20 px-4 py-2 font-bold">115</td>
                  </tr>
                  <tr>
                    <td className="border border-wp-contrast/20 px-4 py-2">2</td>
                    <td className="border border-wp-contrast/20 px-4 py-2">N</td>
                    <td className="border border-wp-contrast/20 px-4 py-2">Smith</td>
                    <td className="border border-wp-contrast/20 px-4 py-2">63</td>
                    <td className="border border-wp-contrast/20 px-4 py-2">0</td>
                    <td className="border border-wp-contrast/20 px-4 py-2">0 (non-member)</td>
                    <td className="border border-wp-contrast/20 px-4 py-2">0</td>
                  </tr>
                  <tr>
                    <td className="border border-wp-contrast/20 px-4 py-2">3</td>
                    <td className="border border-wp-contrast/20 px-4 py-2">Y</td>
                    <td className="border border-wp-contrast/20 px-4 py-2">Doe</td>
                    <td className="border border-wp-contrast/20 px-4 py-2">44</td>
                    <td className="border border-wp-contrast/20 px-4 py-2">68 (44/65)</td>
                    <td className="border border-wp-contrast/20 px-4 py-2">3 (3 of 6 or 3*3)</td>
                    <td className="border border-wp-contrast/20 px-4 py-2 font-bold">77</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>The shooters season total will consist of each shooter's top Score from Del Norte, the Top Score from Zia, the third highest score at either venue and the finale score.</p>

            <p>The scores will be emailed monthly, in addition, the scores will be posted on the Bolt Gun Nation Facebook page, and at www.boltgunnation.com. Please, if you see a mistake on the scoring, email me.</p>

            <h2>Championship & Prizes</h2>

            <p>The season champion will be determined at the 2-day finale match. This match will be scored the same as the season matches however will be worth double points. Only competitors attending the finale are eligible for prize table prizes.</p>

            <h3>Prize Structure (based on 20 shooters):</h3>

            <div className="bg-wp-accent-2/10 p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold mb-4">Cash Payouts:</h4>
              <ul className="space-y-2">
                <li><strong>1st Place:</strong> 21% of total ($252)</li>
                <li><strong>2nd Place:</strong> 12.5% of total ($150)</li>
                <li><strong>3rd Place:</strong> 8% of total ($96)</li>
              </ul>
            </div>

            <div className="bg-wp-accent-1/10 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Prize Table Tickets:</h4>
              <ul className="space-y-1">
                <li><strong>4th Place:</strong> 12 Tickets</li>
                <li><strong>5th Place:</strong> 8 Tickets</li>
                <li><strong>6th Place:</strong> 6 Tickets</li>
                <li><strong>7th-8th Place:</strong> 4 Tickets</li>
                <li><strong>9th-11th Place:</strong> 3 Tickets</li>
                <li><strong>12th-15th Place:</strong> 2 Tickets</li>
                <li><strong>16th-20th Place:</strong> 1 Ticket</li>
              </ul>
            </div>

            <h2>Registration</h2>
            
            <div className="bg-wp-accent-1 text-wp-contrast p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-2">Ready to Join?</h3>
              <p className="mb-4">Open Registration: March 7 – May 30</p>
              <p className="text-lg">Please contact Andy Hotton to sign-up for the 2023 Bolt Gun Race series.</p>
            </div>
          </div>
          
          <footer className="mt-16 pt-8 border-t border-wp-contrast/10">
            <div className="flex items-center justify-between">
              <a 
                href="/" 
                className="text-wp-accent-1 hover:text-wp-accent-2 transition-colors font-medium"
              >
                ← Back to Home
              </a>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}
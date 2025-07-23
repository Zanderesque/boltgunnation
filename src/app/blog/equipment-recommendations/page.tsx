import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Equipment Requirements for PRS Style Matches | Bolt Gun Nation',
  description: 'Essential gear and equipment requirements for participating in Bolt Gun Nation Precision Rifle Competitions.',
  openGraph: {
    title: 'Equipment Requirements for PRS Style Matches',
    description: 'Essential gear and equipment requirements for participating in Bolt Gun Nation Precision Rifle Competitions.',
    type: 'article',
    publishedTime: '2020-03-15',
  },
};

export default function EquipmentRecommendationsPage() {
  return (
    <div className="min-h-screen bg-wp-base">
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-wp-contrast mb-4">
              Equipment Requirements for PRS Style Matches
            </h1>
            <div className="flex items-center text-wp-contrast/70 mb-8">
              <time dateTime="2020-03-15" className="text-sm">
                March 15, 2020
              </time>
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none text-wp-contrast">
            <div className="mb-12">
              <p className="text-xl font-semibold mb-4">New to precision rifle competitions? Here's everything you need to get started with Bolt Gun Nation matches.</p>
              <p className="mb-4">The good news is that you don't need specialized or expensive equipment to begin competing. Any rifle capable of consistently grouping within one inch at 100 yards will be sufficient for your first matches.</p>
              <p>While heavier rifles and smaller calibers can provide competitive advantages, we strongly encourage new shooters to use their existing equipment if it meets the minimum requirements. Your initial matches should focus on learning the fundamentals, finding targets, and understanding match procedures rather than optimizing gear.</p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Required Equipment</h2>
              
              <h3 className="text-2xl font-semibold mb-4">Rifle</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Any rifle in good working condition that can group within 1 MOA (1" at 100 yards)</li>
                <li>A detachable box magazine is highly recommended (10-12 round capacity is ideal)</li>
              </ul>
              
              <h3 className="text-2xl font-semibold mb-4">Optics</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>First focal plane scopes are preferred, but any quality scope with adjustable turrets will work</li>
                <li>Must have sufficient adjustment range for the distances you'll be shooting (typically out to 1200 yards)</li>
              </ul>
              
              <h3 className="text-2xl font-semibold mb-4">Ammunition</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>.308 caliber or smaller, with velocity less than 3200 feet per second</li>
                <li>Must remain supersonic to 1200+ yards for reliable target impacts</li>
                <li>Bring at least 70 rounds for Del Norte matches or 60 rounds for Zia matches</li>
                <li>Extra ammunition is recommended for re-shoots, pre-match zeroing, and practice</li>
              </ul>
              
              <h3 className="text-2xl font-semibold mb-4">Safety Equipment & Essentials</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Bipod</strong> - Required for prone shooting stages</li>
                <li><strong>Hearing Protection</strong> - Electronic or passive ear protection</li>
                <li><strong>Eye Protection</strong> - ANSI-rated safety glasses</li>
                <li><strong>Ballistic Data</strong> - DOPE (Data On Previous Engagements) for your rifle out to 1200 yards</li>
                <li><strong>Ballistic Calculator</strong> - Phone app or dedicated device (Kestrel, etc.)</li>
                <li><strong>Food and Water</strong> - Matches can last all day; staying hydrated improves shooting performance, especially in our hot, dry range conditions</li>
              </ul>
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Recommended Optional Equipment</h2>
              <p className="mb-6">Don't worry if you don't have all of these items. Experienced competitors are typically happy to help new shooters and often loan equipment. This gives you a chance to try different gear before investing in your own.</p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Rear Support Bag</strong> - Provides stability for the rifle's buttstock during shooting</li>
                <li><strong>Front Support Bag</strong> - Used to stabilize the rifle on barricades and other props</li>
                <li><strong>Binoculars</strong> - Helpful for spotting targets and observing impacts</li>
                <li><strong>Rifle Sling</strong> - While rarely needed for shooting positions, very useful for carrying your rifle between stages</li>
                <li><strong>Range Bag/Pack</strong> - Highly recommended for transporting your equipment between stages</li>
                <li><strong>Spare Magazines</strong> - Quick reloads can save valuable time during stages</li>
                <li><strong>DOPE Management Tools</strong> - Methods to record target data during stages (masking tape on the rifle forearm works well)</li>
                <li><strong>Wrist Coach</strong> - For quick reference to stage information and target data</li>
                <li><strong>Muzzle Brake or Suppressor</strong> - Reduces recoil and can improve follow-up shots</li>
              </ul>
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Focus on Skills, Not Just Gear</h2>
              
              <p className="mb-6">For your first few matches, concentrate on developing these fundamental skills rather than acquiring perfect equipment:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Understanding match flow and stage procedures</li>
                <li>Efficiently finding and identifying targets</li>
                <li>Building position-shooting fundamentals</li>
                <li>Managing time effectively during stages</li>
                <li>Reading wind conditions and making appropriate adjustments</li>
              </ul>
              
              <p className="mb-6">The Bolt Gun Nation community is known for its supportive environment. Don't hesitate to ask questions and seek advice from more experienced shooters. Most competitors are eager to share their knowledge and help newcomers enjoy the sport.</p>
              
              <p className="mb-6">As you gain experience, you'll naturally identify which equipment upgrades will benefit your particular shooting style and competition goals.</p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Final Thoughts</h2>
              
              <p className="mb-6">Precision rifle competitions test mental discipline and shooting fundamentals as much as they showcase equipment. A skilled shooter with basic gear will consistently outperform an unskilled shooter with the most expensive setup.</p>
              
              <p className="mb-6">Come prepared with the required equipment, stay hydrated, and focus on learning and improving with each stage. The Bolt Gun Nation community welcomes shooters of all experience levels, and we look forward to seeing you on the range!</p>
            </section>
          </div>
          
          <footer className="mt-16 pt-8 border-t border-wp-contrast/10">
            <div className="flex items-center justify-between">
              <a 
                href="/blog" 
                className="text-wp-accent-1 hover:text-wp-accent-2 transition-colors font-medium"
              >
                ← Back to Blog
              </a>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Safety, Range Commands & Etiquette | Bolt Gun Nation',
  description: 'Essential safety guidelines, range commands, and etiquette for precision rifle competitions.',
  openGraph: {
    title: 'Safety, Range Commands & Etiquette',
    description: 'Essential safety guidelines, range commands, and etiquette for precision rifle competitions.',
    type: 'article',
    publishedTime: '2025-07-23',
  },
};

export default function SafetyCommandsEtiquettePage() {
  return (
    <div className="min-h-screen bg-wp-base">
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-wp-contrast mb-4">
              Safety, Range Commands & Etiquette
            </h1>
            <div className="flex items-center text-wp-contrast/70 mb-8">
              <time dateTime="2025-07-23" className="text-sm">
                July 23, 2025
              </time>
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none text-wp-contrast">
            <div className="mb-12">
              <p className="text-xl font-semibold mb-4">All of the Participants and Spectators are safety officers. Anyone may call a "Cease Fire" at any time when an unsafe condition is observed. ECI (Empty Chamber Indicators, Chamber Flags) are encouraged but not required at this time.</p>
              <p>This match will be held on the Outback Range. This range may only be used on match conditions. If you are a DNGC member and are qualified to use the 1000-yard range complex, you may not use the Outback range for recreation or practice. This range is for match use only. This is a cold range and ALL firearms (including empty chambers on sidearms) shall remain unloaded until instructed by an RO to "Load and make ready."</p>
              <p className="font-semibold mt-6">Free Pro tip- Eat food and drink water. You will shoot better.</p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Safety</h2>
              
              <h3 className="text-2xl font-semibold mb-4">4 Rules of Gun Safety</h3>
              <ol className="list-decimal pl-6 mb-8 space-y-2">
                <li>All guns are always loaded</li>
                <li>Keep your finger off the trigger until your sights are on target</li>
                <li>Never point the gun at something you aren't willing to kill or destroy</li>
                <li>Identify your target and what is beyond it</li>
              </ol>
              
              <h3 className="text-2xl font-semibold mb-4">Emergency Plan</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Does anyone have medical training? Backup?</li>
                <li>Who has phone service? Backup?</li>
                <li>Who has a vehicle that can be used for transport? Where are the keys?</li>
              </ul>
              
              <p>In the event of an emergency, our medical volunteer(s) will deal with the emergency, while the transport vehicle is retrieved. Our Phone volunteer will contact 911 and explain the nature of the incident. DNGC's plan is to transport the injured/sick person to King Meadow park (Intersection of King and Rainbow) and meet medical transport there. In the event of an emergency please return firearms to your vehicle, with the exception of the firearm involved, if any. In the event of an emergency please do not speak to the media.</p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Range Rules</h2>
              
              <p className="mb-6">A "DQ" is only a temporary condition, only for the day, and you are more than welcome to stay with us for the rest of the match and join us to compete at another competition. 2 Stage DQs in a day will result in a full DQ.</p>
              
              <h3 className="text-2xl font-semibold mb-4">AD/ND (DQ)</h3>
              <p className="mb-6">An accidental or negligent discharge will result in a DQ. If it should happen there is no shame in admitting it.</p>
              <p className="mb-6">If you have a rifle malfunction (failure to fire, hang fire, trigger malfunction) maintain control of the rifle and pointed in a safe direction on the berm, and inform the RO if the discharge impacts the berm this will not be a DQ but the competitor will be asked to refrain from shooting until the problem is resolved.</p>
              
              <h3 className="text-2xl font-semibold mb-4">Muzzling (DQ)</h3>
              <p className="mb-6">Do not Sweep or aim your barrel at anyone, or yourself during the stage or, movement between the rifle staging area and the firing positions, or between stages.</p>
              <p className="mb-6">Do Not walk in front of grounded/staged rifles without the coordination of all involved. (1 warning followed by stage DQ)</p>
              
              <h3 className="text-2xl font-semibold mb-4">Sky Loading (1 warning followed by DQ)</h3>
              <p className="mb-6">Do not close the bolt until your sights are aligned with the target</p>
              
              <h3 className="text-2xl font-semibold mb-4">Trigger Control (1 warning followed by DQ)</h3>
              <p className="mb-6">Keep your finger out of the trigger guard until the rifle is stable and on target. RO will issue a warning of "Trigger"</p>
              
              <h3 className="text-2xl font-semibold mb-4">Movement (1 warning followed by stage DQ)</h3>
              <p className="mb-6">All movement must be made with an open bolt.</p>
              <p className="mb-6">If the need arises to rebuild a position open the bolt. Handle full up/bolt forward is adequate, there is no need to eject the round.</p>
              
              <h3 className="text-2xl font-semibold mb-4">Field of Fire (1 Warning followed by stage DQ)</h3>
              <p className="mb-6">Here at DNGC maintain your muzzle within the field of fire, this is generally about 45 degrees left and right of the centerline. If you approach the limit of the field of fire RO will give a warning of "target line" if time permits.</p>
              <p className="mb-6">You are responsible for all bullets that leave your rifle. Do not "spray and pray" on our range as the berms are smaller than the practice berms.</p>
              
              <h3 className="text-2xl font-semibold mb-4">Loading Prior to RO Approval (Stage DQ)</h3>
              <p className="mb-6">Do not load your rifle until instructed to do so by the RO. When in doubt just ask if you can.</p>
              
              <div className="bg-wp-accent-1/10 p-6 rounded-lg my-8">
                <p className="mb-4">Here at DNGC we have NO white targets. White squares in view are the boundaries of the range. Please do not engage them.</p>
                <p className="mb-4">Any yellow targets are targets in view but not in use.</p>
                <p className="mb-4">Shooting positions are defined by painted markers, or as listed in the stage description.</p>
                <p className="mb-4">Rifles will be staged between white marking flags perpendicular to the flag line.</p>
                <p className="mb-4">Rifle set up/maintenance while on the range may be conducted on a rifle in the designated staging area. (Bipod, scope, rifle mounted accessories.). Bolt manipulation is prohibited without prior coordination with the Squad RO.</p>
                <p>If the need arises to leave the stage (use the bathroom, retrieve something from the parking area) or leave the Range, coordinate with your Squad RO or the Match Director.</p>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">Semi-Auto Safety (addendum)</h3>
              <p className="mb-6">Semi-auto guns will remain bolt open until on the first target.</p>
              <p className="mb-6">When moving positions between targets shooter shall call "Safe" and place the manual safety on. This should be stated loud enough for the RO to hear. This also applies to rebuilding a position or acquiring targets</p>
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Range Commands</h2>
              
              <p className="mb-6">These are the commands competitors should expect. A response can be a nod or a verbal yes/no.</p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Shooter understand the course of fire?</li>
                <li>Load and make ready.</li>
                <li>Spotter ready?</li>
                <li>Shooter ready?</li>
                <li>Stand by.</li>
                <li>After the stage.</li>
                <li>Unloads and show clear.</li>
                <li>I have you for XX impacts. Do you agree?</li>
              </ul>
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Etiquette</h2>
              
              <h3 className="text-2xl font-semibold mb-4">Brass Policing</h3>
              <p className="mb-6">To help expedite and streamline the match it helps tremendously to have someone police brass, after the stage or during the stage if it is possible without shooter interference.</p>
              
              <h3 className="text-2xl font-semibold mb-4">Be Ready to Shoot</h3>
              <p className="mb-6">Know who you follow.</p>
              <p className="mb-6">When you are on deck be ready to shoot by the time the active competitor is complete.</p>
              <p className="mb-6">Standing rifle and equipment in hand behind the first firing position.</p>
              
              <h3 className="text-2xl font-semibold mb-4">Coaching</h3>
              <p className="mb-6">This is practice for more significant matches, but we do have shooters competing for bragging rights, and season standings. Coaching on the clock should be reserved for those shooters who would benefit from it to move into the top 25%. If your only dropping a couple of points on each stage you probably don't need on-the-clock coaching.</p>
              <p className="mb-6">Shooters may always ask for course guidance, or time remaining from the RO while on the clock.</p>
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

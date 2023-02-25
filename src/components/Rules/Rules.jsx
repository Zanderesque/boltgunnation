export const Rules = () => {
    return (
        <div style={pageContainer}>
            <div style={header}>
                <h1>Del Norte Precision Rifle Match Briefing</h1>
            </div>
            <div style={paragraph}>
                <p style={paragraphText}>
                    Welcome to the Del Norte Gun Club Precision Rifle Match. The Purpose of our
                    matches is camaraderie and competition in a safe environment. All of the
                    Participants and Spectators are safety officers. Anyone may call a “Cease Fire”
                    at any time when an unsafe condition is observed. ECI (Empty Chamber Indicators,
                    Chamber Flags) are encouraged but not required at this time. This match will be
                    held on the Outback Range. This range may only be used on match conditions. If
                    you are a DNGC member and are qualified to use the 1000-yard range complex, you
                    may not use the Outback range for recreation or practice. This range is for
                    match use only. This is a cold range and <b>ALL </b>
                    firearms (including empty chambers on sidearms) shall remain unloaded until
                    instructed by an RO to “Load and make ready.” Free Pro tip- Eat food and drink
                    water. You will shoot better.
                </p>
            </div>
            <div style={header}>
                <h3>Safety</h3>
            </div>
            <div style={safety}>
                <b>Four Rules for Gun Safety</b>
                <ol>
                    <li>All guns are always loaded</li>
                    <li>Keep your finger off the trigger until your sights are on the target</li>
                    <li>Never point the gun at something you are not willing to kill or destroy</li>
                    <li>Identify your target and what is beyond it</li>
                </ol>
            </div>
            <div style={safety}>
                <b>Emergency Plan</b>
                <ul>
                    <li>Does anyone have medical training? Backup?</li>
                    <li>Who has phone service? Backup?</li>
                    <li>Who has a vehicle that can be used for transport? Where are the keys?</li>
                </ul>
            </div>
            <div style={{ ...paragraph, ...paragraphText }}>
                In the event of an emergency, our medical volunteer(s) will deal with the emergency,
                while the transport vehicle is retrieved. Our Phone volunteer will contact 911 and
                explain the nature of the incident. DNGC’s plan is to transport the injured/sick
                person to King Meadow park (Intersection of King and Rainbow) and meet medical
                transport there. In the event of an emergency please return firearms to your
                vehicle, with the exception of the firearm involved, if any. In the event of an
                emergency please do not speak to the media.
            </div>
        </div>
    );
};

const pageContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const header = {
    margin: '20px',
};

const paragraph = {
    marginLeft: '20vw',
    marginRight: '20vw',
};

const paragraphText = {
    textIndent: '25px',
};

const safety = {};

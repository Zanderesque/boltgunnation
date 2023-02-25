export const Rules = () => {
    return (
        <div style={pageContainer}>
            <div style={header}>
                <h1>Del Norte Precision Rifle Match Briefing</h1>
            </div>
            <div style={briefing}>
                <p style={briefingText}>
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
        </div>
    );
};

const pageContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const header = {
    margin: '5vh',
};

const briefing = {
    marginLeft: '20vw',
    marginRight: '20vw',
};

const briefingText = {
    textIndent: '25px',
};

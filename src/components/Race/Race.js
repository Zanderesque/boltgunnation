export const Race = () => {
    return (
        <div style={pageContainer}>
            <div style={header}>
                <h1>Bolt Gun Nation Points Race</h1>
            </div>
            <div style={paragraph}>
                <p style={paragraphText}>
                    The goal of the points race is to use the crucible of competition to improve our
                    New Mexico Precision Rifle shooters’ skills and prepare them to attend bigger
                    regional and national matches. At the same time, doing this brings together
                    like-minded individuals to grow our sport, our club, and a sense of fellowship.
                </p>
            </div>
            <div style={paragraph}>
                <p style={paragraphText}>
                    The series will run from the 2nd weekend in March and end with a 2-day match in
                    September. The Monthly matches will be held at the Del Norte Gun Club (Rio
                    Rancho), and The Zia Rifle And Pistol Club (Albuquerque). Entry into the Series
                    is $60 and may be entered at any time. A look-back entry will be permitted, but
                    only the previous match will count for points. 100% of this money will be
                    returned to the shooters through, Cash payouts, a prize table, a swag bag, and a
                    finale banquet!!! The Series points will be based on both the shooter's overall
                    score and the number of competitors beaten.
                </p>
            </div>
            <div style={paragraph}>
                <p style={paragraphText}>
                    The first part of the score will be the percentage of the high member's score.
                    (The shooter's score is divided by the high score of all the member shooters.)
                    The second half will be 3 points for every shooter the competitor beats. This
                    will include both Non-Bolt Gun Nation Competitors attending the match and ALL
                    Bolt Gun Nation Members even if they are not present at the match.
                </p>
            </div>
            <b>Example</b>
            <div className="points-table"></div>
            <div style={paragraph}>
                <p style={paragraphText}>
                    The shooters season total will consist of each shooter's top Score from Del
                    Norte, the Top Score from Zia, the third highest score at either venue and the
                    finale score.
                </p>
            </div>
            <div style={paragraph}>
                <p style={paragraphText}>
                    The scores will be emailed monthly, in addition, the scores will be posted on
                    the Bolt Gun Nation Facebook page, and at www.boltgunnation.com. Please, if you
                    see a mistake on the scoring, email me.
                </p>
            </div>
            <div style={paragraph}>
                <p style={paragraphText}>
                    The season champion will be determined at the 2-day finale match. This match
                    will be scored the same as the season matches however will be worth double
                    points. Only competitors attending the finale are eligible for prize table
                    prizes. The top positions will be a cash payout/ trophy, and 1st and 2nd will
                    not be eligible for any prize table awards
                </p>
            </div>
            <div style={paragraph}>
                <p style={paragraphText}>
                    The prize table will be awarded by random draw, however, the higher the finish
                    the more draw tickets the shooter will receive.
                </p>
            </div>
            <div style={paragraph}>
                <p style={paragraphText}>
                    The top 3 positions will pay out a percentage of all dues ($ based on 20
                    shooters)
                </p>
                <ul>
                    <li>1st 21% of the total i.e. $252</li>
                    <li>2nd 12.5% of the total i.e. $150</li>
                    <li>3rd 8% of the total and 1 or 2 tickets i.e. $96</li>
                    <li>
                        4th place and down will receive tickets for a prize table draw. Based on
                        their finishing position. (Tickets based on 20 shooters)
                    </li>
                    <li>4th 12 Tickets</li>
                    <li>5th 8 Tickets</li>
                    <li>6th 6 Tickets</li>
                    <li>7th 8th 4 Tickets</li>
                    <li>9th-11th 3 Tickets</li>
                    <li>10th-15th 2 Tickets</li>
                    <li>16th -20th 1 Tickets</li>
                </ul>
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

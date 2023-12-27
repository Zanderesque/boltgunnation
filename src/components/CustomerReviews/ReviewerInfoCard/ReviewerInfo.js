import React from 'react';
import { ReviewerStats } from './ReviewerStats';

export const ReviewerInfo = (props) => {
    return (
        <span className="reviewer-personal-info">
            {/* UN, locaction, icons for number reviews and pics/locations */}
            <div>PapaSmurfUwU</div>
            <div>Seattle, WA</div>
            <ReviewerStats />
        </span>
    );
};

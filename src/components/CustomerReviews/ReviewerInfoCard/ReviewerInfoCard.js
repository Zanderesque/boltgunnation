import React from 'react';
import { ReviewerIcon } from './ReviewerIcon';
import { ReviewerInfo } from './ReviewerInfo';

// pass in user information
export const ReviewerInfoCard = (props) => {
    return (
        <div className="card-header review-card-header">
            <ReviewerIcon />
            <ReviewerInfo />
        </div>
    );
};

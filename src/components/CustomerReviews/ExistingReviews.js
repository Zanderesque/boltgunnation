import React from 'react';
import { ReviewerInfoCard } from './ReviewerInfoCard/ReviewerInfoCard';

export const ExistingReviews = (props) => {
    return (
        <div className="card">
            <ReviewerInfoCard />
            <div className="card">
                <div className="card-body">Review goes here.</div>
            </div>
        </div>
    );
};

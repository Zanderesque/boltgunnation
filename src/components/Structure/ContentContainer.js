import React from 'react';
import { useSelector } from 'react-redux';
import { Humidor } from '../Humidor';
import { HUMIDOR_PAGE, LAST_SCAN_PAGE } from '../../JSUtils';
import { ReviewTemplate } from '../CustomerReviews';
import Footer from '../Footer/Footer';

export const ContentContainer = () => {
    const currentPage = useSelector((state) => state.uiControl.currentPage);
console.log("Ciagr")
    return (
      <div className="content-container">
            {/* <ReviewTemplate /> */}
            {currentPage === HUMIDOR_PAGE && <div><Humidor /><Footer/></div>}
            {currentPage === LAST_SCAN_PAGE && <div>Lastscanpage</div>}
           
        </div>
         
         
    );
};

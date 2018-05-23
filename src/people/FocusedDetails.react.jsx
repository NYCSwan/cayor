import React from 'react';
import PageDetails from '../layout/pageDetails.react';
import './focused-details.scss';

const FocusedDetails = (props) => (
  <div className="FocusedDetails">
    <PageDetails
      pageDetails={props.pageDetails} />
  </div>
)

export default FocusedDetails;

import React from 'react';
import PageDetails from '../layout/pageDetails.react';

const FocusedDetails = (props) => (
  <div className="FocusedDetails">
    <PageDetails
      pageDetails={props.pageDetails} />
  </div>
)

export default FocusedDetails;

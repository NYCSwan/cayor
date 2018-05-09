import React from 'react';
import PageDetails from '../layout/pageDetails.react';

const RegionDetails = (props) => (
  <div className="regionDetails">
    <PageDetails
      pageDetails={props.pageDetails} />
  </div>
)

export default RegionDetails;

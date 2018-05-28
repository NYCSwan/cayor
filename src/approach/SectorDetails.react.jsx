import React from 'react';
import PageDetails from '../layout/pageDetails.react';

const SectorDetails = (props) => (
  <div className="SectorDetails">
    <PageDetails
      pageDetails={props.pageDetails} />
  </div>
)

export default SectorDetails;

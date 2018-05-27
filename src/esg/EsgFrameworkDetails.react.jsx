import React from 'react';
import PageDetails from '../layout/pageDetails.react';

const EsgFrameworkDetails = (props) => (
  <div className="EsgFrameworkDetails">
    <PageDetails
      pageDetails={props.pageDetails}
      fadeIn={props.fadeIn} />
  </div>
)

export default EsgFrameworkDetails;

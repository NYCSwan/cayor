import React from 'react';
import PageDetails from '../layout/pageDetails.react';

const NativeDetails = (props) => (
  <div className="NativeDetails">
    <PageDetails
      props={props.pageDetails} />
  </div>
)

export default NativeDetails;

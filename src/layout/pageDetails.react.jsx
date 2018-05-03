import React from 'react';

const PageDetails = (props) => (
  <div className="PageDetails">
  { props.pageDetails.map(detail => {
    return (
      <p>{detail}</p>
    )
  })}
  </div>
)

export default PageDetails;

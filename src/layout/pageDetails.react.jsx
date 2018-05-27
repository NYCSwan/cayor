import React from 'react';
import {Fade } from 'reactstrap';

import './page-details.css';

const PageDetails = (props) => (
  <Fade in={props.fadeIn} className="PageDetails">
  { props.pageDetails.map(detail => {
    return (
      <p key={detail}>{detail}</p>
    )
  })}
  </Fade>
)

export default PageDetails;

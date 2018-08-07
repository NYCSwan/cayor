import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/fontawesome-free-regular';
// import { Fade } from 'reactstrap';

import './scrollIndicator.css';

class ScrollIndicator extends React.Component {
  // state = {
  //   fade: true,
  // };
  render() {
    // const { fade } = this.state;
    return (
      <div className="scrollIcon bounce fadeOut">
        <FontAwesomeIcon
          className="down"
          size="2x"
          icon={faArrowAltCircleDown}
        />
      </div>
    );
  }
}
export default ScrollIndicator;

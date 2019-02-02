import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./scrollIndicator.css";

class ScrollIndicator extends React.Component {
  render() {
    return (
      <div className="scrollIcon bounce fadeOut">
        <FontAwesomeIcon className="down" size="2x" icon="faTimes" />
      </div>
    );
  }
}
export default ScrollIndicator;

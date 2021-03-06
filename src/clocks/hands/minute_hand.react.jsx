import React, { Component } from "react";
import ReactDOM from "react-dom";

class MinuteHand extends Component {
  state = {
    minuteHand: null
  };

  componentDidMount() {
    // console.log('componentDidMount minute hand');
    this.setMinuteHand();
  }

  setMinuteHand = () => {
    // console.log("set minute hand");
    const { time } = this.props;
    const minutes = time.getMinutes();

    const minuteAngle = minutes * 6;
    const node = ReactDOM.findDOMNode(this);
    this.setState({
      minuteHand: minuteAngle
    });
    node.style.transform = "rotateZ(" + minuteAngle + "deg)";
  };

  render() {
    const { minuteHand } = this.state;

    return (
      <div className={`${this.props.className} minute-container`}>
        <div
          className={`${this.props.className} minute`}
          data-angle={minuteHand}
        />
      </div>
    );
  }
}
export default MinuteHand;

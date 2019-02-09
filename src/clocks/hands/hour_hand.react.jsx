import React, { Component } from "react";
import ReactDOM from "react-dom";

class HourHand extends Component {
  state = {
    hourHand: null
  };

  componentDidMount() {
    // console.log('componentDidMount hour hand');
    this.setHourHand();
  }

  setHourHand = () => {
    console.log("set hour hand");
    const { time } = this.props;
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const node = ReactDOM.findDOMNode(this);
    const hourAngle = hours * 30 + minutes / 2;
    this.setState({
      hourHand: hourAngle
    });
    node.style.transform = "rotateZ(" + hourAngle + "deg)";
  };

  render() {
    return (
      <div className={`${this.props.className} hour-container`}>
        <div className={`${this.props.className} hour`} />
      </div>
    );
  }
}
export default HourHand;

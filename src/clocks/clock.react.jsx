import React, { Component } from 'react';

import MinuteHand from './hands/minute_hand.react';
import HourHand from './hands/hour_hand.react';

import './clock.css';

class Clock extends Component {
  state = {
    currentLocalDateTime: new Date(),
    time: null,
    hourHand: null

  }

  componentDidMount() {
    console.log('componentDidMount clock');
    this.setTime();
  }

  setTime = () => {
    const { currentLocalDateTime } = this.state;
    // get local time
    const localTime = currentLocalDateTime.getTime();
    // get local utc offset and convert to millsec
    const localOffset = currentLocalDateTime.getTimezoneOffset() * 60000;
    // current utc time
    const utc = localTime + localOffset;
    // joburg time
    const offset = this.props.offset;
    const location = utc + (3600000 * offset);
    const locationDate = new Date(location);

    this.setState({
      time: locationDate
    })

  }

  render() {
    return (
      <div>
      { this.state.time &&
        <div className="clock">
          <MinuteHand time={this.state.time} />
          <HourHand time={this.state.time} />
        </div>
      }
      </div>
    )
  }
}

export default Clock;


// turn into React.Fragment

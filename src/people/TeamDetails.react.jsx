import React, { Component } from 'react';
import Snapshot from './snapshot.react';
import { Fade } from 'reactstrap';

import './team-details.css';

class TeamDetails extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      personDetails: [],
      currentPerson: '',
    };
  }

  handleClick = e => {
    console.log('handle person click');
    const currentPerson = e.target.innerText;

    debugger;
    this.setState({ isOpen: true, currentPerson });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen, personDetails, currentPerson } = this.state;
    const { teamDetails, fadeIn } = this.props;
    return (
      <Fade
        in={fadeIn}
        key={'teamPage'}
        className="TeamDetails"
        onClick={this.handleClick}
      >
        {teamDetails.map(member => {
          return (
            <Snapshot
              key={member.name}
              isOpen={isOpen}
              handleClose={this.handleClose}
              handleClick={this.handleClick}
              personDetails={member}
            />
          );
        })}
      </Fade>
    );
  }
}

export default TeamDetails;

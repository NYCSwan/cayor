import React, { Component } from 'react';
import Snapshot from './snapshot.react';
import { Fade } from 'reactstrap';
import { filter, findKey } from 'lodash';
import PersonDetails from './personDetails';

import './team-details.css';

class TeamDetails extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      personDetails: [],
      currentPerson: '',
      idx: null,
    };
  }
  shouldComponentUpdate(nextState, nextProps) {
    return this.state.idx !== nextState.idx;
  }

  handleClick = e => {
    console.log('handle person click');
    const { teamDetails } = this.props;

    const currentPerson = e._targetInst.return.key;
    const idx = Number(
      findKey(teamDetails, details => details.name === currentPerson)
    );

    this.setState({ isOpen: true, currentPerson, idx });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleNextClick = e => {
    console.log('handleNextClick');
    const { teamDetails } = this.props;
    const { idx } = this.state;

    const nextIdx = idx + 1;
    const nextPerson = teamDetails[nextIdx].name;
    this.setState({
      idx: nextIdx,
      currentPerson: nextPerson,
    });
    // debugger;
  };

  renderBios() {
    const { teamDetails } = this.props;
    return teamDetails.map(member => {
      return (
        <Snapshot
          key={member.name}
          handleClick={this.handleClick}
          personDetails={member}
        />
      );
    });
  }

  renderDetails() {
    const { currentPerson, idx } = this.state;
    const { teamDetails } = this.props;
    const personDetails = filter(
      teamDetails,
      details => currentPerson === details.name
    );
    const key = findKey(personDetails);
    // debugger;

    return (
      <PersonDetails
        personDetails={personDetails[key]}
        handleNextClick={this.handleNextClick}
      />
    );
  }

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
        {isOpen ? this.renderDetails() : this.renderBios()}
      </Fade>
    );
  }
}

export default TeamDetails;

import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Snapshot from './snapshot.react';
import { Fade } from 'reactstrap';
import { filter, findKey, slice } from 'lodash';
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
    const currentPerson = e.target.textContent; //return.key;
    e.preventDefault();
    if (
      currentPerson.includes('red') ||
      currentPerson.includes('blue') ||
      currentPerson.includes('grey')
    ) {
      this.setState({ isOpen: false });
      return;
    } else if (
      currentPerson === 'Managing Partner' ||
      currentPerson === 'Vice President' ||
      currentPerson === 'Principal'
    ) {
      const idx = Number(
        findKey(
          teamDetails,
          details => details.name === e.target.previousElementSibling.innerText
        )
      );

      this.setState({ isOpen: true, currentPerson: teamDetails[idx].name });
    } else {
      this.setState({ isOpen: true, currentPerson });
    }
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
  };

  renderBios() {
    const { teamDetails } = this.props;
    const row1 = slice(teamDetails, 0, 4);
    const row2 = slice(teamDetails, 4, 7);
    const row3 = slice(teamDetails, 7, 11);
    return (
      <main className="main">
        <h5 className="header">OUR TEAM</h5>
        <Container>
          <Row>
            {row1.map(member => {
              if (
                member.name.includes('blue') ||
                member.name.includes('red') ||
                member.name.includes('grey')
              ) {
                return (
                  <Col
                    className={`colorContainer ${member.name}`}
                    key={member.name}
                    xs="3"
                    sm="3"
                  />
                );
              } else {
                return (
                  <Snapshot
                    key={member.name}
                    handleClick={this.handleClick}
                    value={member}
                    xs="3"
                    sm="3"
                  />
                );
              }
            })}
          </Row>
          <Row className="offset">
            {row2.map(member => {
              if (
                member.name.includes('blue') ||
                member.name.includes('red') ||
                member.name.includes('grey')
              ) {
                return (
                  <Col
                    className={`colorContainer ${member.name}`}
                    key={member.name}
                    xs={{ size: '3' }}
                    sm={{ size: '3' }}
                  />
                );
              } else {
                return (
                  <Snapshot
                    key={member.name}
                    handleClick={this.handleClick}
                    value={member}
                    xs={{ size: '3' }}
                    sm={{ size: '3' }}
                  />
                );
              }
            })}
          </Row>
          <Row>
            {row3.map(member => {
              if (
                member.name.includes('blue') ||
                member.name.includes('red') ||
                member.name.includes('grey')
              ) {
                return (
                  <Col
                    className={`colorContainer ${member.name}`}
                    key={member.name}
                    xs="3"
                    sm="3"
                  />
                );
              } else {
                return (
                  <Snapshot
                    key={member.name}
                    handleClick={this.handleClick}
                    value={member}
                    xs="3"
                    sm="3"
                  />
                );
              }
            })}
          </Row>
        </Container>
      </main>
    );
  }

  renderDetails() {
    const { currentPerson } = this.state;
    const { teamDetails } = this.props;
    const personDetails = filter(
      teamDetails,
      details => currentPerson === details.name
    );
    const key = findKey(personDetails);

    return (
      <PersonDetails
        personDetails={personDetails[key]}
        handleNextClick={this.handleNextClick}
      />
    );
  }

  render() {
    const { isOpen } = this.state;
    const { fadeIn } = this.props;
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

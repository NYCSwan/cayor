import React, { Component } from 'react';
import Snapshot from './snapshot.react';

import './team-details.css';

class TeamDetails extends Component {
  state = {
    isOpen: false,
    personDetails: [],
    currentPerson: ''
  }

  handleClick = (e) => {
    console.log('handle person click');
    const { teamDetails } = this.props;
    const teamMember = [];
    // debugger;
    if (e.target.className.includes('Fungai Ruwende')) {
      teamMember.push(teamDetails[0].summary);
      teamMember.push(teamDetails[0].experience);
      teamMember.push(teamDetails[0].education);

      this.setState({
        personDetails: teamMember,
        currentPerson: 'Fungai'
      })
    } else if ( e.target.className.includes('Dafe Diejomaoh')) {
      teamMember.push(teamDetails[1].summary);
      teamMember.push(teamDetails[1].experience);
      teamMember.push(teamDetails[1].education);
      this.setState({
        personDetails: teamMember,
        currentPerson: 'Dafe'
      })
    } else if ( e.target.className.includes('Yannick Mpollo')) {
      teamMember.push(teamDetails[2].summary);
      teamMember.push(teamDetails[2].experience);
      teamMember.push(teamDetails[2].education);
      this.setState({
        personDetails: teamMember,
        currentPerson: 'Yannick'
      })
    } else {
      teamMember.push(teamDetails[3].summary);
      teamMember.push(teamDetails[3].experience);
      teamMember.push(teamDetails[3].education);
      this.setState({
        personDetails: teamMember,
        currentPerson: 'Kofi'
      })
    }
    this.setState({ isOpen: true });

  }

  handleClose = () => {
    this.setState({ isOpen: false });
  }
  render() {
    const { isOpen, personDetails, currentPerson } = this.state;
    const { teamDetails } = this.props;

    return (
      <div className="TeamDetails">

      { teamDetails.map(member => {
        return (
          <Snapshot
            key={member.name}
            isOpen={isOpen}
            currentPerson={currentPerson}
            name={member.name}
            role={member.position}
            handleClose={this.handleClose}
            handleClick={this.handleClick}
            personDetails={personDetails} />
        )
      })}
      </div>

    )
  }
}


export default TeamDetails;

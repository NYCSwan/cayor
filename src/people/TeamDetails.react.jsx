import React, { Component } from 'react';
import Snapshot from './snapshot.react';
import PageDetails from '../layout/pageDetails.react';
// import { Collapse } from 'reactstrap';

import './team-details.css';

class TeamDetails extends Component {
  state = {
    isOpen: false,
    personDetails: []
  }

  handleClick = (e) => {
    console.log('handle person click');
    const { teamDetails } = this.props;
    const teamMember = []

    if (e.target.className.includes('Fungai Ruwende')) {
      // debugger;
      teamMember.push(teamDetails[0].summary);
      teamMember.push(teamDetails[0].experience);
      teamMember.push(teamDetails[0].education);

      this.setState({
        personDetails: teamMember
      })
    } else if ( e.target.className.includes('Dafe Diejomaoh')) {
      teamMember.push(teamDetails[1].summary);
      teamMember.push(teamDetails[1].experience);
      teamMember.push(teamDetails[1].education);
      this.setState({
        personDetails: teamMember
      })
    } else if ( e.target.className.includes('Yannick Mpollo')) {
      teamMember.push(teamDetails[2].summary);
      teamMember.push(teamDetails[2].experience);
      teamMember.push(teamDetails[2].education);
      this.setState({
        personDetails: teamMember
      })
    } else {
      teamMember.push(teamDetails[3].summary);
      teamMember.push(teamDetails[3].experience);
      teamMember.push(teamDetails[3].education);
      this.setState({
        personDetails: teamMember
      })
    }
    this.setState({ isOpen: true });

  }

  render() {
    const { isOpen, personDetails } = this.state;
    const { teamDetails } = this.props;

    return (
      <div className="TeamDetails">

      { teamDetails.map(member => {
        return (
          <Snapshot
            isOpen={isOpen}
            name={member.name}
            role={member.position}
            handleClick={this.handleClick}
            personDetails={personDetails} />
        )
      })}
      </div>

    )
  }
}


export default TeamDetails;

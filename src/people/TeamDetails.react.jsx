import React, { Component } from 'react';
import Snapshot from './snapshot.react';

import './team-details.css';

class TeamDetails extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      personDetails: [],
      currentPerson: '',
    };
    // this.handleTeamSplit();
  }

  handleClick = e => {
    console.log('handle person click');
    debugger;
    this.props.location;
  };
  // refactor
  // handleTeamSplit = () => {
  //   const { teamDetails } = this.props;
  //   const teamMember = [];
  //   debugger;
  //   if (this.props.classList.value.includes('Fungai Ruwende')) {
  //     teamMember.push(teamDetails[0].summary);
  //     teamMember.push(teamDetails[0].experience);
  //     teamMember.push(teamDetails[0].education);
  //     teamMember.push(teamDetails[0].alt);
  //     teamMember.push(teamDetails[0].image);
  //
  //     this.setState({
  //       personDetails: teamMember,
  //       currentPerson: 'Fungai',
  //     });
  //   } else if (this.props.classList.value.includes('Dafe Diejomaoh')) {
  //     teamMember.push(teamDetails[1].summary);
  //     teamMember.push(teamDetails[1].experience);
  //     teamMember.push(teamDetails[1].education);
  //     teamMember.push(teamDetails[1].alt);
  //     teamMember.push(teamDetails[1].image);
  //
  //     this.setState({
  //       personDetails: teamMember,
  //       currentPerson: 'Dafe',
  //     });
  //   } else if (this.props.classList.value.includes('Yannick Mpollo')) {
  //     teamMember.push(teamDetails[2].summary);
  //     teamMember.push(teamDetails[2].experience);
  //     teamMember.push(teamDetails[2].education);
  //     teamMember.push(teamDetails[2].alt);
  //     teamMember.push(teamDetails[2].image);
  //
  //     this.setState({
  //       personDetails: teamMember,
  //       currentPerson: 'Yannick',
  //     });
  //   } else {
  //     teamMember.push(teamDetails[3].summary);
  //     teamMember.push(teamDetails[3].experience);
  //     teamMember.push(teamDetails[3].education);
  //     teamMember.push(teamDetails[3].alt);
  //     teamMember.push(teamDetails[3].image);
  //
  //     this.setState({
  //       personDetails: teamMember,
  //       currentPerson: 'Kofi',
  //     });
  //     // debugger;
  //   }
  //   this.setState({ isOpen: true });
  // };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen, personDetails, currentPerson } = this.state;
    const { teamDetails, height } = this.props;
    return (
      <Fade
        in={props.fadeIn}
        key={props.personDetails.name}
        className="snapshot"
      >
        <div className="TeamDetails">
          <div className="shaddow" onClick={this.handleClick}>
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
          </div>
        </div>
      </Fade>
    );
  }
}

export default TeamDetails;

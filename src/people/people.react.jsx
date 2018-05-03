import React, { Component } from 'react';
import SubNav from '../sub_navigation/sub_navigation.react';
import FocusedDetails from './FocusedDetails.react';
import NativeDetails from './NativeDetails.react';
import ExperiencedDetails from './ExperiencedDetails.react';
import TeamDetails from './TeamDetails.react';

class People extends Component {

  state = {
    navItems: [
      {value: 'Focused', url: 'focused'},
      {value: 'Native', url: 'native'},
      {value: 'Experienced', url: 'experienced'},
      {value: 'Team Bios', url: 'bios'}
    ],
    currentDetails: 'Focused',
    pageDetails: ['Test']
  }

  renderDetails() {
    const {currentDetails} = this.state;
    if (currentDetails === 'Focused') {
      return <FocusedDetails pageDetails={this.state.pageDetails} />
    } else if (currentDetails === 'Native') {
      return <NativeDetails pageDetails={this.state.pageDetails} />
    } else if (currentDetails === 'Experienced') {
      return <ExperiencedDetails pageDetails={this.state.pageDetails} />
    } else {
      return <TeamDetails pageDetails={this.state.pageDetails} />
    }
  }

  render() {
    return (
      <div className="People">
        People
        <SubNav
          navItems={this.state.navItems}
          match={this.props.match} />
        { this.renderDetails() }
      </div>
    );
  }
}

export default People;

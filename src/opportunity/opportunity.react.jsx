import React, { Component } from 'react';
import AfricaDetails from './AfricaDetails.react';
import WhyCayorDetails from './WhyCayorDetails.react';
import CayorPerspectiveDetails from './CayorPerspectiveDetails.react';
import SubNav from '../sub_navigation/sub_navigation.react';

class Opportunities extends Component {
  state = {
    navItems: [
      {value: 'Africa Opportunity', url: 'africa'},
      {value: 'Why Cayor', url: 'cayor'},
      {value: 'The Cayor Perspective', url: 'perspective'}
    ],
    currentDetails: 'Africa Opportunity',
    pageDetails: ['Test']
  }

  renderDetails() {
    const {currentDetails} = this.state;
    if (currentDetails === 'Africa Opportunity') {
      return <AfricaDetails pageDetails={this.state.pageDetails} />
    } else if (currentDetails === 'Why Cayor') {
      return <WhyCayorDetails pageDetails={this.state.pageDetails} />
    } else if (currentDetails === 'The Cayor Perspective') {
      return <CayorPerspectiveDetails pageDetails={this.state.pageDetails} />
    }
  }

  render() {
    return (
      <div className="Opportunity">
      opportunity
        <SubNav
          navItems={this.state.navItems}
          match={this.props.match} />
        { this.renderDetails() }
      </div>
    );
  }
}

export default Opportunities;

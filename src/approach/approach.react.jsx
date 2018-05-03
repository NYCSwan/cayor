import React, { Component } from 'react';
import SubNav from '../sub_navigation/sub_navigation.react';
import PhilosophyDetails from './OurPhilosophyDetails.react';
import SectorDetails from './SectorDetails.react';
import RegionDetails from './TargetedRegionDetails.react';

class Approach extends Component {
  state = {
    navItems: [
      {value: 'Our Philosophy', url: 'philosophy'},
      {value: 'Targeted Investment Sectors', url: 'sectors'},
      {value: 'Targeted Regions & Countries', url: 'regions'}
    ],
    currentDetails: 'Our Philosophy',
    pageDetails: ['Test']
  }

  renderDetails() {
    const {currentDetails} = this.state;
    if (currentDetails === 'Our Philosophy') {
      return <PhilosophyDetails pageDetails={this.state.pageDetails} />
    } else if (currentDetails === 'Targeted Investment Sectors') {
      return <SectorDetails pageDetails={this.state.pageDetails} />
    } else if (currentDetails === 'Targeted Regions & Countries') {
      return <RegionDetails pageDetails={this.state.pageDetails} />
    }
  }

  render() {
    return (
      <div className="approach">
        approach
        <SubNav
          navItems={this.state.navItems}
          match={this.props.match} />
        { this.renderDetails() }
      </div>
    );
  }
}

export default Approach;

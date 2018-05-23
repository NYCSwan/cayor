import React, { Component } from 'react';
import SubNav from '../sub_navigation/sub_navigation.react';
import PhilosophyDetails from './OurPhilosophyDetails.react';
import SectorDetails from './SectorDetails.react';
import RegionDetails from './TargetedRegionDetails.react';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';
import './approach.css';

class Approach extends Component {
  state = {
    navItems: [
      {value: 'Our Philosophy', url: 'philosophy'},
      {value: 'Targeted Investment Sectors', url: 'sectors'},
      {value: 'Targeted Regions & Countries', url: 'regions'}
    ],
    currentDetails: 'Our Philosophy',
    philosophyText: ['Test philosophy'],
    sectorText: ['Test sectors'],
    regionText: ['Test regions and countries']

  }

  handleClick = (e) => {
    console.log('handle sub navigation click', e);
    this.setState({
      currentDetails: e.target.innerText
    })
  }

  renderDetails() {
    const {currentDetails} = this.state;
    if (currentDetails === 'Our Philosophy') {
      return <PhilosophyDetails pageDetails={this.state.philosophyText} />
    } else if (currentDetails === 'Targeted Investment Sectors') {
      return <SectorDetails pageDetails={this.state.sectorText} />
    } else if (currentDetails === 'Targeted Regions & Countries') {
      return <RegionDetails pageDetails={this.state.regionText} />
    }
  }

  render() {
    return (
      <div className="approach">
        <Navigation
          history={this.props.history}
          location={this.props.location}
          handleClick={this.props.handleClick} />
        <SubNav
          navItems={this.state.navItems}
          match={this.props.match}
          handleClick={this.handleClick} />
        { this.renderDetails() }
        <Footer />
      </div>
    );
  }
}

export default Approach;

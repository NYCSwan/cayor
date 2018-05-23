import React, { Component } from 'react';
import AfricaDetails from './AfricaDetails.react';
import WhyCayorDetails from './WhyCayorDetails.react';
import CayorPerspectiveDetails from './CayorPerspectiveDetails.react';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';
import SubNav from '../sub_navigation/sub_navigation.react';
import './opportunity.css';

class Opportunities extends Component {
  state = {
    navItems: [
      {value: 'Africa Opportunity', url: 'africa'},
      {value: 'Why Cayor', url: 'cayor'},
      {value: 'The Cayor Perspective', url: 'perspective'}
    ],
    currentDetails: 'Africa Opportunity',
    africaText: ['Test african opportunity'],
    whyText: ['Test why cayor'],
    perspectiveText: ['Test perspective']

  }

  handleClick = (e) => {
    console.log('handle sub navigation click', e);
    this.setState({
      currentDetails: e.target.innerText
    })
  }

  renderDetails() {
    const {currentDetails} = this.state;
    if (currentDetails === 'Africa Opportunity') {
      return <AfricaDetails pageDetails={this.state.africaText} />
    } else if (currentDetails === 'Why Cayor') {
      return <WhyCayorDetails pageDetails={this.state.whyText} />
    } else if (currentDetails === 'The Cayor Perspective') {
      return <CayorPerspectiveDetails pageDetails={this.state.perspectiveText} />
    }
  }

  render() {
    return (
      <div className="opportunity">
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

export default Opportunities;

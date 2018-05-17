import React, { Component } from 'react';
import SubNav from '../sub_navigation/sub_navigation.react';
import FocusedDetails from './FocusedDetails.react';
import NativeDetails from './NativeDetails.react';
import ExperiencedDetails from './ExperiencedDetails.react';
import TeamDetails from './TeamDetails.react';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';
import './people.css';

class People extends Component {

  state = {
    navItems: [
      {value: 'Focused', url: 'focused'},
      {value: 'Native', url: 'native'},
      {value: 'Experienced', url: 'experienced'},
      {value: 'Team Bios', url: 'bios'}
    ],
    currentDetails: 'Focused',
    focusedText: ['Test focus'],
    nativeText: ['Test native'],
    experiencedText: ['Test expierienced'],
    teamText: ['Test team']

  }

  handleClick = (e) => {
    console.log('handle sub navigation click', e);
    this.setState({
      currentDetails: e.target.innerText
    })
  }

  renderDetails() {
    const {currentDetails} = this.state;
    if (currentDetails === 'Focused') {
      return <FocusedDetails pageDetails={this.state.focusedText} />
    } else if (currentDetails === 'Native') {
      return <NativeDetails pageDetails={this.state.nativeText} />
    } else if (currentDetails === 'Experienced') {
      return <ExperiencedDetails pageDetails={this.state.experiencedText} />
    } else {
      return <TeamDetails pageDetails={this.state.teamText} />
    }
  }

  render() {
    return (
      <div className="people">
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

export default People;

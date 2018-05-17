import React, { Component } from 'react';
import EsgStrategyDetails from './EsgStrategyDetails.react';
import EsgPhilosophyDetails from './EsgPhilosophyDetails.react';
import EsgFrameworkDetails from './EsgFrameworkDetails.react';
import SubNav from '../sub_navigation/sub_navigation.react';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';

class Esg extends Component {
  state = {
    navItems: [
      {value: 'Philosophy', url: 'philosophy'},
      {value: 'Strategy', url: 'strategy'},
      {value: 'Framework', url: 'framework'}
    ],
    currentDetails: 'Philosophy',
    philosophyText: ['Test philosophy'],
    strategyText: ['Test strategy'],
    frameworkText: ['Test framework']

  }

    handleClick = (e) => {
      console.log('handle sub navigation click', e);
      this.setState({
        currentDetails: e.target.innerText
      })
    }
  renderDetails() {
    const {currentDetails} = this.state;
    if (currentDetails === 'Philosophy') {
      return <EsgPhilosophyDetails pageDetails={this.state.philosophyText} />
    } else if (currentDetails === 'Strategy') {
      return <EsgStrategyDetails pageDetails={this.state.strategyText} />
    } else if (currentDetails === 'Framework') {
      return <EsgFrameworkDetails pageDetails={this.state.frameworkText} />
    }
  }

  render() {
    return (
      <div className="esg">
        <Navigation
          history={this.props.history}
          location={this.props.location}
          handleClick={this.props.handleClick} />
        ESG
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

export default Esg;

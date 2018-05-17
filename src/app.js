import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './App.css';
import Routes from './routes';
import ContactAccra from './contact/ContactAccra.react';
import ContactJoburg from './contact/ContactJoburg.react';

class App extends Component {
  state = {
    isContactModalOpen: false,
    contactLocation: '',
    transitionPage: false,
    slideToRight: false,
    slideToLeft: false
  }

  handleClick = (e) => {
    console.log('click contact', e);
    debugger
    this.setState({
      isContactModalOpen: true,
      contactLocation: e.target.innerText.toLocaleLowerCase()
    })
  }

    handleContactModal = () => {
    console.log('handleContactModal display');
    const { contactLocation } = this.state;

    if (contactLocation === 'accra') {
      return <ContactAccra />
    } else {
      return <ContactJoburg />
    }
  }

  handleModalClose = () => {
    console.log('handle modal close-- TBD');
  }


  togglePageTransition = () => {
    console.log(' handle home page transition');
    this.setState({
      slideToLeft: !this.state.slideToLeft

    })
  }

  render() {
    return (
      <div className="App">
        { this.state.isContactModalOpen &&
          this.handleContactModal()
        }
        <Routes
          transitionKey={this.props.match.path}
          handleClick={this.handleClick}
          handlePageTransition={this.handlePageTransition}
          location={this.props.location}
          match={this.props.match}
          history={this.props.history} />
      </div>
    );
  }
}

export default withRouter(App);

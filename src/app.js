import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './App.css';
import Content from './layout/content.react';
import ContactAccra from './contact/ContactAccra.react';
import ContactJoburg from './contact/ContactJoburg.react';

class App extends Component {
  state = {
    isContactModalOpen: false,
    contactLocation: '',
    transitionPage: false
  }

  handleClick = (e) => {
    console.log('click contact', e);
    debugger
    this.setState({
      isContactModalOpen: true,
      contactLocation: e.target.innerText.toLocaleLowerCase()
    })
  }

  handlePageTransition = () => {
    console.log(' handle home page transition');
    this.setState({
      transitionPage: !this.state.transitionPage
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

  render() {
    return (
      <div className="App">
        { this.state.isContactModalOpen &&
          this.handleContactModal()
        }
        <Content
          props={this.props}
          transitionPage={this.state.transitionPage}
          transitionKey={this.props.match.path}
          handleClick={this.handleClick}
          handlePageTransition={this.handlePageTransition} />
      </div>
    );
  }
}

export default withRouter(App);

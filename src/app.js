import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './App.css';
import Navigation from './navigation/navigation.react';
import Footer from './layout/footer.react';
import Routes from './routes';
import ContactAccra from './contact/ContactAccra.react';
import ContactJoburg from './contact/ContactJoburg.react';

class App extends Component {
  state = {
    isContactModalOpen: false,
    contactLocation: ''
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

  render() {
    return (
      <div className="App">
        <Navigation
          handleClick={this.handleClick} />
        <div className='body'>
        { this.state.isContactModalOpen &&
          this.handleContactModal()
        }
          <Routes
            props={this.props}
            key={this.props.match.path} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(App);

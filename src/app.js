import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './App.css';
import Routes from './routes';
import ContactForm from './contact/contact_form.react';
// import ContactJoburg from './contact/ContactJoburg.react';
import Accra from './media/Ghana_map.jpg';
import Joburg from './media/SAfrica_map.jpg';

class App extends Component {
  state = {
    isContactModalOpen: false,
    contactLocation: '',
    joburgContactDetails: [
      {location: 'Johannesburg'},
      {street_address: 'Suite No. 23, Unit E0002, Building 4'},
      {city_state: 'Asbury Park, Magalieszight Ave Dunkeld West Johannesburg'},
      {phone: '+2711 593 3266'},
      {imageUrl: Joburg, imageAlt: 'Map of South Africa, Cayor\'s first location.'}
    ],
    accraContactDetails: [
      {location: 'Accra'},
      {street_address: 'tbd'},
      {city_state: 'tbd'},
      {phone: '+'},
      {imageUrl: Accra, imageAlt: 'Map of Ghana, Cayor\'s second location.'}
    ]
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
    debugger
    if (contactLocation === 'accra') {
      return <ContactForm contactDetails={this.state.accrontactDetails} />
    } else {
      return <ContactForm contactDetails={this.state.joburgContactDetails} />
    }
  }

  handleModalClose = () => {
    console.log('handle modal close-- TBD');
  }


  // togglePageTransition = () => {
  //   console.log(' handle home page transition');
  //   this.setState({
  //     slideToLeft: !this.state.slideToLeft
  //
  //   })
  // }

  render() {
    return (
      <div className="App">
        { this.state.isContactModalOpen &&
          this.handleContactModal()
        }
        <Routes
          transitionKey={this.props.match.path}
          handleClick={this.handleClick}
          location={this.props.location}
          match={this.props.match}
          history={this.props.history} />
      </div>
    );
  }
}

export default withRouter(App);

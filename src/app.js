import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './App.css';
import Routes from './routes';
class App extends Component {
  state = {
    isContactModalOpen: false,
    // contactLocation: '',
    // joburgContactDetails: [
    //   {location: 'Johannesburg'},
    //   {street_address: 'Suite No. 23, Unit E0002, Building 4'},
    //   {city_state: 'Asbury Park, Magalieszight Ave Dunkeld West Johannesburg'},
    //   {phone: '+2711 593 3266'},
    //   {imageUrl: Joburg, imageAlt: 'Map of South Africa, Cayor\'s first location.'}
    // ],
    // accraContactDetails: [
    //   {location: 'Accra'},
    //   {street_address: 'tbd'},
    //   {city_state: 'tbd'},
    //   {phone: '+'},
    //   {imageUrl: Accra, imageAlt: 'Map of Ghana, Cayor\'s second location.'}
    // ]
  }

  handleClick = (e) => {
    console.log('clock click contact', e);
    e.preventDefault();
    const { isContactModalOpen } = this.state;
    // debugger
    this.setState({
      isContactModalOpen: !isContactModalOpen
      // contactLocation: e.target.innerText.toLocaleLowerCase()
    })
  }

  // handleContactModal = () => {
  //   console.log('handleContactModal display');
  //   const { contactLocation } = this.state;
  //   debugger
  //   if (contactLocation === 'accra') {
  //     return <ContactForm contactDetails={this.state.accraContactDetails} />
  //   } else {
  //     return <ContactForm contactDetails={this.state.joburgContactDetails} />
  //   }
  // }

  // handleModalClose = () => {
  //   console.log('handle modal close-- TBD');
  //   this.setState({ isContactModalOpen: false });
  // }


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
        <Routes
          className='routes'
          transitionKey={this.props.match.path}
          handleClick={this.handleClick}
          location={this.props.location}
          match={this.props.match}
          isContactModalOpen={this.state.isContactModalOpen} />
      </div>
    );
  }
}

export default withRouter(App);

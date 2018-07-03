import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Clock from '../clocks/clock.react';
import ColorLogo from '../media/cayor_color.png';
import WhiteLogo from '../media/grey-white-icon.png';
import ContactForm from '../contact/contact_form.react';
import Accra from '../media/Ghana_map.jpg';
import Joburg from '../media/SAfrica_map.jpg';

import './navigation.css';

class Navigation extends Component {
  state = {
    contactLocation: '',
    joburgContactDetails: [
      {
        location: 'Johannesburg',
        street_address: 'Suite No. 23, Unit E0002, Building 4',
        street_address2: 'Asbury Park, Magalieszight Ave',
        city: 'Dunkeld West Johannesburg',
        phone: '+2711 593 3266',
        imageUrl: Joburg, imageAlt: 'Map of South Africa, Cayor\'s first location.'}
    ],
    accraContactDetails: [
      {
        location: 'Accra',
        street_address: 'tbd',
        street_address2: 'tbd',
        city: 'tbd',
        phone: '+',
        imageUrl: Accra, imageAlt: 'Map of Ghana, Cayor\'s second location.'
      }
    ]
  }

  // shouldComponentUpdate(nextState) {
  //   return ( this.state.contactLocation !== nextState.contactLocation )
  // }

  handleClockClick = (e) => {
    const contactLocation = e.target.className.split(' ')[0];
    // debugger
    this.setState({ contactLocation });
    this.props.handleClockClick(e);
    // this.handleModalToggle();
  }

  // handleModalToggle = () => {
  //   console.log('handle modal toggle');
  //   const { isContactModalOpen } = this.state;
  //
  //   this.setState({ isContactModalOpen: !isContactModalOpen });
  // }

  renderContactPopover = () => {
    console.log('renderContactPopover');
    const { contactLocation, accraContactDetails, joburgContactDetails } = this.state;
    const { isContactModalOpen, fadeIn, handleClose } = this.props;
    // debugger
    if (contactLocation === 'accra') {
      return (
        <ContactForm
          fadeIn={fadeIn}
          contactDetails={accraContactDetails}
          contactLocation={contactLocation}
          handleClose={handleClose}
          isContactModalOpen={isContactModalOpen} />
      )
    } else {
      return (
        <ContactForm
          fadeIn={fadeIn}
          contactDetails={joburgContactDetails}
          contactLocation={contactLocation}
          handleClose={handleClose}
          isContactModalOpen={isContactModalOpen} />
      )
    }
  }

  render() {
    const { contactLocation } = this.state;
    const {  isContactModalOpen } = this.props;
    return (
      <header className={`header ${this.props.headerImg}`}>
        <NavLink to='/' className='logo-container'>
          <img
            className='logo'
            src={this.props.location.pathname === '/' ? WhiteLogo : ColorLogo }
            alt='logo' />
        </NavLink>

        <div id='accra'>
          <div id='jbg'>
            <div className={this.props.location.pathname === '/' ? 'right homepage' : 'right'}>
              <ul className='nav'>
                <li className='linkContainer'>
                  <NavLink to='/people' activeClassName="selected"
                  className='link people'>PEOPLE</NavLink></li>
                <li className='linkContainer'>
                  <NavLink to='/opportunity' activeClassName="selected"
                  className='link opportunity'>OPPORTUNITY</NavLink></li>
                <li className='linkContainer'>
                  <NavLink to='/approach' activeClassName="selected"
                  className='link approach'>APPROACH</NavLink></li>
                <li className='linkContainer'>
                  <NavLink to='/esg' activeClassName="selected"
                  className='link esg'>ESG</NavLink></li>
              </ul>
              <div className='clocks'>
                <div
                  onClick={this.handleClockClick}
                  className='accra clock-container'>
                  <Clock className='accra' offset='2' />
                  <h6 className='accra'>ACCRA</h6>
                </div>
                <div
                  onClick={this.handleClockClick}
                  className='jbg clock-container'>
                  <Clock className='jbg' offset='0'/>
                  <h6 className='jbg'>JBG</h6>
                </div>
              </div>
              </div>
            { isContactModalOpen && contactLocation !== '' ?
              this.renderContactPopover()
              : null
            }
          </div>
        </div>

      </header>
    )
  }
}
export default Navigation;

import React, { Component } from 'react';
import ContactForm from './contact_form.react';
import Joburg from '../media/SAfrica_map.jpg';

class ContactJoburg extends Component {
  state = {
    contactDetails: [
      {location: 'Johannesburg'},
      {street_address: 'Suite No. 23, Unit E0002, Building 4'},
      {city_state: 'Asbury Park, Magalieszight Ave Dunkeld West Johannesburg'},
      {phone: '+2711 593 3266'},
      {imageUrl: Joburg, imageAlt: 'Map of South Africa, Cayor\'s first location.'}
    ]
  }

    render() {
      return (

        <div className="contactJobu">
          <ContactForm
            contactDetails={this.state.contactDetails} />
        </div>
    )
  }
}

export default ContactJoburg;

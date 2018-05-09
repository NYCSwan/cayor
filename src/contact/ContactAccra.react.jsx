import React, { Component } from 'react';
import ContactForm from './contact_form.react';
import Accra from '../media/Ghana_map.jpg';

class ContactAccra extends Component {
  state = {
    contactDetails: [
      {location: 'Accra'},
      {street_address: 'tbd'},
      {city_state: 'tbd'},
      {phone: '+'},
      {imageUrl: Accra, imageAlt: 'Map of Ghana, Cayor\'s second location.'}
    ]
  }

    render() {
      return (
        <div className="contactAccra">
          <ContactForm
            contactDetails={this.state.contactDetails} />
        </div>
    )
  }
}

export default ContactAccra;

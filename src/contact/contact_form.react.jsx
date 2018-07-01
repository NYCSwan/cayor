import React from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const ContactForm = (props) => (
  <Popover className="contactForm">
    <PopoverHeader>Contact Us</PopoverHeader>
    <PopoverBody>
    {props.contactDetails.map(detail => {
      return (
        <div className='contactBody' key={detail.locationcd}>
          <h3>{detail.location}</h3>
          <img src={detail.imageUrl} alt={detail.imageAlt} />
          <h4>{detail.street_address}</h4>
          <h4>{detail.city_state}</h4>
          <h3>{detail.phone}</h3>
        </div>
      )
    })}
    </PopoverBody>
  </Popover>
)

export default ContactForm;

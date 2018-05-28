import React from 'react';

const ContactForm = (props) => (
  <div className="contactForm">
    <h2>Contact Us</h2>
    {props.contactDetails.map(detail => {
      return (
        <div className='contactBody' key={detail.locationcd}>
          <img src={detail.imageUrl} alt={detail.imageAlt} />
          <h3>{detail.location}</h3>
          <h4>{detail.street_address}</h4>
          <h4>{detail.city_state}</h4>
          <h3>{detail.phone}</h3>
        </div>
      )
    })}

  </div>
)

export default ContactForm;

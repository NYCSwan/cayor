import React from 'react';
import { Popover, PopoverHeader, PopoverBody, Fade } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import './contact_form.css';

const ContactForm = (props) => (
  <Popover
    className="contactForm"
    target={props.contactLocation}
    hideArrow={true}
    placement={'top-end'}
    isOpen={props.isContactModalOpen}>

    <PopoverHeader>
      <FontAwesomeIcon className={'times'} icon={faTimes} pull='right' />
      <h5>CONTACT US</h5>
    </PopoverHeader>
    <PopoverBody>
    {props.contactDetails.map(detail => {
      return (
        <Fade
          in={props.fadeIn}
          key={detail.location}
          className='contactBody'>
          <h3>{detail.location}</h3>
          <img src={detail.imageUrl} alt={detail.imageAlt} />
          <aside className='address'>
            <h4>{detail.street_address}</h4>
            <h4>{detail.street_address2}</h4>
            <h4>{detail.city}</h4>
            <h4>{detail.phone}</h4>
          </aside>
        </Fade>
      )
    })}
    </PopoverBody>
  </Popover>
)

export default ContactForm;

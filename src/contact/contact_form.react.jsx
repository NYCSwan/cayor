import React from "react";
import { Popover, PopoverHeader, PopoverBody, Fade } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact_form.css";

const ContactForm = props => (
  <Popover
    className="contactForm"
    target={props.contactLocation}
    hideArrow={true}
    placement={props.location.pathname === "/" ? "auto-end" : "top-end"}
    isOpen={props.isContactModalOpen}
  >
    <PopoverHeader>
      contact us
      <FontAwesomeIcon
        onClick={props.handleClose}
        className="times"
        icon="times"
        pull="right"
      />
    </PopoverHeader>
    <PopoverBody>
      {props.contactDetails.map(detail => {
        return (
          <Fade in={props.fadeIn} key={detail.location} className="contactBody">
            <img src={detail.imageUrl} alt={detail.imageAlt} />
            <aside className="address">
              <h4>
                <strong>Address:</strong> {detail.street_address}
              </h4>
              <h4 className="right">{detail.street_address2}</h4>
              <h4 className="right">{detail.city}</h4>
              <h4 className="phone">
                <strong>Phone:</strong> {detail.phone}
              </h4>
            </aside>
            <h3>{detail.location.toUpperCase()}</h3>
          </Fade>
        );
      })}
    </PopoverBody>
  </Popover>
);

export default ContactForm;

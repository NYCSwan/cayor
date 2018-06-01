import React from 'react';
import './footer.css';

const Footer = (props) => (
  <footer className={props.location.pathname === '/' ? `footer` : 'footer red'}>
    <small className="left">{String.fromCharCode(169)}2018 Cayor Capital</small>
    <small>All Rights Reserved.</small>
    <small className="right"> WEB FRAUD - PHISHING PRIVACY POLICIES</small>
  </footer>
)

export default Footer;

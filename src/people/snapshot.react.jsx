import React from 'react';
import { Fade, Collapse } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
// import Dafe from '../media/Accra.jpg';
// import Fungai from '../media/Accra.jpg';
// import Yannick from '../media/Accra.jpg';
// import Kofi from '../media/Accra.jpg';
import PopOut from '../layout/pop-out.react';
import Button from '../layout/button.react';

import './snapshot.css';

const Snapshot = props => (
  <Fade in={props.fadeIn} key={props.key} className="snapshot">
    <div className="bio">
      <img
        className={`headshot ${props.key}`}
        src={props.personDetails.image}
        alt={props.personDetails.alt}
        onClick={props.handleClick}
      />
      <div className="title">
        <h2 className="bio text">{props.key}</h2>
      </div>
    </div>
  </Fade>
);

export default Snapshot;

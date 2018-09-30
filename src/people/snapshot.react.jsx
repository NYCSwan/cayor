import React from 'react';
import { Fade, Collapse } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import PopOut from '../layout/pop-out.react';
import Button from '../layout/button.react';

import './snapshot.css';

const Snapshot = props => (
  <div className="bio">
    <img
      className={`headshot ${props.personDetails.name}`}
      src={props.personDetails.image}
      alt={props.personDetails.alt}
      onClick={props.handleClick}
    />
    <div className="title">
      <h2 className="bio text">{props.personDetails.name}</h2>
    </div>
  </div>
);

export default Snapshot;

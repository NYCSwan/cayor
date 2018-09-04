import React from 'react';
import { Fade, Collapse } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import Dafe from '../media/Accra.jpg';
import Fungai from '../media/Accra.jpg';
import Yannick from '../media/Accra.jpg';
import Kofi from '../media/Accra.jpg';
import PopOut from '../layout/pop-out.react';
import Button from '../layout/button.react';

import './snapshot.css';

const getImage = (name, handleClick) => {
  if (name === 'Fungai Ruwende') {
    return (
      <img
        className={`headshot ${name}`}
        src={Fungai}
        alt="Photograph of Fungai Ruwende, Managing Partner Cayor Capital Sub-Saharan Africa Equity Fund"
        onClick={handleClick}
      />
    );
  } else if (name === 'Dafe Diejomaoh') {
    return (
      <img
        className={`headshot ${name}`}
        src={Dafe}
        alt="Photograph of Dafe Diejomaoh, Managing Partner Cayor Capital Sub-Saharan Africa Equity Fund"
        onClick={handleClick}
      />
    );
  } else if (name === 'Yannick Mpollo') {
    return (
      <img
        className={`headshot ${name}`}
        src={Yannick}
        alt="Photograph of Yannick Mpollo, Principal Cayor Capital Sub-Saharan Africa Equity Fund"
        onClick={handleClick}
      />
    );
  } else {
    return (
      <img
        className={`headshot ${name}`}
        src={Kofi}
        alt="Photograph of Kofi Domfeh, Vice President Cayor Capital Sub-Saharan Africa Equity Fund"
        onClick={handleClick}
      />
    );
  }
};
// const activeClass = classNames({});

const Snapshot = props => (
  <Fade
    in={props.fadeIn}
    key={props.name}
    className={[
      props.isOpen && !props.name.includes(props.currentPerson)
        ? 'snapshot inactive'
        : 'snapshot',
      props.isOpen && props.name.includes(props.currentPerson)
        ? `active`
        : null,
    ]}
  >
    {getImage(props.name, props.handleClick)}
    <div className={`text ${props.name}`} onClick={props.handleClick}>
      <h4 className={props.name}>{props.name}</h4>
      <h5 className={props.name}>{props.role}</h5>
      {props.isOpen ? null : (
        <Button
          disabled={props.isOpen}
          styles={`button more ${props.name}`}
          onClick={props.handleClick}
          value="More"
          text="More"
        />
      )}
    </div>
    {props.isOpen && props.name.includes(props.currentPerson) ? (
      <FontAwesomeIcon
        onClick={props.handleClose}
        className={'close'}
        icon={faTimes}
        pull="right"
      />
    ) : null}
    <Collapse isOpen={props.isOpen && props.name.includes(props.currentPerson)}>
      <PopOut
        handleClose={props.handleClose}
        name={props.name}
        role={props.role}
        personDetails={props.personDetails}
      />
    </Collapse>
  </Fade>
);

export default Snapshot;

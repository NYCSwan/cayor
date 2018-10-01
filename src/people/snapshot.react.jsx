import React from 'react';
import {
  Card,
  CardImg,
  // CardText,
  CardImgOverlay,
  // CardTitle,
  // CardSubtitle,
} from 'reactstrap';
import './snapshot.css';

const Snapshot = props => (
  <Card
    className="bio"
    key={props.personDetails.name}
    onClick={props.handleClick}
  >
    <CardImg
      key={props.personDetails.name}
      className={`headshot ${props.personDetails.name}`}
      src={props.personDetails.image}
      alt={props.personDetails.alt}
    />
    <CardImgOverlay key={props.personDetails.name} className="title">
      {props.personDetails.name}
    </CardImgOverlay>
  </Card>
);

export default Snapshot;

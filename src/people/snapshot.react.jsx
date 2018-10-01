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
  <Card className="bio">
    <CardImg
      className={`headshot ${props.personDetails.name}`}
      src={props.personDetails.image}
      alt={props.personDetails.alt}
      onClick={props.handleClick}
    />
    <CardImgOverlay className="title">
      >{props.personDetails.name}
    </CardImgOverlay>
  </Card>
);

export default Snapshot;

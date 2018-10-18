import React from 'react';
import {
  Card,
  CardImg,
  Col,
  CardImgOverlay,
  // CardTitle,
  // CardSubtitle,
} from 'reactstrap';
import './snapshot.css';

const Snapshot = props => (
  <Col xs="auto" sm="4" className={`bioContainer ${props.personDetails.name}`}>
    <Card
      className="bio"
      key={props.personDetails.name}
      onClick={props.handleClick}
    >
      <CardImg
        key={props.personDetails.position}
        className={`headshot ${props.personDetails.name}`}
        src={props.personDetails.image}
        alt={props.personDetails.alt}
      />
      <CardImgOverlay
        key={props.personDetails.name + props.personDetails.position}
        className="title"
      >
        {props.personDetails.name}
      </CardImgOverlay>
    </Card>
  </Col>
);

export default Snapshot;

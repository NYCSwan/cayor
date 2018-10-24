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
  <Col
    xs={props.xs}
    sm={props.sm}
    className={`bioContainer ${props.value.name}`}
  >
    <Card className="bio" key={props.value.name} onClick={props.handleClick}>
      <CardImg
        key={props.value.position}
        className={`headshot ${props.value.name}`}
        src={props.value.image}
        alt={props.value.alt}
      />
      <CardImgOverlay
        key={props.value.name + props.value.position}
        className="title"
      >
        {props.value.name}
      </CardImgOverlay>
    </Card>
  </Col>
);

export default Snapshot;

import React from 'react';
import {
  Card,
  CardImg,
  Col,
  CardImgOverlay,
  CardBody,
  CardSubtitle,
  CardTitle,
} from 'reactstrap';
import './snapshot.css';

const Snapshot = props => (
  <Col
    xs={props.xs}
    sm={props.sm}
    className={`bioContainer ${props.value.name}`}
    onClick={props.handleClick}
  >
    <Card className="bio" key={props.value.name}>
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
        <CardBody>
          <CardTitle>{props.value.name}</CardTitle>
          <CardSubtitle key={props.value.name}>
            {props.value.position}
          </CardSubtitle>
        </CardBody>
      </CardImgOverlay>
    </Card>
  </Col>
);

export default Snapshot;

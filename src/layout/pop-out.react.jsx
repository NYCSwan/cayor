import React from 'react';
import { Card, CardBody, CardText, CardSubtitle } from 'reactstrap';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faWindowClose } from '@fortawesome/fontawesome-free-solid';
import './pop-out.css';

// <FontAwesomeIcon
//   onClick={props.handleClose}
//   className={'close'}
//   icon={faWindowClose}
//   pull='right' />
const PopOut = props => {
  const bodyHeight = Math.floor(props.height / 2.5);

  return (
    <div>
      <Card style={{ height: bodyHeight }}>
        <CardBody style={{ height: bodyHeight }}>
          <CardText>{props.personDetails[0]}</CardText>
          <CardSubtitle>Experience</CardSubtitle>
          <CardText> {props.personDetails[1]} </CardText>
          <CardSubtitle>Education</CardSubtitle>
          <CardText>{props.personDetails[2]}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default PopOut;

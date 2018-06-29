import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/fontawesome-free-solid';

const PopOut = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
        <FontAwesomeIcon
          onClick={props.handleClose}
          className={'close'}
          icon={faWindowClose}
          pull='right' />
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.role}</CardSubtitle>
          <CardText>{props.personDetails.summary}</CardText>
          <CardSubtitle>Experience</CardSubtitle>
          <CardText>{props.personDetails.experience}</CardText>
          <CardSubtitle>Education</CardSubtitle>
          <CardText>{props.personDetails.education}</CardText>
        </CardBody>
      </Card>

    </div>
  );
};

export default PopOut;

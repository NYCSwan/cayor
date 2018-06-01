import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const PopOut = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Summary</CardTitle>
          <CardText></CardText>
          <CardTitle>Experience</CardTitle>
          <CardText></CardText>
          <CardTitle>Education</CardTitle>
          <CardText></CardText>
        </CardBody>
      </Card>

    </div>
  );
};

export default PopOut;

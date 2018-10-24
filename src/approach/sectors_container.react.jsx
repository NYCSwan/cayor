import React from 'react';
import {
  Card,
  CardImg,
  Col,
  CardImgOverlay,
  CardTitle,
  CardText,
  CardBody,
} from 'reactstrap';
import TextTable from '../layout/text-table.react';
import List from '../layout/list.react.js';
import './sectors_container.css';

const SectorsContainer = props => (
  <div className="SectorsContainer">
    {props.text.map(section => {
      return (
        <Col xs={props.xs} sm={props.sm} className={`sector`}>
          <Card
            className={section.header}
            key={section.header}
            onClick={props.handleClick}
          >
            <CardImg
              key={section.key}
              className="image"
              src={section.image}
              alt={section.alt}
            />
            <CardImgOverlay key={section.template} className="text">
              <CardBody>
                <CardTitle>{section.header}</CardTitle>
                <List items={section.details} />
              </CardBody>
            </CardImgOverlay>
          </Card>
        </Col>
      );
    })}
  </div>
);

export default SectorsContainer;

// <Snapshot
// xs="6"
// sm="6"
// className={`sector`}
// location={props.location}
// key={section.header}
// fadeIn={props.fadeIn}
// value={props.currentDetails}
// text={section}
// handleClick={props.handleButtonClick}
// />
// <TextTable
// />

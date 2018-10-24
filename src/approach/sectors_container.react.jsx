import React from 'react';
import {
  Container,
  Row,
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
  <Container className="SectorsContainer">
    <Row>
      {props.text.slice(0, 2).map((section, idx) => {
        return (
          <Col
            xs={idx % 2 ? { size: '6' } : { size: '5' }}
            className={`sector`}
          >
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
                  <CardTitle>{section.header.toUpperCase()}</CardTitle>
                  <List items={section.details} />
                </CardBody>
              </CardImgOverlay>
            </Card>
          </Col>
        );
      })}
    </Row>
    <Row>
      {props.text.slice(2).map((section, idx) => {
        return (
          <Col
            xs={idx % 2 ? { size: '5' } : { size: '5', offset: '1' }}
            sm={idx % 2 ? { size: '5' } : { size: '5', offset: '1' }}
            className={`sector`}
          >
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
                  <CardTitle>{section.header.toUpperCase()}</CardTitle>
                  <List items={section.details} />
                </CardBody>
              </CardImgOverlay>
            </Card>
          </Col>
        );
      })}
    </Row>
  </Container>
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

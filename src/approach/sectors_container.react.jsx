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
      {props.text.slice(0, 3).map(section => {
        if (section.header.includes('grey')) {
          return (
            <Col
              className={`colorContainer ${section.header}`}
              key={section.header}
              xs="4"
              sm="4"
            />
          );
        } else {
          return (
            <Col xs="4" className={`sector`} key={section.key}>
              <Card
                className={section.header}
                key={section.header}
                onClick={props.handleClick}
              >
                <CardImg
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
        }
      })}
    </Row>
    <Row>
      {props.text.slice(3).map(section => {
        if (section.header.includes('red')) {
          return (
            <Col
              className={`colorContainer ${section.header}`}
              key={section.header}
              xs="4"
              sm="4"
            />
          );
        } else {
          return (
            <Col key={section.key} xs="4" className={`sector`}>
              <Card
                className={section.header}
                key={section.header}
                onClick={props.handleClick}
              >
                <CardImg
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
        }
      })}
    </Row>
  </Container>
);

export default SectorsContainer;

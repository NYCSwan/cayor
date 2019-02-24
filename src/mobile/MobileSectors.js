import React from 'react';
import {
  Container,
  Row,
  Card,
  CardImg,
  Col,
  CardImgOverlay,
  CardTitle,
  CardBody,
} from 'reactstrap';
import List from '../layout/list.react.js';
import '../approach/sectors_container.css';

const MobileSectorsContainer = props => (
  <Container className="SectorsContainer">
    <Row>
      {props.text.slice(0, 2).map(section => {
        if (section.header.includes('grey')) {
          return (
            <Col
              className={`colorContainer ${section.header}`}
              key={section.header}
              xs="6"
              sm="6"
            />
          );
        } else {
          return (
            <Col xs="6" className={`sector`} key={section.key}>
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
      {props.text.slice(2, 4).map(section => {
        if (section.header.includes('grey')) {
          return (
            <Col
              className={`colorContainer ${section.header}`}
              key={section.header}
              xs="6"
              sm="6"
            />
          );
        } else {
          return (
            <Col xs="6" className={`sector`} key={section.key}>
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
      {props.text.slice(4).map(section => {
        if (section.header.includes('red')) {
          return (
            <Col
              className={`colorContainer ${section.header}`}
              key={section.header}
              xs="6"
              sm="6"
            />
          );
        } else {
          return (
            <Col key={section.key} xs="6" className={`sector`}>
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

export default MobileSectorsContainer;

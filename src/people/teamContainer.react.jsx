import React from "react";
import { Col, Row, Container } from "reactstrap";
import slice from "lodash/slice";
import Snapshot from "./snapshot.react";

const TeamDetails = props => (
      <div className="main">
        <Container>
          <Row>
            {slice(props.teamDetails, 0, 4).map(member => {
              if (
                member.name.includes("blue") ||
                member.name.includes("red") ||
                member.name.includes("grey")
              ) {
                return (
                  <Col
                    className={`colorContainer ${member.name}`}
                    key={member.name}
                    xs="3"
                    sm="3"
                  />
                );
              } else {
                return (
                  <Snapshot
                    key={member.name}
                    handleClick={props.handleClick}
                    value={member}
                    xs="3"
                    sm="3"
                  />
                );
              }
            })}
          </Row>
          <Row className="offset">
            {slice(props.teamDetails, 4, 7).map(member => {
              if (
                member.name.includes("blue") ||
                member.name.includes("red") ||
                member.name.includes("grey")
              ) {
                return (
                  <Col
                    className={`colorContainer ${member.name}`}
                    key={member.name}
                    xs={{ size: "3" }}
                    sm={{ size: "3" }}
                  />
                );
              } else if (member.name.includes("Our")) {
                return (
                  <Col
                    className={`colorContainer ${member.name}`}
                    key={member.name}
                    xs={{ size: "3" }}
                    sm={{ size: "3" }}
                  >
                    <h5 className="header">{member.name.toUpperCase()}</h5>
                  </Col>
                );
              } else {
                return (
                  <Snapshot
                    key={member.name}
                    handleClick={props.handleClick}
                    value={member}
                    xs={{ size: "3" }}
                    sm={{ size: "3" }}
                  />
                );
              }
            })}
          </Row>
          <Row>
            {slice(props.teamDetails, 7, 11).map(member => {
              if (
                member.name.includes("blue") ||
                member.name.includes("red") ||
                member.name.includes("grey")
              ) {
                return (
                  <Col
                    className={`colorContainer ${member.name}`}
                    key={member.name}
                    xs="3"
                    sm="3"
                  />
                );
              } else {
                return (
                  <Snapshot
                    key={member.name}
                    handleClick={props.handleClick}
                    value={member}
                    xs="3"
                    sm="3"
                  />
                );
              }
            })}
          </Row>
        </Container>
      </div>
    );

export default TeamDetails;

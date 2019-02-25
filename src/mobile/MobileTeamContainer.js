import React from "react";
import { Col, Row, Container } from "reactstrap";
import slice from "lodash/slice";
import Snapshot from "../people/snapshot.react";

const MobileTeamContainer = props => (
      <div className="main">
        <Container>
          <Row>
            {slice(props.teamDetails, 0, 2).map(member => {
              if (
                member.name.includes("blue") ||
                member.name.includes("red") ||
                member.name.includes("grey")
              ) {
                return (
                  <Col
                    className={`colorContainer ${member.name}`}
                    key={member.name}
                    xs="6"
                    sm="6"
                  />
                );
              } else {
                return (
                  <Snapshot
                    key={member.name}
                    handleClick={props.handleClick}
                    value={member}
                    xs="6"
                    sm="6"
                  />
                );
              }
            })}
          </Row>
          <Row className='offset'>
            {slice(props.teamDetails, 2, 4).map(member => {
              if (
                member.name.includes("grey")
              ) {
                return (
                  <Col
                    className={"colorContainer Our Team"}
                    key={member.name}
                    xs={{ size: "6" }}
                    sm={{ size: "6" }}
                  >
                    <h5 className="header">OUR TEAM</h5>
                  </Col>
                );
              } else {
                return (
                  <Snapshot
                    key={member.name}
                    handleClick={props.handleClick}
                    value={member}
                    xs={{ size: "6" }}
                    sm={{ size: "6" }}
                  />
                );
              }
            })}
          </Row>
          <Row>
            {slice(props.teamDetails, 7, 9).map(member => {
              if (
                member.name.includes("blue") ||
                member.name.includes("red") ||
                member.name.includes("grey")
              ) {
                return (
                  <Col
                    className={`colorContainer ${member.name}`}
                    key={member.name}
                    xs="6"
                    sm="6"
                  />
                );
              } else {
                return (
                  <Snapshot
                    key={member.name}
                    handleClick={props.handleClick}
                    value={member}
                    xs="6"
                    sm="6"
                  />
                );
              }
            })}
          </Row>
          <Row>
            {slice(props.teamDetails, 9, 11).map(member => {
              if (
                member.name.includes("blue") ||
                member.name.includes("red") ||
                member.name.includes("grey")
              ) {
                return (
                  <Col
                    className={`colorContainer ${member.name}`}
                    key={member.name}
                    xs="6"
                    sm="6"
                  />
                );
              } else {
                return (
                  <Snapshot
                    key={member.name}
                    handleClick={props.handleClick}
                    value={member}
                    xs="6"
                    sm="6"
                  />
                );
              }
            })}
          </Row>
        </Container>
      </div>
    );

export default MobileTeamContainer;

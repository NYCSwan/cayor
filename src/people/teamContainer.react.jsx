import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import slice from "lodash/slice";
import Snapshot from "./snapshot.react";

export default class TeamDetails extends Component {
  render() {
    const { teamDetails } = this.props,
      row1 = slice(teamDetails, 0, 4),
      row2 = slice(teamDetails, 4, 7),
      row3 = slice(teamDetails, 7, 11);

    return (
      <div className="main">
        <Container>
          <Row>
            {row1.map(member => {
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
                    handleClick={this.props.handleClick}
                    value={member}
                    xs="3"
                    sm="3"
                  />
                );
              }
            })}
          </Row>
          <Row className="offset">
            {row2.map(member => {
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
                    handleClick={this.props.handleClick}
                    value={member}
                    xs={{ size: "3" }}
                    sm={{ size: "3" }}
                  />
                );
              }
            })}
          </Row>
          <Row>
            {row3.map(member => {
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
                    handleClick={this.props.handleClick}
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
  }
}

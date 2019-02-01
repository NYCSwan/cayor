import React, { Component } from "react";
// import Row from "reactstrap/Row";
// import Container from "reactstrap/Container";
import { Col, Row, Container, Fade } from "reactstrap";
// import Fade from "reactstrap/Fade";
import filter from "lodash/filter";
import findKey from "lodash/findKey";
import slice from "lodash/slice";

import Snapshot from "./snapshot.react";
import PersonDetails from "./personDetails";

import "./team-details.css";

class TeamDetails extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      personDetails: [],
      currentPerson: "",
      idx: null,
      teamDetailsNoColors: []
    };
  }

  componentDidMount() {
    console.log("componentDidMount team details");
    const { teamDetails, closeDetails } = this.props;

    const teamDetailsNoColors = filter(teamDetails, detail => {
      return detail.position !== undefined;
    });
    this.setState({ teamDetailsNoColors });
    if (closeDetails) {
      this.setState({ isOpen: false });
    }
  }

  shouldComponentUpdate(nextState, nextProps) {
    return this.state.idx !== nextState.idx;
  }

  handleClick = e => {
    console.log("handle person click");
    // const { teamDetails } = this.props;
    const { teamDetailsNoColors } = this.state;
    const currentPerson = e.target.textContent.toLowerCase(); //return.key;
    // let index;
    e.preventDefault();

    if (
      currentPerson.includes("red") ||
      currentPerson.includes("blue") ||
      currentPerson.includes("grey") ||
      currentPerson.includes("Our") ||
      currentPerson === undefined
    ) {
      this.setState({ isOpen: false });
      return;
    } else if (currentPerson.includes("dafe")) {
      this.setState({
        isOpen: true,
        idx: 1,
        currentPerson: teamDetailsNoColors[1].name
      });
      this.props.handleBioClick();
    } else if (currentPerson.includes("kofi")) {
      this.setState({
        isOpen: true,
        idx: 3,
        currentPerson: teamDetailsNoColors[3].name
      });

      this.props.handleBioClick();
    } else if (currentPerson.includes("fungai")) {
      this.setState({
        isOpen: true,
        idx: 0,
        currentPerson: teamDetailsNoColors[0].name
      });

      this.props.handleBioClick();
    } else {
      this.setState({
        isOpen: true,
        idx: 2,
        currentPerson: teamDetailsNoColors[2].name
      });

      this.props.handleBioClick();
    }
  };

  handleNextClick = e => {
    console.log("handleNextClick -- personDetails");
    // const { teamDetails } = this.props;
    const { idx, teamDetailsNoColors } = this.state;
    let nextIdx = 0;

    if (idx === teamDetailsNoColors.length - 1) {
      nextIdx = 0;
    } else {
      nextIdx = idx + 1;
    }
    const nextPerson = teamDetailsNoColors[nextIdx].name;
    this.setState({
      idx: nextIdx,
      currentPerson: nextPerson
    });
  };

  renderBios() {
    const { teamDetails } = this.props;
    const row1 = slice(teamDetails, 0, 4);
    const row2 = slice(teamDetails, 4, 7);
    const row3 = slice(teamDetails, 7, 11);

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
                    handleClick={this.handleClick}
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
                    handleClick={this.handleClick}
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
                    handleClick={this.handleClick}
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

  renderDetails() {
    const { currentPerson, teamDetailsNoColors } = this.state;

    const personDetails = filter(
      teamDetailsNoColors,
      details => currentPerson.toUpperCase() === details.name.toUpperCase()
    );
    const key = findKey(personDetails);

    return (
      <PersonDetails
        personDetails={personDetails[key]}
        handleNextClick={this.handleNextClick}
      />
    );
  }

  render() {
    const { isOpen } = this.state;
    const { fadeIn, closeDetails } = this.props;
    return (
      <Fade in={fadeIn} key={"teamPage"} className="TeamDetails">
        {isOpen === true && closeDetails === false
          ? this.renderDetails()
          : this.renderBios()}
      </Fade>
    );
  }
}

export default TeamDetails;

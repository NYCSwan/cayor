import React, { Component } from "react";
import filter from "lodash/filter";
import findKey from "lodash/findKey";
import TeamContainer from "./teamContainer.react";
import PersonDetails from "./personDetails";
import MobileTeamContainer from '../mobile/MobileTeamContainer'
import "./team-details.css";

class TeamDetails extends Component {
  constructor(props) {
    super(props);
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

  handleClick = e => {
    console.log("handle person click");
    const { teamDetailsNoColors } = this.state,
      currentPerson = e.target.textContent.toLowerCase();
    // e.preventDefault();

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
  renderTeam() {
    const { teamDetails, deviceIdx } = this.props;
    if (deviceIdx === 1 || deviceIdx === 2) {
    
      return (
          <MobileTeamContainer
            teamDetails={teamDetails}
            handleClick={this.handleClick}
            deviceIdx={deviceIdx}
          />
      )
    } else {
        return (
          <TeamContainer
            teamDetails={teamDetails}
            handleClick={this.handleClick}
            deviceIdx={deviceIdx}
          />
        )
      }
  }

  render() {
    const { isOpen } = this.state;
    const { closeDetails, smoosh } = this.props;

    return (
      <div className={smoosh ? "TeamDetails smoosh" : "TeamDetails"}>
        {isOpen === true && closeDetails === false ? (
          this.renderDetails()
        ) : (
          this.renderTeam()

        )}
      </div>
    );
  }
}

export default TeamDetails;

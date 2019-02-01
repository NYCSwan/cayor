import React from "react";
import TeamDetails from "./TeamDetails.react";
import TextTableContainer from "../layout/text-table-container.react";

const PeopleDetails = props => (
  <div>
    {props.currentDetails === "native" && (
      <TextTableContainer
        fadeIn={props.fadeIn}
        currentDetails={props.currentDetails}
        text={props.nativeTextTable}
        currentDetailIdx={0}
        handleButtonClick={props.handleButtonClick}
      />
    )}
    {props.currentDetails === "experienced" && (
      <TextTableContainer
        fadeIn={props.fadeIn}
        currentDetails={props.currentDetails}
        text={props.experiencedTextTable}
        currentDetailIdx={0}
        handleButtonClick={props.handleButtonClick}
      />
    )}

    {props.currentDetails === "bios" && (
      <TeamDetails
        fadeIn={props.fadeIn}
        height={props.height}
        teamDetails={props.teamDetails}
        pageDetails={props.teamText}
        closeDetails={props.closeDetails}
        handleBioClick={props.handleBioClick}
      />
    )}
  </div>
);

export default PeopleDetails;

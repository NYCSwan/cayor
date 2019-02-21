import React from "react";
import TextTable from "./text-table.react";
import "./text-table-container.css";

const TextTableContainer = props => (
  <div className={props.smoosh ? "text-table-container smoosh" : "text-table-container"}>
    {props.mainHeader ? (
      <h4 className="header left">{props.mainHeader}</h4>
    ) : null}
    <TextTable
      location={props.location}
      text={props.text[props.currentDetailIdx]}
    />
  </div>
);

export default TextTableContainer;

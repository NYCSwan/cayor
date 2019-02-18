import React from "react";

import List from "./list.react";
import "./text-table.css";

const TextTable = props => (
  <div
    className={
      props.text.template ? `text-table ${props.text.template}` : "text-table"
    }
  >
    {props.text.header ? (
      <header className="headerContainer">
        {props.text.image ? (
          <img
            src={props.text.image}
            alt={props.text.header}
            className="headerImg"
          />
        ) : null}
        <h4>{props.text.header.toUpperCase()}</h4>
      </header>
    ) : null}
    <List style={props.location} items={props.text.details} />
  </div>
);
export default TextTable;

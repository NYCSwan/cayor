import React from "react";
// import { Fade } from 'reactstrap';
import List from "./list.react";
import "./text-table.css";

const TextTable = props => (
  // <Fade in={props.fadeIn}>
  <div
    className={
      props.text.template ? `text-table ${props.text.template}` : "text-table"
    }
  >
    {props.text.header ? (
      <div className="headerContainer">
        {props.text.image ? (
          <img
            src={props.text.image}
            alt={props.text.header}
            className="headerImg"
          />
        ) : null}
        <h4>{props.text.header.toUpperCase()}</h4>
      </div>
    ) : null}
    <List style={props.location} items={props.text.details} />
  </div>
  // </Fade>
);
export default TextTable;

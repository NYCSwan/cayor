import React from "react";
import TextTable from "../layout/text-table.react";
import "./region-details.css";

const RegionDetails = props => (
  <div className="regionDetails" key={props.location.pathname}>
    <h4 className="header">
      {"We focus on a select number of countries across Sub-Saharan Africa".toUpperCase()}
    </h4>
    {props.text.map(region => {
      return (
        <div className={region.className} key={region.className}>
          <TextTable
            location={props.location.pathname.slice(1).split("/")[0]}
            text={region}
            key={region.header}
          />
        </div>
      );
    })}
  </div>
);

export default RegionDetails;

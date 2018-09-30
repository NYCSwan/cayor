import React from 'react';
import TextTable from '../layout/text-table.react';
import './region-details.css';

const RegionDetails = props => (
  <div className="regionDetails">
    <h4 className="header">
      {'We focus on a select number of countries across Sub-Saharan Africa'.toUpperCase()}
    </h4>
    {props.text.map(region => {
      return (
        <div className={region.className}>
          <TextTable location={props.location} key={region} text={region} />
        </div>
      );
    })}
  </div>
);

export default RegionDetails;

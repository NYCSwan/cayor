import React from 'react';
import TextTable from '../layout/text-table.react';
import './region-details.css';

const RegionDetails = props => (
  <div className="regionDetails">
    {props.text.map(region => {
      return (
        <div className={region.className}>
          <h4>We focus on multiple regions across Sub-Saharan Africa</h4>
          <TextTable location={props.location} key={region} text={region} />
        </div>
      );
    })}
  </div>
);

export default RegionDetails;

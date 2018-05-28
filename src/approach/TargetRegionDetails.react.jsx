import React from 'react';
import TextTable from '../layout/text-table.react';

const RegionDetails = (props) => (
  <div className="regionDetails">
  {props.text.map(region => {
    return (
      <TextTable
        key={region}
        text={region} />
    )
  })}
  </div>
)

export default RegionDetails;

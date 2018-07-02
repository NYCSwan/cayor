import React from 'react';
import TextTable from '../layout/text-table.react';

const SectorsContainer = (props) => (
  <div className="SectorsContainer">
  { props.text.map((section) => {
    return (
      <TextTable
        key={section.header}
        fadeIn={props.fadeIn}
        currentDetails={props.currentDetails}
        text={ section } />      )
  })}
  </div>
)

export default SectorsContainer;

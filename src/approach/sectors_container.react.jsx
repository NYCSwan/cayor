import React from 'react';
import TextTable from '../layout/text-table.react';
import './sectors_container.css';

const SectorsContainer = (props) => (
  <div className="SectorsContainer">
  { props.text.map((section) => {
    return (
      <div className={section.header}>
      <TextTable
        location={props.location}
        key={section.header}
        fadeIn={props.fadeIn}
        currentDetails={props.currentDetails}
        text={ section } />
      </div>
    )
  })}
  </div>
)

export default SectorsContainer;

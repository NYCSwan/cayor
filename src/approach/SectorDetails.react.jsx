import React from 'react';
// import PageDetails from '../layout/pageDetails.react';
import TextTable from '../layout/text-table.react';

const SectorsContainer = (props) => (
  <div className="SectorsContainer">
  { props.text.map(section => {
    <TextTable
      fadeIn={props.fadeIn}
      currentDetails={props.currentDetails}
      text={ section } />
  })}
  </div>
)

export default SectorsContainer;

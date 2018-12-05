import React from 'react';
// import { Fade } from 'reactstrap';
import TextTable from './text-table.react';
import './text-table-container.css';

const TextTableContainer = props => (
  <div className="text-table-container">
    {props.mainHeader ? (
      <h4 className="header left">{props.mainHeader}</h4>
    ) : null}
    <TextTable
      location={props.location}
      fadeIn={props.fadeIn}
      text={props.text[props.currentDetailIdx]}
    />
  </div>
);

export default TextTableContainer;

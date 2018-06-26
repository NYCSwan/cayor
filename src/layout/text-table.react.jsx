import React from 'react';
import { Fade } from 'reactstrap';

import './text-table.css';

const TextTable = (props) => (
  <Fade in={props.fadeIn} className="text-table">
    <img src={props.text.image} alt={props.text.header}/>
    <h4>{props.text.header}</h4>
    <ul>
      {props.text.details.map(detail => {
        return <li key={detail.dKey}>{detail.text}</li>
      })}
    </ul>
  </Fade>
)
export default TextTable;

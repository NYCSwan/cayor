import React from 'react';
import { Fade } from 'reactstrap';

import './text-table.css';

const TextTable = (props) => (
  <Fade in={props.fadeIn} className={props.text.template ? `text-table ${props.text.template}` : 'text-table'}>
    <div className='headerContainer'>
      { props.text.image ?
        <img
          src={props.text.image}
          alt={props.text.header}
          className='headerImg' />
        : null
      }
      <h4>{props.text.header.toUpperCase()}</h4>
    </div>
    <ul>
      {props.text.details.map(detail => {
        return (
          <li
            key={detail.dKey}
            className={detail.style}>
            {detail.style === 'subHeader' ? detail.text.toUpperCase() : detail.text}
          </li>
        )
      })}
    </ul>
  </Fade>
)
export default TextTable;

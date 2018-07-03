import React from 'react';
// import { Fade } from 'reactstrap';
import TextTable from './text-table.react';
import Button from './button.react';
import './text-table-container.css';

const TextTableContainer = (props) => (
  <div className="text-table-container">
    {props.mainHeader ?
      <h4 className='header left'>{props.mainHeader}</h4>
      : null
    }
      <TextTable
        location={props.location}
        fadeIn={props.fadeIn}
        text={props.text[props.currentDetailIdx]}/>
      {props.text.length > 1 &&
        <div>
          <Button
            style={"button next interior"}
            handleClick={props.handleButtonClick}
            value='Next'
            text='>>' />
        </div>
      }
  </div>
)

export default TextTableContainer;

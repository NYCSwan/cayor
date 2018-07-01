import React from 'react';
import './button.css';

const Button = (props) => (
  <button
    className={props.style || 'button'}
    onClick={props.handleClick}
    value={props.value}>
    {props.text}
  </button>
)
export default Button;

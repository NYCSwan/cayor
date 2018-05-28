import React from 'react';

const Button = (props) => (
  <button
    onClick={props.handleClick}
    value={props.value}>
    {props.text}
  </button>
)
export default Button;

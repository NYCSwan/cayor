import React from 'react';
import './longform_text_container.css';

const LongFormTextContainer = (props) => (
  <div className='page container'>
    long form text here
    <h4 className{props.style || 'subHeader'}>{props.text.header}</h4>
    {props.children}
  </div>
)

export default LongFormTextContainer;

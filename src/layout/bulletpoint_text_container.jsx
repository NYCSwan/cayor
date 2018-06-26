import React from 'react';
import './bulletpoint_text_container.css';

const BulletPointTextContainer = (props) => (
  <div className='page container'>
    bullet points here
    {
      props.currentDetails.map(currentDetail => {
        <h4> {currentDetail.header} </h4>
        <ul>
        {
          currentDetail.details.map(text => {
            <li key={text.dKey}> {text.text} </li>
          })
        }
        </ul>
      })
    }
  </div>
)

export default BulletPointTextContainer;

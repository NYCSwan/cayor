import React from 'react';
import './slide_key_item.css';

const SlideKeyItem = (props) => (
    <div className='container'>
    {(props.active === props.slide)
    ?
      <div
        className={`slide${props.slide} active`}/>
    :
    <div
      className={`slide${props.slide}`}/>
    }
    </div>
);

export default SlideKeyItem;

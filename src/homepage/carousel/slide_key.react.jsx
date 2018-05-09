import React from 'react';
import SlideKeyItem from './slide_key_item.react';
import './slide_key.css';

const SlideKey = (props) => (
  <div className='image-keys'>
    <SlideKeyItem
      slide={0}
      active={props.activeSlide} />
    <SlideKeyItem
        slide={1}
        active={props.activeSlide} />
    <SlideKeyItem
      slide={2}
      active={props.activeSlide} />
  </div>
);


export default SlideKey;

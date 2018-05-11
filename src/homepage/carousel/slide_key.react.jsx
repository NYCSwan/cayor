import React from 'react';
import SlideKeyItem from './slide_key_item.react';
import './slide_key.css';

const SlideKey = (props) => (
  <div className='image-keys'>
    <SlideKeyItem
      key={0}
      slide={0}
      active={props.activeSlide} />
    <SlideKeyItem
      key={1}
      slide={1}
      active={props.activeSlide} />
    <SlideKeyItem
      key={2}
      slide={2}
      active={props.activeSlide} />
  </div>
);


export default SlideKey;

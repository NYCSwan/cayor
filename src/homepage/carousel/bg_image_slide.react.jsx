import React from 'react';
import './image_slide.css';

const BgImageSlide = (props) => (
      <div className={`image-slide ${props.url}`}>
          <div className='banner'>{props.slideText}</div>
      </div>
    );


export default BgImageSlide;

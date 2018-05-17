import React from 'react';
import './bg_image_slide.css';
import Footer from '../../layout/footer.react';
import Navigation from '../../navigation/navigation.react';

const BgImageSlide = (props) => (
      <div
        className={`image-slide ${props.url}`} onChange={props.handlePageTransition}>
        <Navigation
          history={props.history}
          location={props.location}
          handleClick={props.handleClick} />
        <div
          className='banner'>{props.slideText}</div>
        <Footer />
      </div>
    );


export default BgImageSlide;

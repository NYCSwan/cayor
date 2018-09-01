import React from 'react';
import BgImageSlide from './carousel/bg_image_slide.react';
import './homepage.css';
import Navigation from '../navigation/navigation.react';

const Homepage = props => (
  <div className="homepage">
    <Navigation
      history={props.history}
      location={props.location}
      handleClockClick={props.handleClockClick}
      headerImg="homepage"
    />
    <BgImageSlide height={props.height} width={props.width} />
  </div>
);

export default Homepage;

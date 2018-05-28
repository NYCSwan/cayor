import React from 'react';
// import Carousel from './carousel/carousel.react';
import BgImageSlide from './carousel/bg_image_slide.react';
// import SlideKey from './carousel/slide_key.react';
import './homepage.css';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';

const Homepage = (props) => (

  <div
    className="homepage">
    <Navigation
      history={props.history}
      location={props.location}
      handleClick={props.handleClick} />
    <BgImageSlide />
    <Footer />
  </div>
)

export default Homepage;

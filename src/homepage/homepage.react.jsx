import React from 'react';
// import Carousel from './carousel/carousel.react';
import BgImageSlide from './carousel/bg_image_slide.react';
// import SlideKey from './carousel/slide_key.react';
import './homepage.css';
// import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';

const Homepage  = (props) => (
  // componentWillMount() {
  //   preloadSlide();
  // }

  // preloadSlide = () => {
  //   return <BgImageSlide />
  // }
  //
  // render() {
  //   return (

      <div
        className="homepage">
        <Navigation
          history={props.history}
          location={props.location}
          handleClockClick={props.handleClockClick}
          headerImg='homepage' />
        <BgImageSlide />
      </div>
    )
//   }
// }


export default Homepage;

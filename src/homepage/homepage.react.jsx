import React, {Component} from 'react';
// import Carousel from './carousel/carousel.react';
import BgImageSlide from './carousel/bg_image_slide.react';
// import SlideKey from './carousel/slide_key.react';
import './homepage.css';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';

class Homepage extends Component {
  // componentWillMount() {
  //   this.preloadSlide();
  // }

  // preloadSlide = () => {
  //   return <BgImageSlide />
  // }

  render() {
    return (

      <div
        className="homepage">
        <Navigation
          history={this.props.history}
          location={this.props.location}
          handleClick={this.props.handleClick} />
        <BgImageSlide />
        <Footer />
      </div>
    )
  }
}


export default Homepage;

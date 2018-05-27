import React, { Component } from 'react';
// import Carousel from './carousel/carousel.react';
import BgImageSlide from './carousel/bg_image_slide.react';
import SlideKey from './carousel/slide_key.react';
import './homepage.css';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';
class Homepage extends Component {
  state = {
    currentImageIdx: 0,
    imageUrls: ['accra', 'joburg', 'lagos'],
    slideText: ['Text 1', 'Text 2', 'Text 3']
  }

  // componentWillMount() {

  //   console.log('componentDidMount');
  //   this.triggerCarouselSider();
  // }
  //
  // componentWillUnmount() {
  //   console.log(' component will unmount');
  //   clearInterval(this.slider);
  // }
  //
  // renderSpinner() {
  //   return (
  //     <div>spinner</div>
  //   )
  // }

  // triggerCarouselSider = () => {
  //   console.log('trigger carousel');
  //   this.slider = setInterval(
  //     () => this.rotateCarouselIndex(),
  //     10000
  //   );
  // }
  //
  // rotateCarouselIndex = () => {
  //   console.log('rotateCarouselIndex');
  //   const {imageUrls, currentImageIdx } = this.state;
  //   // const {currentImageIdx} = this.props;
  //   const maxIndex = imageUrls.length -1;
  //   const nextIndex = currentImageIdx +1;
  //
  //   if (currentImageIdx === maxIndex) {
  //     this.setState({
  //       currentImageIdx: 0
  //     })
  //   } else {
  //     this.setState({
  //       currentImageIdx: nextIndex
  //     })
  //   }
  // }

  render() {
    // const { currentImageIdx } = this.props;
    const { currentImageIdx, imageUrls, slideText } = this.state;
    const url = imageUrls[currentImageIdx];

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
    );
  }
}

export default Homepage;

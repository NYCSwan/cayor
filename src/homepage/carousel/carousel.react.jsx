import React, { Component } from 'react';
import BgImageSlide from './bg_image_slide.react';
import SlideKey from './slide_key.react';

class Carousel extends Component {
  state = {
    currentImageIdx: 0
  }

  render() {
    const { imageUrls, slideText } = this.props;
    const { currentImageIdx } = this.state;

    return (
      <div className="carousel">
          <BgImageSlide
            url={imageUrls[currentImageIdx]} key={currentImageIdx}
            slideText={slideText[currentImageIdx]} />
          <SlideKey
            activeSlide={this.state.currentImageIdx} />
      </div>
    );
  }
}

export default Carousel;

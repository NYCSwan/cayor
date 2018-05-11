import React, { Component } from 'react';
import Carousel from './carousel/carousel.react';

class Homepage extends Component {
  state = {
    imageUrls: ['accra', 'joburg', 'lagos'],
    slideText: ['Text 1', 'Text 2', 'Text 3']
  }


  render() {
    // <div className="homepage">
    // </div>
    return (

          <Carousel
            imageUrls={this.state.imageUrls}
            slideText={this.state.slideText} />
    );
  }
}

export default Homepage;

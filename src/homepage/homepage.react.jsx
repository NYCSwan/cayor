import React, { Component } from 'react';
import Carousel from './carousel/carousel.react';

class Homepage extends Component {
  state = {
    imageUrls: ['accra', 'joburg', 'lagos'],
    slideText: ['Text 1', 'Text 2', 'Text 3']
  }
  
  render() {
    return (
      <div className="homepage">
        <Carousel imageUrls={this.state.imageUrls}
        slideText={this.state.slideText}/>
      </div>
    );
  }
}

export default Homepage;

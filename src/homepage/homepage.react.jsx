import React, { Component } from 'react';
// import Carousel from './carousel/carousel.react';
import BgImageSlide from './carousel/bg_image_slide.react';
import SlideKey from './carousel/slide_key.react';
import './homepage.css';

class Homepage extends Component {
  state = {
    currentImageIdx: 0,
    imageUrls: ['accra', 'joburg', 'lagos'],
    slideText: ['Text 1', 'Text 2', 'Text 3']
  }

  componentWillMount() {
    console.log('componentDidMount');
    this.triggerCarouselSider();
    // this.props.handlePageTransition;
  }

  componentWillUnmount() {
    console.log(' component will unmount');
    clearInterval(this.slider);
  }

  componentWillAppear() {
    console.log('component will appear');
    this.renderCarousel()
    // this.triggerCarouselSider();
  }

  renderSpinner() {
    return (
      <div>spinner</div>
    )
  }

  // renderCarousel() {
  //   return (
  //     <Carousel
  //     imageUrls={this.state.imageUrls}
  //     slideText={this.state.slideText} />
  //   )
  // }

  triggerCarouselSider = () => {
    console.log('trigger carousel');
    this.slider = setInterval(
      () => this.rotateCarouselIndex(),
      10000
    );
  }

  rotateCarouselIndex = () => {
    console.log('rotateCarouselIndex');
    const { currentImageIdx, imageUrls } = this.state;
    const maxIndex = imageUrls.length -1;
    const nextIndex = currentImageIdx +1;

    if (currentImageIdx === maxIndex) {
      this.setState({
        currentImageIdx: 0
      })
    } else {
      this.setState({
        currentImageIdx: nextIndex
      })
    }
  }

  render() {
    // const {  handlePageTransition } = this.props;
    const { imageUrls, slideText, currentImageIdx } = this.state;
    const url = imageUrls[currentImageIdx];
    // render() {
    //   return (
    //     <div className="homepage">
    //     { this.props.showSpinner === false ?
    //       this.renderSpinner()
    //       :
    //       this.renderCarousel()
    //       }
    //     </div>
    //   );
    // }
    return (
      <div
        className="slide">
        <BgImageSlide
          url={url}
          key={currentImageIdx}
          history={this.props.history}
          location={this.props.location}
          handleClick={this.handleClick}
          handlePageTransition={this.handlePageTransition}
          slideText={slideText[currentImageIdx]} />
        <SlideKey
          key={url}
          activeSlide={this.state.currentImageIdx} />
      </div>
    );
  }
}

export default Homepage;

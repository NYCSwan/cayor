import React, { Component } from 'react';
// import { CSSTransition } from 'react-transition-group';
// import Footer from '../../layout/footer.react';
// import Navigation from '../../navigation/navigation.react';
import BgImageSlide from './bg_image_slide.react';
import SlideKey from './slide_key.react';

class Carousel extends Component {
  state = {
    currentImageIdx: 0
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.triggerCarouselSider();
    // this.props.handlePageTransition;
  }

  componentWillUnmount() {
    console.log(' component will unmount');
    clearInterval(this.slider);
  }

  triggerCarouselSider = () => {
    console.log('trigger carousel');
    this.slider = setInterval(
      () => this.rotateCarouselIndex(),
      10000
    );
  }

  rotateCarouselIndex = () => {
    console.log('rotateCarouselIndex');
    const { currentImageIdx } = this.state;
    const maxIndex = this.props.imageUrls.length -1;
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
    const { imageUrls, slideText, handlePageTransition } = this.props;
    const { currentImageIdx } = this.state;
    const url = imageUrls[currentImageIdx];
// debugger
// <CSSTransitionGroup
//   transitionName='carousel'
//   transitionEnterTimeout={1000}
//   transitionLeaveTimeout={1000}
//   className='homepage'>
// </CSSTransitionGroup>

// <div className="carousel">
// </div>
// <CSSTransition>
// </CSSTransition>
    return (
      <div
        className="slide">
        <BgImageSlide
          url={url}
          key={currentImageIdx}
          history={this.props.history}
          location={this.props.location}
          handleClick={this.props.handleClick}
          handlePageTransition={handlePageTransition}
          slideText={slideText[currentImageIdx]} />
        <SlideKey
          key={url}
          activeSlide={this.state.currentImageIdx} />
      </div>
    );
  }
}

export default Carousel;

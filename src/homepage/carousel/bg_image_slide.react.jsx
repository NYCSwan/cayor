import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './bg_image_slide.css';

import Slide1 from '../../media/slide1c.jpg';
import Slide2 from '../../media/anastasia.jpg';
import Slide3 from '../../media/slide3c.jpeg';

const items = [
  {
    src: Slide1,
    altText: 'We are a principal investment firm focused on investing in high growth sectors in select sub-Saharan African countries.',
    caption: 'We are a principal investment firm focused on investing in high growth sectors in select sub-Saharan African countries.',
    header: 'Invested In Africa.'
  },
  {
    src: Slide2,
    altText: 'We are driven and entrepreneurial, and leverage the team’s combined 30-year track record investing in Africa to generate superior risk-adjusted returns for our investor partners.',
    caption: 'We are driven and entrepreneurial and leverage the team’s combined 30-year track record investing in Africa to generate superior risk-adjusted returns for our investor partners.',
    header: 'Building New Platforms In Africa\'s Middle Markets.',

  },
  {
    src: Slide3,
    altText: 'The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.',
    caption: 'The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.',
    header: 'Deep African Expertise. Consistent Sustainable Value.'
  }
];

class BgImageSlide extends Component {
  state = {
    activeIndex: 0
  }

  // componentDidMount() {
  //   this.animating()
  // }
  //
  onExiting = () => {
    this.animating = true;
    debugger;
  }

  onExited = () => {
    this.animating = false;

  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {items.map((item) => {
            return (
              <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={item.src}
              >
                <div className='overlay'>
                  <img src={item.src} alt={item.altText} className='backgroundImage'/>
                </div>
                <CarouselCaption captionText={item.caption} captionHeader={item.header} />
              </CarouselItem>
            )
          })}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default BgImageSlide;

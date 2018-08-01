import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { Link } from 'react-router-dom';
// import Button from '../../layout/button.react';
import Slide2 from '../../media/anastasia.jpg';
import Slide1 from '../../media/slide3c.jpeg';
import Slide3 from '../../media/Accra.jpg';
import './bg_image_slide.css';

const items = [
  {
    src: Slide1,
    name: 'Slide1',
    altText: 'We are a principal investment firm focused on investing in high growth sectors in select sub-Saharan African countries.',
    caption: 'We are a principal investment firm focused on investing in high growth sectors in select sub-Saharan African countries.',
    header: 'Invested In Africa.'
  },
  {
    src: Slide2,
    name: 'Slide2',
    altText: 'We are driven and entrepreneurial, and leverage the team’s combined 30-year track record investing in Africa to generate superior risk-adjusted returns for our investor partners.',
    caption: 'We are driven and entrepreneurial and leverage the team’s combined 30-year track record investing in Africa to generate superior risk-adjusted returns for our investor partners.',
    header: 'Building New Platforms In Africa\'s Middle Markets.',

  },
  {
    src: Slide3,
    name: 'Slide3',
    altText: 'The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.',
    caption: 'The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.',
    header: 'Deep African Expertise. Consistent Sustainable Value.'
  }
];

class BgImageSlide extends Component {
  state = {
    activeIndex: 0,
    direction: 'prev'
  }

  componentDidMount() {
    this.animating;
  }

  onExiting = () => {
    console.log('on exiting');
    this.animating = true;
  }

  onExited = () => {
    console.log('on exited');
    this.animating = false;

  }

  next = () => {
    console.log('next');
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex, direction: 'next' });
  }

  previous = () => {
    console.log('previous');
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex, direction: 'prev' });
  }

  goToIndex = (newIndex) => {
    console.log('goToIndex');
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  // handleReadMoreClick() {
  //   console.log('handle read more click');
  //   const { activeIndex } = this.state;
  //   if (activeIndex === 0) {
  //     return this.props.history.push('/approach')
  //   } else if (activeIndex === 1) {
  //     return this.props.history.push('/opportunity')
  //   } else {
  //     return this.props.history.push('/esg')
  //   }
  // }

  renderLink(item) {
    // const { activeIndex } = this.state;
    // const { match } = this.props;

    if (item === 'Slide1') {
      return (
        <div className='linkContainer'>
        <Link className='link' to={`/approach`} replace>READ MORE</Link>
        </div>
      )
    } else if (item === 'slide2') {
      return (
        <div className='linkContainer'>
      <Link className='link' to={`/opportunity`} replace>READ MORE</Link>
      </div>
      )
    } else {
      return (
        <div className='linkContainer'>
        <Link className='link' to={`/esg`} replace>READ MORE</Link>
        </div>
      )
    }

  }

  render() {
    const { activeIndex } = this.state;
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div className='overlay'>
            <img src={item.src} alt={item.altText} className={`backgroundImage ${item.name}`}/>
          </div>
          <CarouselCaption captionText={item.caption} captionHeader={item.header} />
          {this.renderLink(item.name)}
        </CarouselItem>
      )
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        ride='carousel'>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
        <CarouselControl
          direction="prev"
          onClickHandler={this.previous} />
        <CarouselControl
          direction="next"
          onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default BgImageSlide;

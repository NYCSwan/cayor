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
import Slide1 from '../../media/slide1c.jpg';
import Slide2 from '../../media/anastasia.jpg';
import Slide3 from '../../media/slide3c.jpeg';
import './bg_image_slide.css';

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
  // constructor(props) {
  //   super(props);
  //   this.state = { activeIndex: 0 };
  //   this.next = this.next.bind(this);
  //   this.previous = this.previous.bind(this);
  //   this.goToIndex = this.goToIndex.bind(this);
  //   this.onExiting = this.onExiting.bind(this);
  //   this.onExited = this.onExited.bind(this);
  // }
  //
  // onExiting() {
  //   this.animating = true;
  // }
  //
  // onExited() {
  //   this.animating = false;
  // }
  //
  // next() {
  //   if (this.animating) return;
  //   const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
  //   this.setState({ activeIndex: nextIndex });
  // }
  //
  // previous() {
  //   if (this.animating) return;
  //   const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
  //   this.setState({ activeIndex: nextIndex });
  // }
  //
  // goToIndex(newIndex) {
  //   if (this.animating) return;
  //   this.setState({ activeIndex: newIndex });
  // }

  state = {
    activeIndex: 0,
    direction: 'left'
  }

  // componentDidMount() {
  //   this.animating()
  // }
  //
  onExiting = () => {
    console.log('on exiting');
    this.animating = true;
  }

  onExited = () => {
    console.log('on exited');
    this.animating = false;

  }

  handleNext = () => {
    console.log('next');
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex, direction: 'right' });
  }

  handlePrevious = () => {
    console.log('previous');
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex, direction: 'left' });
  }

  goToIndex = (newIndex) => {
    console.log('goToIndex');
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  handleReadMoreClick() {
    console.log('handle read more click');
    const { activeIndex } = this.state;
    if (activeIndex === 0) {
      return this.props.history.push('/approach')
    } else if (activeIndex === 1) {
      return this.props.history.push('/opportunity')
    } else {
      return this.props.history.push('/esg')
    }
  }

  renderLink() {
    const { activeIndex } = this.state;
    // const { match } = this.props;

    if (activeIndex === 0) {
      return (
        <ul>
          <li><Link to={`/approach`} replace>READ MORE</Link></li>
        </ul>
      )
    } else if (activeIndex === 1) {
      return (
        <ul>
          <li><Link to={`/opportunity`} replace>READ ME</Link></li>
        </ul>
      )
    } else {
      return (
        <ul>
          <li><Link to={`/esg`} replace>READ ME</Link></li>
        </ul>
      )
    }

  }

  render() {
    const { activeIndex } = this.state;

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.handleNext}
        previous={this.handlePrevious}
        ride='carousel'>
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
          {/* this.renderLink() */}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.handlePrevious} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.handleNext} />
      </Carousel>
    );
  }
}

export default BgImageSlide;

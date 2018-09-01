import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { Link } from 'react-router-dom';
// import Button from '../../layout/button.react';
import Slide1 from '../../media/slide1Cropped.jpeg';
import Slide2 from '../../media/anastasiaCropped.jpeg';
import Slide3 from '../../media/Accra.jpg';
import Slide1Mobile from '../../media/slide1Mobile.jpeg';
import Slide2Mobile from '../../media/slide2Mobile.jpeg';
import Slide3Mobile from '../../media/slide3Mobile.jpeg';
import Slide1Tablet from '../../media/slide1Mobile.jpeg';
import Slide2Tablet from '../../media/slide2Mobile.jpeg';
import Slide3Tablet from '../../media/slide3Mobile.jpeg';
import './bg_image_slide.css';

const items = [
  {
    src: [Slide1, Slide1Mobile, Slide1Tablet],
    name: 'Slide1',
    altText:
      'We are a principal investment firm focused on investing in high growth sectors in select sub-Saharan African countries.',
    caption:
      'We are a principal investment firm focused on investing in high growth sectors in select sub-Saharan African countries.',
    header: 'Invested In Africa.',
  },
  {
    src: [Slide2, Slide2Mobile, Slide2Tablet],
    name: 'Slide2',
    altText:
      'We are driven and entrepreneurial, and leverage the team’s combined 30-year track record investing in Africa to generate superior risk-adjusted returns for our investor partners.',
    caption:
      'We are driven and entrepreneurial and leverage the team’s combined 30-year track record investing in Africa to generate superior risk-adjusted returns for our investor partners.',
    header: "Building New Platforms In Africa's Middle Markets.",
  },
  {
    src: [Slide3, Slide3Mobile, Slide3Tablet],
    name: 'Slide3',
    altText:
      'The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.',
    caption:
      'The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.',
    header: 'Deep African Expertise. Consistent Sustainable Value.',
  },
];

class BgImageSlide extends Component {
  state = {
    activeIndex: 0,
    direction: 'prev',
    deviceIdx: null,
  };

  componentDidMount() {
    this.updateDimensions();
  }

  componentWillUnmount() {
    this.animating = false;
  }

  updateDimensions = () => {
    // debugger;
    if (this.props.width <= 490) {
      this.setState({ deviceIdx: 1 });
    } else if (this.props.width >= 780 || this.props.width < 1025) {
      this.setState({ deviceIdx: 2 });
    } else {
      this.setState({ deviceIdx: 0 });
    }
  };

  // updateImageDimensions = () => {
  //   if (window.innerHeight < 700) {
  //   }
  // };

  onExiting = () => {
    console.log('on exiting');
    this.animating = true;
  };

  onExited = () => {
    console.log('on exited');
    this.animating = false;
  };

  next = () => {
    console.log('next');
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex, direction: 'next' });
  };

  previous = () => {
    console.log('previous');
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex, direction: 'prev' });
  };

  goToIndex = newIndex => {
    console.log('goToIndex');
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

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
    console.log('renderLink');
    if (item === 'Slide1') {
      return (
        <div className="linkContainer">
          <Link className="link" to={`/approach`} replace>
            READ MORE
          </Link>
        </div>
      );
    } else if (item === 'slide2') {
      return (
        <div className="linkContainer">
          <Link className="link" to={`/opportunity`} replace>
            READ MORE
          </Link>
        </div>
      );
    } else {
      return (
        <div className="linkContainer">
          <Link className="link" to={`/esg`} replace>
            READ MORE
          </Link>
        </div>
      );
    }
  }

  render() {
    const { activeIndex, deviceIdx } = this.state;
    const { height, width } = this.props;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src[deviceIdx]}
        >
          <img
            style={{ height: height }}
            src={item.src[deviceIdx]}
            alt={item.altText}
            className={`backgroundImage ${item.name}`}
          />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.header}
          />
          {this.renderLink(item.name)}
        </CarouselItem>
      );
    });
    // ride='carousel'
    return (
      <Carousel
        interval={10000}
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        style={{ height: height }}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl direction="prev" onClickHandler={this.previous} />
        <CarouselControl direction="next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default BgImageSlide;

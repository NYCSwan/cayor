import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import { Link } from "react-router-dom";
import "./bg_image_slide.css";

class BgImageSlide extends Component {
  state = {
    activeIndex: 0,
    direction: "prev"
  };

  shouldComponentUpdate(nextState, nextProps) {
    return (
      this.props.width !== nextProps.width ||
      this.props.deviceIdx !== nextProps.deviceIdx
    );
  }

  componentWillUnmount() {
    this.animating = false;
  }

  onExiting = () => {
    // console.log('on exiting');
    this.animating = true;
  };

  onExited = () => {
    // console.log('on exited');
    this.animating = false;
  };

  next = () => {
    // console.log('next');
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.props.items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex, direction: "next" });
  };

  previous = () => {
    // console.log('previous');
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex, direction: "prev" });
  };

  goToIndex = newIndex => {
    // console.log('goToIndex');
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    // console.log('render bg image');
    const { activeIndex } = this.state;
    const { deviceIdx, items } = this.props;
    // debugger;
    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src[deviceIdx]}
        >
          <img
            src={item.src[deviceIdx]}
            alt={item.altText}
            className={`backgroundImage ${item.name}`}
          />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.header}
          />
          <Link className={`link ${item.name}`} to={item.link} replace>
            READ MORE
          </Link>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        interval={10000}
        ride="carousel"
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
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

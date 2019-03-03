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
      this.state.activeIndex !== nextState.activeIdx
    );
  }

  // componentDidMount() {
  //   this.animating = true;
  // }

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
    const { items } = this.props;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.header}
          />
          <Link className={`link ${item.name}`} to={{
            pathname: "/approach",
            state: {
              id: "cayor_approach cayor_approach",
              transitionKey: "approach no-link",
              interiorTransitionKey: "cayor_approach"
            }
          }}>
            READ MORE
          </Link>
          <img
            src={item.src}
            alt={item.altText}
            className={`backgroundImage ${item.name}`}
            />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        interval={9500}
        ride={"carousel"}
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

import React, { Component } from 'react';
import Slide1Mobile from "../media/slide1Mobile.jpg";
import Slide2Mobile from "../media/slide2Mobile.jpg";
import Slide3Mobile from "../media/slide3Mobile.jpg";
import Slide1Tablet from "../media/slide1Tablet.jpeg";
import Slide2Tablet from "../media/Slide2Tablet.jpeg";
import Slide3Tablet from "../media/slide3Tablet.jpg";
import BgImageSlide from "../homepage/carousel/bg_image_slide.react";
import "../homepage/homepage.css";

const items = {
   1: [
  {
  src: Slide1Mobile,
  name: "Slide1",
  altText:
    "We are a principal investment firm focused on investing in high growth sectors in select sub-Saharan African countries",
  caption:
    "We are a principal investment firm focused on investing in high growth sectors\nin select sub-Saharan African countries",
  header: "Invested In Africa",
  link: "/approach",
  key: "approach no-link",
  url: "cayor_approach cayor_approach",

  },
  {
  src: Slide2Mobile,
  name: "Slide2",
  altText:
    "We are driven and entrepreneurial, and leverage the team’s combined 30-year track record investing in Africa to generate superior risk-adjusted returns for our investor partners.",
  caption:
    "We are driven and entrepreneurial and\nleverage the team’s combined 30-year track record investing in Africa\nto generate superior risk-adjusted returns for our investor partners.",
  header: `Building New Platforms\nIn Africa's Mid Markets`,
  link: "/opportunity",
  key: "cayor no-link",
  url: "why_cayor why_cayor",

  },
  {
  src: Slide3Mobile,
  name: "Slide3",
  altText:
    "The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.",
  caption:
    "The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.",
  header: `Seasoned African Investors\nGenerating Super Returns`,
  link: "/esg",
  key: "philosophy philosophy",
  url: "philosophy philosophy",

  }
], 2 : [{
    src: Slide1Tablet,
    name: "Slide1",
    altText:
      "We are a principal investment firm focused on investing in high growth sectors in select sub-Saharan African countries",
    caption:
      "We are a principal investment firm focused on investing in high growth sectors\nin select sub-Saharan African countries",
    header: "Invested In Africa",
    link: "/approach",
    key: "approach no-link",
    url: "cayor_approach cayor_approach"
  },
  {
    src: Slide2Tablet,
    name: "Slide2",
    altText:
      "We are driven and entrepreneurial, and leverage the team’s combined 30-year track record investing in Africa to generate superior risk-adjusted returns for our investor partners.",
    key: "cayor no-link",
    caption:
      "We are driven and entrepreneurial and\nleverage the team’s combined 30-year track record investing in Africa\nto generate superior risk-adjusted returns for our investor partners.",
    header: `Building New Platforms\nIn Africa's Mid Markets`,
    link: "/opportunity",
    url: "why_cayor why_cayor",

  },
  {
    src: Slide3Tablet,
    key: "philosophy philosophy",
    name: "Slide3",
    altText:
      "The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.",
    caption:
      "The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.",
    header: `Seasoned African Investors\nGenerating Super Returns`,
    link: "/esg",
    url: "philosophy philosophy",

  }]
};

class MobileHomepage extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.width !== nextProps.width ||
      this.props.deviceIdx !== nextProps.deviceIdx
    );
  }

  render() {
    console.log("render homepage");
    const { deviceIdx, width } = this.props;

    return (
      <div className="homepage">
        {width !== null && deviceIdx !== null && (
          <BgImageSlide items={items[deviceIdx]} />
        )}
      </div>
    );
  }
}

export default MobileHomepage;

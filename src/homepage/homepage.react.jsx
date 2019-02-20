import React from "react";
import BgImageSlide from "./carousel/bg_image_slide.react";
import "./homepage.css";
// import Navigation from "../navigation/navigation.react";
import Slide1 from "../media/slide1Cropped.jpg";
import Slide2 from "../media/anastasiaCropped.jpg";
import Slide3 from "../media/slide_3.jpg";
import Slide1Mobile from "../media/slide1Mobile.jpg";
import Slide2Mobile from "../media/slide3Mobile.jpg";
import Slide3Mobile from "../media/slide3Mobile.jpg";
import Slide1Tablet from "../media/slide3Tablet.jpg";
import Slide2Tablet from "../media/slide3Tablet.jpg";
import Slide3Tablet from "../media/slide3Tablet.jpg";


const items = {
    0: [
  {
    src: Slide1,
    name: "Slide1",
    altText:
      "We are a principal investment firm focused on investing in high growth sectors in select sub-Saharan African countries",
    caption:
      "We are a principal investment firm focused on investing in high growth sectors\nin select sub-Saharan African countries",
    header: "Invested In Africa",
    link: "/approach"
  },
  {
    src: Slide2,
    name: "Slide2",
    altText:
      "We are driven and entrepreneurial, and leverage the team’s combined 30-year track record investing in Africa to generate superior risk-adjusted returns for our investor partners.",
    caption:
      "We are driven and entrepreneurial and\nleverage the team’s combined 30-year track record investing in Africa\nto generate superior risk-adjusted returns for our investor partners.",
    header: `Building New Platforms\nIn Africa's Mid Markets`,
    link: "/opportunity"
  },
  {
    src: Slide3,
    name: "Slide3",
    altText:
      "The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.",
    caption:
      "The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.",
    header: `Seasoned African Investors\nGenerating Super Returns`,
    link: "/esg"
  }
], 1: [
  { src: Slide1Mobile,
  name: "Slide1",
  altText:
    "We are a principal investment firm focused on investing in high growth sectors in select sub-Saharan African countries",
  caption:
    "We are a principal investment firm focused on investing in high growth sectors\nin select sub-Saharan African countries",
  header: "Invested In Africa",
  link: "/approach"
  },
  {
  src: Slide2Mobile,
  name: "Slide2",
  altText:
    "We are driven and entrepreneurial, and leverage the team’s combined 30-year track record investing in Africa to generate superior risk-adjusted returns for our investor partners.",
  caption:
    "We are driven and entrepreneurial and\nleverage the team’s combined 30-year track record investing in Africa\nto generate superior risk-adjusted returns for our investor partners.",
  header: `Building New Platforms\nIn Africa's Mid Markets`,
  link: "/opportunity"
  },
  {
  src: Slide3Mobile,
  name: "Slide3",
  altText:
    "The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.",
  caption:
    "The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.",
  header: `Seasoned African Investors\nGenerating Super Returns`,
  link: "/esg"
  }
], 2 : [{
    src: Slide1Tablet,
    name: "Slide1",
    altText:
      "We are a principal investment firm focused on investing in high growth sectors in select sub-Saharan African countries",
    caption:
      "We are a principal investment firm focused on investing in high growth sectors\nin select sub-Saharan African countries",
    header: "Invested In Africa",
    link: "/approach"
  },
  {
    src: Slide2Tablet,
    name: "Slide2",
    altText:
      "We are driven and entrepreneurial, and leverage the team’s combined 30-year track record investing in Africa to generate superior risk-adjusted returns for our investor partners.",
    caption:
      "We are driven and entrepreneurial and\nleverage the team’s combined 30-year track record investing in Africa\nto generate superior risk-adjusted returns for our investor partners.",
    header: `Building New Platforms\nIn Africa's Mid Markets`,
    link: "/opportunity"
  },
  {
    src: Slide3Tablet,
    name: "Slide3",
    altText:
      "The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.",
    caption:
      "The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.",
    header: `Seasoned African Investors\nGenerating Super Returns`,
    link: "/esg"
  }]
};

class Homepage extends React.Component {
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
export default Homepage;

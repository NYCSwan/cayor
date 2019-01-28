import React from "react";
import BgImageSlide from "./carousel/bg_image_slide.react";
import "./homepage.css";
import Navigation from "../navigation/navigation.react";
import Slide1 from "../media/slide1Cropped.jpeg";
import Slide2 from "../media/anastasiaCropped.jpeg";
import Slide3 from "../media/slide3.jpg";
import Slide1Mobile from "../media/slide1Mobile.jpeg";
import Slide2Mobile from "../media/slide2Mobile.jpeg";
import Slide3Mobile from "../media/slide3Mobile.jpeg";
import Slide1Tablet from "../media/slide1Mobile.jpeg";
import Slide2Tablet from "../media/slide2Mobile.jpeg";
import Slide3Tablet from "../media/slide3Mobile.jpeg";

const items = [
  {
    src: [Slide1, Slide1Mobile, Slide1Tablet],
    name: "Slide1",
    altText:
      "We are a principal investment firm focused on investing in high growth sectors in select sub-Saharan African countries",
    caption:
      "We are a principal investment firm focused on investing in high growth sectors\nin select sub-Saharan African countries",
    header: "Invested In Africa",
    link: "/approach"
  },
  {
    src: [Slide2, Slide2Mobile, Slide2Tablet],
    name: "Slide2",
    altText:
      "We are driven and entrepreneurial, and leverage the team’s combined 30-year track record investing in Africa to generate superior risk-adjusted returns for our investor partners.",
    caption:
      "We are driven and entrepreneurial and\nleverage the team’s combined 30-year track record investing in Africa\nto generate superior risk-adjusted returns for our investor partners.",
    header: `Building New Platforms\nIn Africa's Mid Markets`,
    link: "/opportunity"
  },
  {
    src: [Slide3, Slide3Mobile, Slide3Tablet],
    name: "Slide3",
    altText:
      "The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.",
    caption:
      "The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.",
    header: `Seasoned African Investors\nGenerating Super Returns`,
    link: "/esg"
  }
];

class Homepage extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.width !== nextProps.width ||
      this.props.deviceIdx !== nextProps.deviceIdx ||
      this.props.isContactModalOpen !== nextProps.isContactModalOpen
    );
  }

  render() {
    console.log("render homepage");
    const {
      deviceIdx,
      width,
      history,
      location,
      handleClockClick,
      handleClose,
      isContactModalOpen
    } = this.props;

    return (
      <div className="homepage">
        <Navigation
          history={history}
          location={location}
          handleClockClick={handleClockClick}
          headerImg="homepage"
          fadeIn={true}
          handleClose={handleClose}
          isContactModalOpen={isContactModalOpen}
        />
        {width !== null && deviceIdx !== null && (
          <BgImageSlide deviceIdx={deviceIdx} items={items} />
        )}
      </div>
    );
  }
}
export default Homepage;

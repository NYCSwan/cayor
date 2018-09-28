import React from 'react';
import BgImageSlide from './carousel/bg_image_slide.react';
import './homepage.css';
import Navigation from '../navigation/navigation.react';
import Slide1 from '../media/slide1Cropped.jpeg';
import Slide2 from '../media/anastasiaCropped.jpeg';
import Slide3 from '../media/Accra.jpg';
import Slide1Mobile from '../media/slide1Mobile.jpeg';
import Slide2Mobile from '../media/slide2Mobile.jpeg';
import Slide3Mobile from '../media/slide3Mobile.jpeg';
import Slide1Tablet from '../media/slide1Mobile.jpeg';
import Slide2Tablet from '../media/slide2Mobile.jpeg';
import Slide3Tablet from '../media/slide3Mobile.jpeg';

const items = [
  {
    src: [Slide1, Slide1Mobile, Slide1Tablet],
    name: 'Slide1',
    altText:
      'We are a principal investment firm focused on investing in high growth sectors in select sub-Saharan African countries.',
    caption:
      'We are a principal investment firm focused on investing in high growth sectors in select sub-Saharan African countries.',
    header: 'Invested In Africa.',
    link: '/approach',
  },
  {
    src: [Slide2, Slide2Mobile, Slide2Tablet],
    name: 'Slide2',
    altText:
      'We are driven and entrepreneurial, and leverage the team’s combined 30-year track record investing in Africa to generate superior risk-adjusted returns for our investor partners.',
    caption:
      'We are driven and entrepreneurial and leverage the team’s combined 30-year track record investing in Africa to generate superior risk-adjusted returns for our investor partners.',
    header: "Building New Platforms In Africa's Middle Markets.",
    link: '/opportunity',
  },
  {
    src: [Slide3, Slide3Mobile, Slide3Tablet],
    name: 'Slide3',
    altText:
      'The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.',
    caption:
      'The product of our experience over time is a consistent, disciplined and value added methodology that has yielded attractive investment returns.',
    header: 'Deep African Expertise. Consistent Sustainable Value.',
    link: '/esg',
  },
];

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      deviceIdx: null,
    };
  }
  componentDidMount() {
    this.updateDimensions();
  }
  componentDidUpdate(prevProps) {
    if (this.props.width !== prevProps.width) {
      this.updateDimensions();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.width !== nextProps.width ||
      this.state.deviceIdx !== nextState.deviceIdx
    );
  }

  updateDimensions = () => {
    console.log('update dimensions');
    if (this.props.width === null) {
      return;
    } else if (this.props.width <= 490 && this.props.width > 0) {
      this.setState({ deviceIdx: 1 });
    } else if (this.props.width >= 780 && this.props.width <= 1024) {
      this.setState({ deviceIdx: 2 });
    } else {
      this.setState({ deviceIdx: 0 });
      console.log('deviceIdx 0', this.props.width);
    }
  };

  render() {
    console.log('render homepage');
    const { deviceIdx } = this.state;

    return (
      <div className="homepage">
        <Navigation
          history={this.props.history}
          location={this.props.location}
          handleClockClick={this.props.handleClockClick}
          headerImg="homepage"
          fadeIn={true}
          handleClose={this.props.handleClose}
          isContactModalOpen={this.props.isContactModalOpen}
        />
        {this.props.width !== null &&
          deviceIdx !== null && (
            <BgImageSlide deviceIdx={deviceIdx} items={items} />
          )}
      </div>
    );
  }
}
export default Homepage;

import React from 'react';
import BgImageSlide from './carousel/bg_image_slide.react';
import './homepage.css';
import Navigation from '../navigation/navigation.react';

class Homepage extends React.Component {
  state = {
    deviceIdx: 2,
  };

  componentDidMount() {
    this.updateDimensions();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.width !== nextProps.width;
  }

  updateDimensions = () => {
    console.log('update dimensions');
    // debugger;
    if (this.props.width <= 490 && this.props.width > 0) {
      this.setState({ deviceIdx: 1 });
    } else if (this.props.width >= 780 && this.props.width < 1025) {
      this.setState({ deviceIdx: 2 });
    } else {
      this.setState({ deviceIdx: 0 });
      console.log('deviceIdx 0', this.props.width);
    }
  };

  render() {
    console.log('render homepage');
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
        {this.props.width !== null && (
          <BgImageSlide deviceIdx={this.state.deviceIdx} />
        )}
      </div>
    );
  }
}
export default Homepage;

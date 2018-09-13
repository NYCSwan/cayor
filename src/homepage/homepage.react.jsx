import React from 'react';
import BgImageSlide from './carousel/bg_image_slide.react';
import './homepage.css';
import Navigation from '../navigation/navigation.react';

class Homepage extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.width !== nextProps.width;
  }

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
          <BgImageSlide height={this.props.height} width={this.props.width} />
        )}
      </div>
    );
  }
}
export default Homepage;

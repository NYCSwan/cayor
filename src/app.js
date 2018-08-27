import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './App.css';
import Routes from './routes';
class App extends Component {
  state = {
    isContactModalOpen: false,
    height: null,
    width: null,
  };

  componentDidMount() {
    console.log('componentDidMount');
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    // debugger;
    this.setState({
      height,
      width,
    });
  };

  handleClick = e => {
    console.log('clock click contact', e);
    e.preventDefault();
    const { isContactModalOpen } = this.state;
    // debugger
    this.setState({
      isContactModalOpen: !isContactModalOpen,
    });
  };

  handleModalClose = () => {
    console.log('handle modal close');
    this.setState({ isContactModalOpen: false });
  };

  render() {
    const { height, width, isContactModalOpen } = this.state;
    return (
      <div className="App">
        <Routes
          className="routes"
          height={height}
          width={width}
          handleClose={this.handleModalClose}
          transitionKey={this.props.match.path}
          handleClick={this.handleClick}
          location={this.props.location}
          match={this.props.match}
          isContactModalOpen={isContactModalOpen}
        />
      </div>
    );
  }
}

export default withRouter(App);

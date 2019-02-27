import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faAlignJustify,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Routes from "./routes";

library.add(faTimes, faAlignJustify, faArrowRight);

class App extends Component {
  state = {
    isContactModalOpen: false,
    height: null,
    width: null,
    deviceIdx: -1,
    shortScreen: false
  };

  componentDidMount() {
    console.log("componentDidMount");
    const { width, height } = this.state;

    window.addEventListener("resize", this.updateDimensions);

    if (width !== null && height !== null) return;
    this.updateDimensions();

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.height !== null && prevState.height !== this.state.height) {
      this.updateDimensions();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    const height = window.innerHeight;
    const width = window.innerWidth;

    if (width === null) {
      return;
    } else if (width <= 490 && width > 0) {
      this.setState({ deviceIdx: 1, height, width }); //mobile
    } else if (width >= 760 && width <= 1024 && height >= 1000 && height <= 1366) {
      this.setState({ deviceIdx: 2, height, width }); //tablet
    } else {
      const short = height < width/2;
      this.setState({ deviceIdx: 0, height, width, shortScreen: short }); // web
      // console.log("deviceIdx 0", width);
    }
  };

  handleClick = e => {
    console.log("clock click contact", e);
    e.preventDefault();
    const { isContactModalOpen } = this.state;

    this.setState({
      isContactModalOpen: !isContactModalOpen
    });
  };

  handleModalClose = () => {
    console.log("handle modal close");
    this.setState({ isContactModalOpen: false });
  };

  render() {
    const { height, width, isContactModalOpen, deviceIdx, shortScreen } = this.state;
    return (
      <div className="App">
        <Routes
          height={height}
          width={width}
          smoosh={shortScreen}
          handleClose={this.handleModalClose}
          transitionKey={this.props.match.path}
          handleClick={this.handleClick}
          location={this.props.location}
          match={this.props.match}
          isContactModalOpen={isContactModalOpen}
          deviceIdx={deviceIdx}
        />
        <div
          className={`shaddow ${isContactModalOpen}`}
          onClick={this.handleModalClose}
        />
      </div>
    );
  }
}

export default withRouter(App);

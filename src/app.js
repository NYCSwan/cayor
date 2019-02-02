import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faAlignJustify,
  faLongArrowAltRight
} from "@fortawesome/free-solid-svg-icons";
// import { faArrowAltCircleDown } from "@fortawesome/fontawesome-free-regular";

import "./App.css";
import Routes from "./routes";

library.add(faTimes, faAlignJustify, faLongArrowAltRight);

class App extends Component {
  state = {
    isContactModalOpen: false,
    height: null,
    width: null,
    deviceIdx: -1
  };

  componentDidMount() {
    console.log("componentDidMount");
    const { width, height } = this.state;
    if (width !== null && height !== null) return;
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
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
      this.setState({ deviceIdx: 1 });
    } else if (width >= 780 && width <= 1024) {
      this.setState({ deviceIdx: 2 });
    } else {
      this.setState({ deviceIdx: 0 });
      console.log("deviceIdx 0", width);
    }

    this.setState({
      height,
      width
    });
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
    const { height, width, isContactModalOpen, deviceIdx } = this.state;
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

import React, { Component } from "react";
import { Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import createHistory from "history/createBrowserHistory";
import Root from "./root.react";
import MobileRoot from "./mobileRoot.react";

import "./routes.css";

const history = createHistory();

class Routes extends Component {
  state = {
    slideIn: true,
    showTest: false
  };

  componentDidMount() {
    console.log("routes mounted");
    this.setState({ slideIn: false });
  }

  render() {
    const {
      handleClick,
      isContactModalOpen,
      height,
      width,
      handleClose,
      deviceIdx,
      smoosh,
      location
    } = this.props,
    timeout = { enter: 1200, exit: 1000 };
    const defaultLocation = location.pathname.slice(1).split('/')[0];
    // debugger;
    return (
      <Route
        history={history}
        render={({ location }) => (
          <TransitionGroup
            className="router"
          >
            <CSSTransition
              classNames="slide"
              timeout={timeout}
              key={location.state ? location.state.transitionKey : defaultLocation}
              in={true}
              mountOnEnter
              unmountOnExit
            >
            {this.props.deviceIdx === 0 ?
              <Root
                handleClick={handleClick}
                isContactModalOpen={isContactModalOpen}
                height={height}
                width={width}
                handleClose={handleClose}
                deviceIdx={deviceIdx}
                location={location}
                history={history}
                smoosh={smoosh}
              />
            :
              <MobileRoot
                handleClick={handleClick}
                isContactModalOpen={isContactModalOpen}
                height={height}
                width={width}
                handleClose={handleClose}
                deviceIdx={deviceIdx}
                location={location}
                history={history}
              />
            }
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default Routes;

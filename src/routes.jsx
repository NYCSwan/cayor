import React, { Component } from "react";
import { Switch, Route, Router } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import createHistory from "history/createBrowserHistory";
import Navigation from "./navigation/navigation.react";
import Footer from "./layout/footer.react";
import Homepage from "./homepage/homepage.react";
import People from "./people/people.react";
import Opportunities from "./opportunity/opportunity.react";
import Approach from "./approach/approach.react";
import Esg from "./esg/esg.react";

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
        fadeIn
      } = this.props,
      timeout = { enter: 1200, exit: 800 },
      currentKey = this.props.location.pathname.split("/")[1] || "/";

    return (
      <Router history={history}>
        <Route
          render={({ location }) => (
            // <div>
            <TransitionGroup
              className="router"
              childFactory={child =>
                React.cloneElement(child, {
                  classNames: "slide",
                  timeout: timeout
                })
              }
            >
              <CSSTransition
                classNames="slide"
                timeout={timeout}
                key={currentKey}
                in={fadeIn}
                mountOnEnter
                unmountOnExit
              >
                <div className="root-container">
                  <Navigation
                    fadeIn={fadeIn}
                    headerImg={
                      location.pathname.split("/")[1] === ""
                        ? "homepage"
                        : location.pathname.split("/")[1]
                    }
                    history={history}
                    location={location}
                    handleClose={handleClose}
                    isContactModalOpen={isContactModalOpen}
                    handleClockClick={handleClick}
                  />
                  <Switch location={location}>
                    <Route
                      exact
                      path="/"
                      render={routeProps => {
                        // eslint-disable-line
                        return (
                          <Homepage
                            handleClose={handleClose}
                            handleClockClick={handleClick}
                            isContactModalOpen={isContactModalOpen}
                            height={height}
                            width={width}
                            deviceIdx={deviceIdx}
                            {...routeProps}
                          />
                        );
                      }}
                    />
                    <Route
                      path="/people"
                      render={routeProps => {
                        // eslint-disable-line
                        return (
                          <People
                            handleClose={handleClose}
                            handleClockClick={handleClick}
                            isContactModalOpen={isContactModalOpen}
                            height={height}
                            width={width}
                            {...routeProps}
                          />
                        );
                      }}
                    />
                    <Route
                      path="/opportunity"
                      render={routeProps => {
                        // eslint-disable-line
                        return (
                          <Opportunities
                            handleClose={handleClose}
                            handleClockClick={handleClick}
                            isContactModalOpen={isContactModalOpen}
                            height={height}
                            width={width}
                            {...routeProps}
                          />
                        );
                      }}
                    />
                    <Route
                      path="/approach"
                      render={routeProps => {
                        // eslint-disable-line
                        return (
                          <Approach
                            handleClose={handleClose}
                            handleClockClick={handleClick}
                            isContactModalOpen={isContactModalOpen}
                            height={height}
                            width={width}
                            {...routeProps}
                          />
                        );
                      }}
                    />
                    <Route
                      path="/esg"
                      render={routeProps => {
                        // eslint-disable-line
                        return (
                          <Esg
                            handleClose={handleClose}
                            handleClockClick={handleClick}
                            isContactModalOpen={isContactModalOpen}
                            height={height}
                            width={width}
                            {...routeProps}
                          />
                        );
                      }}
                    />
                  </Switch>
                  <Footer location={location} />
                </div>
              </CSSTransition>
            </TransitionGroup>
            // </div>
          )}
        />
      </Router>
    );
  }
}

export default Routes;

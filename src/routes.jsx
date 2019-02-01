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
    // currentImageIdx: 0,
    showTest: false
  };

  render() {
    const currentKey = this.props.location.pathname.split("/")[1] || "/";
    const timeout = { enter: 1800, exit: 800 };
    console.log("currentKey", currentKey);
    const {
      handleClick,
      isContactModalOpen,
      height,
      width,
      handleClose,
      deviceIdx
    } = this.props;

    return (
      <Router history={history}>
        <Route
          render={({ location }) => (
            <div>
              <Navigation
                fadeIn={false}
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
                  timeout={timeout}
                  key={location.key}
                  mountOnEnter
                >
                  <Switch location={location}>
                    <Route
                      exact
                      path="/"
                      // component={Homepage}
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
                      // component={PeopleRoutes}
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
                </CSSTransition>
              </TransitionGroup>
              <Footer location={location} />
            </div>
          )}
        />
      </Router>
    );
  }
}

export default Routes;

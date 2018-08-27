import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import createHistory from 'history/createBrowserHistory';

import Homepage from './homepage/homepage.react';
import People from './people/people.react';
import Opportunities from './opportunity/opportunity.react';
import Approach from './approach/approach.react';
import Esg from './esg/esg.react';

import './routes.css';

const history = createHistory();

class Routes extends Component {
  state = {
    // currentImageIdx: 0,
    showTest: false,
  };

  render() {
    const currentKey = this.props.location.pathname.split('/')[1] || '/';
    const timeout = { enter: 1850, exit: 800 };
    console.log('currentKey', currentKey);
    const {
      handleClick,
      isContactModalOpen,
      height,
      width,
      handleClose,
    } = this.props;

    return (
      <Router history={history}>
        <Route
          render={({ location }) => (
            <TransitionGroup
              className="router"
              childFactory={child =>
                React.cloneElement(child, {
                  classNames: 'slide',
                  timeout: timeout,
                })}
            >
              <CSSTransition timeout={timeout} key={location.key} mountOnEnter>
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
                          {...routeProps}
                        />
                      );
                    }}
                  />
                  <Route
                    exact
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
                    exact
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
                    exact
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
                    exact
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
          )}
        />
      </Router>
    );
  }
}

export default Routes;

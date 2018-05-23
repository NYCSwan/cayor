import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import createHistory from 'history/createBrowserHistory';

import Homepage from './homepage/homepage.react';
import People from './people/people.react';
import Opportunities from './opportunity/opportunity.react';
import Approach from './approach/approach.react';
import Esg from './esg/esg.react';

const history = createHistory();
// take out handlePageTransition={this.props.handlePageTransition}
// slideToLeft={this.props.slideToLeft}
// slideToRight={this.props.slideToRight}
// CSSTransition relies on location.

class Routes extends Component {
  state = {
    showTest: false
  }

  componentDidAppear() {
    console.log('component Did appear');
    // this.triggerCarouselSider();
  }

  componentWillLeave() {
    console.log(' component will leave');
    // clearInterval(this.slider);
  }


  render() {
  const currentKey = this.props.location.pathname.split('/')[1] || '/';
  const timeout = { enter: 10000, exit: 900 };
console.log('currentKey', currentKey);
    return (
      <Router history={history}>
        <Route
          render={({ location }) => (
            <TransitionGroup
              {...location.state}>
              <CSSTransition
                timeout={timeout}
                key={location.pathname.split('/')[1] || '/'}
                classNames='slide'
                appear={true}
                onEnter={() => {
                  this.setState({
                    showTest: true
                  })
                }}
                unmountOnExit>
                <div>
                  <Switch
                    location={location}>
                    <Route exact path="/" render={(routeProps) => { // eslint-disable-line
                      return <Homepage
                      {...routeProps}
                      handlePageTransition={this.props.handlePageTransition}
                      slideToLeft={this.props.slideToLeft}
                      slideToRight={this.props.slideToRight} /> }}
                      />
                    <Route exact path="/people" render={(routeProps) => { // eslint-disable-line
                      return <People
                        {...routeProps}
                        handlePageTransition={this.props.handlePageTransition}
                        slideToLeft={this.props.slideToLeft}
                        slideToRight={this.props.slideToRight} /> }}
                        />
                    <Route path="/opportunity" exact render={(routeProps) => { // eslint-disable-line
                      return <Opportunities
                        {...routeProps}
                        handlePageTransition={this.props.handlePageTransition}
                        slideToLeft={this.props.slideToLeft}
                        slideToRight={this.props.slideToRight} /> }}
                        />
                    <Route path="/approach" exact render={(routeProps) => { // eslint-disable-line
                      return <Approach
                      {...routeProps}
                      handlePageTransition={this.props.handlePageTransition}
                      slideToLeft={this.props.slideToLeft}
                      slideToRight={this.props.slideToRight} /> }}
                      />
                    <Route path="/esg" exact render={(routeProps) => { // eslint-disable-line
                      return <Esg
                      {...routeProps}
                      handlePageTransition={this.props.handlePageTransition}
                      slideToLeft={this.props.slideToLeft}
                      slideToRight={this.props.slideToRight} /> }}
                    />
                  </Switch>
                </div>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    )
  }
}

export default Routes;

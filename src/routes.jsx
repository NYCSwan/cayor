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
    // currentImageIdx: 0,
    showTest: false
  }
  //
  // componentWillMount() {
  //   console.log('componentDidMount');
  //   this.triggerCarouselSider();
  // }
  //
  // componentWillUnmount() {
  //   console.log(' component will unmount');
  //   clearInterval(this.slider);
  // }
  //
  // triggerCarouselSider = () => {
  //   console.log('trigger carousel');
  //   this.slider = setInterval(
  //     () => this.rotateCarouselIndex(),
  //     10000
  //   );
  // }
  //
  // rotateCarouselIndex = () => {
  //   console.log('rotateCarouselIndex');
  //   const {imageUrls } = this.state;
  //   const {currentImageIdx} = this.props;
  //   const maxIndex = imageUrls.length -1;
  //   const nextIndex = currentImageIdx +1;
  //
  //   if (currentImageIdx === maxIndex) {
  //     this.setState({
  //       currentImageIdx: 0
  //     })
  //   } else {
  //     this.setState({
  //       currentImageIdx: nextIndex
  //     })
  //   }
  // }

  render() {
  const currentKey = this.props.location.pathname.split('/')[1] || '/';
  const timeout = { enter: 500, exit: 500 };
  console.log('currentKey', currentKey);

    return (
      <Router history={history}>
        <Route
          render={({ location }) => (
            <TransitionGroup
            childFactory={child => React.cloneElement(
              child, {classNames: "slide", timeout: timeout}
            )}>
              <CSSTransition

                timeout={timeout}
                key={location.key}
                classNames='slide'

                onEntering={() => {
                  this.setState({
                    showTest: true
                  })
                }}
                onExit={() => {
                  
                  this.setState({
                    showTest: false
                  })
                }}
                mountOnEnter
                unmountOnExit>
                  <Switch
                    location={location}>
                    <Route exact path="/" render={(routeProps) => { // eslint-disable-line
                      return <Homepage
                        {...routeProps}
                        showSpinner={this.state.showTest} /> }}
                      />
                    <Route exact path="/people" render={(routeProps) => { // eslint-disable-line
                      return <People
                        {...routeProps} /> }}
                        />
                    <Route path="/opportunity" exact render={(routeProps) => { // eslint-disable-line
                      return <Opportunities
                        {...routeProps} /> }}
                        />
                    <Route path="/approach" exact render={(routeProps) => { // eslint-disable-line
                      return <Approach
                      {...routeProps} /> }}
                      />
                    <Route path="/esg" exact render={(routeProps) => { // eslint-disable-line
                      return <Esg
                      {...routeProps} /> }}
                    />
                  </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Router>
    )
  }
}

export default Routes;

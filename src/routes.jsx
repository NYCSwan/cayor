import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import PropTypes from 'prop-types';

import Homepage from './homepage/homepage.react';
import People from './people/people.react';
import Opportunities from './opportunity/opportunity.react';
import Approach from './approach/approach.react';
import Esg from './esg/esg.react';


const Routes = (props) => (
  <TransitionGroup>
    <CSSTransition
      timeout={500}
      key={props.key}
      className='slideIn'>
      <Switch location={props.key}>
        <Route exact path="/" render={(routeProps) => { // eslint-disable-line
            return <Homepage
              {...routeProps} /> }}
        />
        <Route path="/people" exact render={(routeProps) => { // eslint-disable-line
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
)

export default Routes;

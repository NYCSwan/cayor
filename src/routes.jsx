import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './homepage/homepage.react';
import People from './people/people.react';
import Opportunities from './opportunity/opportunity.react';
import Approach from './approach/approach.react';
import Esg from './esg/esg.react';


const Routes = (props, handlePageTransition) => (
  <Switch>
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
)

export default Routes;

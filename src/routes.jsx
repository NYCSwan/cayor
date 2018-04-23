import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Homepage from './homepage/homepage.react';
import People from './people/people.react';
import Opportunities from './opportunity/opportunity.react';


const Routes = (props) => (
  <Switch>
    <Route path="/" exact render={(routeProps) => { // eslint-disable-line
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
  </Switch>
)

export default Routes;

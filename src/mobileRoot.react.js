import React from "react";
import { Switch, Route } from "react-router-dom";
// import { CSSTransition } from "react-transition-group";
import Navigation from "./navigation/navigation.react";
import Footer from "./layout/footer.react";
import MobileHomepage from "./mobile/MobileHomepage.react";
import People from "./people/people.react";
import Opportunities from "./opportunity/opportunity.react";
import Approach from "./mobile/MobileApproach";
import Esg from "./esg/esg.react";

const MobileRoot = props => (
  <div className="root-container">
    <Navigation
      headerImg={
        props.location.pathname.split("/")[1] === ""
          ? "homepage"
          : props.location.pathname.split("/")[1]
      }
      history={props.history}
      location={props.location}
      handleClose={props.handleClose}
      isContactModalOpen={props.isContactModalOpen}
      handleClockClick={props.handleClick}
    />
    <Switch location={props.location}>
      <Route
        exact
        path="/"
        render={routeProps => {
          // eslint-disable-line
            return (
              <MobileHomepage
                handleClose={props.handleClose}
                handleClockClick={props.handleClick}
                isContactModalOpen={props.isContactModalOpen}
                height={props.height}
                width={props.width}
                deviceIdx={props.deviceIdx}
                {...routeProps}
                />
            )
        }}
      />
      <Route
        path="/people"
        render={routeProps => {
          // eslint-disable-line
          return (
            <People
              handleClose={props.handleClose}
              handleClockClick={props.handleClick}
              isContactModalOpen={props.isContactModalOpen}
              height={props.height}
              width={props.width}
              deviceIdx={props.deviceIdx}

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
              handleClose={props.handleClose}
              handleClockClick={props.handleClick}
              isContactModalOpen={props.isContactModalOpen}
              height={props.height}
              width={props.width}
              deviceIdx={props.deviceIdx}
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
              handleClose={props.handleClose}
              handleClockClick={props.handleClick}
              isContactModalOpen={props.isContactModalOpen}
              height={props.height}
              deviceIdx={props.deviceIdx}
              width={props.width}
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
              handleClose={props.handleClose}
              handleClockClick={props.handleClick}
              isContactModalOpen={props.isContactModalOpen}
              height={props.height}
              deviceIdx={props.deviceIdx}
              width={props.width}
              {...routeProps}
            />
          );
        }}
      />
    </Switch>
    <Footer location={props.location} />
  </div>
);

export default MobileRoot;

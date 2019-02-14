import React, { Component } from "react";
import { Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import createHistory from "history/createBrowserHistory";
// import Navigation from "./navigation/navigation.react";
// import Footer from "./layout/footer.react";
// import Homepage from "./homepage/homepage.react";
// import People from "./people/people.react";
// import Opportunities from "./opportunity/opportunity.react";
// import Approach from "./approach/approach.react";
// import Esg from "./esg/esg.react";
import Root from "./root.react";
import "./routes.css";

const history = createHistory();

class Routes extends Component {
  // static defaultProps = {
  //   location.state.transitionKey
  // }
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
      deviceIdx
    } = this.props;
    // timeout = { enter: 1000, exit: 800 };
    // currentKey = this.props.location.pathname.split("/")[1] || "/";
    // debugger;
    return (
      <Route
        history={history}
        render={({ location }) => (
          <TransitionGroup
            className="router"
            // childFactory={child =>
            //   React.cloneElement(child, {
            //     classNames: "slide",
            //     timeout: 1000
            //   })
            // }
          >
            <CSSTransition
              classNames="slide"
              timeout={1000}
              key={location.state ? location.state.transitionKey : location.key}
              in={true}
              mountOnEnter
              unmountOnExit
              onEntered={() => {
                // this.handleSlide();
                console.log("entered route transition");
              }}
              onExited={() => {
                console.log("exit route transition");
              }}
            >
              <Root
                // key={location.pathname}
                handleClick={handleClick}
                isContactModalOpen={isContactModalOpen}
                height={height}
                width={width}
                handleClose={handleClose}
                deviceIdx={deviceIdx}
                location={location}
                history={history}
                // currentKey={currentKey}
              />
            </CSSTransition>
          </TransitionGroup>
          // </div>
        )}
      />
    );
  }
}

export default Routes;

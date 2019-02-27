import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import TextTableContainer from "../layout/text-table-container.react";
import SubNav from "../sub_navigation/sub_navigation.react";
import "./esg.css";

class Esg extends Component {
  static defaultProps = {
    id: "philosophy philosophy",
    transitionKey: "esg",
    interiorTransitionKey: "philosophy"
  };

  state = {
    currentDetails: "philosophy philosophy",
    navItems: [
      {
        value: "ESG Philosophy",
        url: "philosophy philosophy",
        key: "philosophy philosophy",
        style: "top"
      },
      {
        value: "ESG Strategy",
        url: "strategy strategy",
        key: "strategy strategy",
        style: "top"
      },
      {
        value: "ESG Framework",
        url: "framework framework",
        key: "framework framework",
        style: "top"
      }
    ],
    philosophyTextTable: [
      {
        header: "ESG Philosophy",
        details: [
          {
            dKey: "p00",
            text:
              "We consider our approach to responsible investing to be both risk and return focused.",
            style: "subHeader"
          },
          {
            dKey: "p01",
            text:
              "ESG factors inform our investment decision-making and ownership practices. We believe assessing and managing ESG factors will enhance our ability to meet the long-term investment objectives of our fund and investments. With regard to establishing a trade-off between impact and returns, we do not see ESG considerations as being contradictory to our commercial objectives.",
            style: "text"
          },
          {
            dKey: "p02",
            text:
              "Instead, through active ESG management, we seek to identify opportunities to enhance the internal efficiencies of our portfolio companies and reduce the risks associated with our investment process. This approach is premised on the belief that active management of ESG factors can tangibly increase exit valuations of our investments and simultaneously contribute to the advancement of sustainable development in Arica.",
            style: "text"
          }
        ]
      }
    ],
    strategyTextTable: [
      {
        header: "ESG Strategy",
        details: [
          {
            dKey: "s00",
            text:
              "We have developed a strategy to achieve the requisite balance between environmental and social impact and generating commercial returns, all of which is underpinned by our ESG philosophy.",
            style: "subHeader"
          },
          {
            dKey: "s01",
            text:
              "At the initial stages of the investment process, we apply the principles outlined in our ESG Framework to the Fund’s portfolio companies and their operational activities. Post-investment, we will closely monitor progress on ESG matters and compliance by portfolio companies relative to Cayor’s ESG framework and policy guidelines.",
            style: "text"
          }
        ]
      }
    ],
    frameworkTableText: [
      {
        header:
          "Our Framework and Policy Guidelines have been formulated with the following objectives:",
        template: "bullet",
        details: [
          {
            dKey: "f00",
            text: "Policy",
            style: "subHeader"
          },
          {
            dKey: "f08",
            text: "To adhere to the UNPRI, and the IFC performance standards;",
            style: "text"
          },
          {
            dKey: "f01",
            text:
              "To partner with appropriate ESG experts to provide independent guidance on best international practice relating to ESG matters;",
            style: "text"
          },
          {
            dKey: "f07",
            text:
              "To fulfill the requirements of applicable National, Provincial and Local legislation where our portfolio companies operate;",
            style: "text"
          },
          {
            dKey: "f09",
            text: "Process",
            style: "subHeader"
          },
          {
            dKey: "f03",
            text:
              "To integrate ESG into our investment management framework through our ESG management system;",
            style: "text"
          },
          {
            dKey: "f02",
            text:
              "To conduct ESG due diligence assessments on all potential investment opportunities to requisite specifications, as required;",
            style: "text"
          },
          {
            dKey: "f05",
            text:
              "To implement reasonable precautions to protect the health and safety of portfolio company employees and any external parties such as affected communities; and",
            style: "text"
          },
          {
            dKey: "f10",
            text: "Management",
            style: "subHeader"
          },
          {
            dKey: "f04",
            text:
              "To communicate and work closely with investee companies to ensure management and employees’ understanding and shared commitment to conformance with our policy;",
            style: "text"
          },
          {
            dKey: "f06",
            text:
              "To implement responsible practices to ensure that good governance will enhance the reputation of the Fund and Cayor brand at all times",
            style: "text"
          }
        ]
      }
    ],
    fadeIn: true
  };

  componentDidMount() {
    const { location } = this.props;

    if (location.pathname === "/esg") {
      return;
    } else {
      const topic = location.state.id.toLowerCase();
      this.setState({
        currentDetails: topic
      });
    }
  }

  shouldComponentUpdate(nextProps) {
    console.log("shouldComponentUpdate");
    return (
      this.props.location !== nextProps.location ||
      this.props.height !== nextProps.height
    );
  }

  render() {
    const {
      // currentDetails,
      philosophyTextTable,
      strategyTextTable,
      frameworkTableText,
      fadeIn,
      navItems
    } = this.state;
    const { width, height, match, location, smoosh } = this.props,
      bodyHeight = Math.floor(height * 0.84);

    return (
      <main className="esg" style={{ maxHeight: bodyHeight, maxWidth: width }}>
        <SubNav navItems={navItems} match={match} location={location} smoosh={smoosh} />
        <TransitionGroup className="slide">
          <CSSTransition
            key={location.state.interiorTransitionKey}
            in={fadeIn}
            timeout={1350}
            classNames="slide"
            mountOnEnter
            unmountOnExit
          >
            <Switch location={location}>
              <Route
                path={`${match.url}/philosophy`}
                render={routeProps => (
                  <TextTableContainer
                    location={location.pathname.slice(1).split("/")[0]}
                    text={philosophyTextTable}
                    currentDetailIdx={0}
                    smoosh={smoosh}
                  />
                )}
              />
              <Route
                path={`${match.url}/strategy`}
                render={() => (
                  <TextTableContainer
                    location={location.pathname.slice(1).split("/")[0]}
                    text={strategyTextTable}
                    currentDetailIdx={0}
                    smoosh={smoosh}
                  />
                )}
              />
              <Route
                path={`${match.url}/framework`}
                render={() => (
                  <div className="framework">
                    <TextTableContainer
                      location={location.pathname.slice(1).split("/")[0]}
                      text={frameworkTableText}
                      currentDetailIdx={0}
                      smoosh={smoosh}
                    />
                  </div>
                )}
              />
              <Route
                path={match.url}
                render={() => (
                  <TextTableContainer
                    location={location.pathname.slice(1)}
                    text={philosophyTextTable}
                    currentDetailIdx={0}
                    smoosh={smoosh}
                  />
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </main>
    );
  }
}

export default Esg;

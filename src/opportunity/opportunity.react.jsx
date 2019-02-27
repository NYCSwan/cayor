import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import findKey from "lodash/findKey";
import pickBy from "lodash/pickBy";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import SubNav from "../sub_navigation/sub_navigation.react";
import TextTableContainer from "../layout/text-table-container.react";
import WhyCayor from "./whyCayor.react";

import "./opportunity.css";

class Opportunities extends Component {
  static defaultProps = {
    id: "why_cayor experienced_investors",
    transitionKey: "opportunity",
    interiorTransitionKey: "experienced_investors"
  };

  state = {
    currentDetails: "why_cayor experienced_investors",
    navItems: [
      {
        value: "Why Cayor",
        url: "why_cayor why_cayor",
        key: "cayor no-link",
        style: "top"
      },
      {
        value: "Experienced Africa Private Equity Investors",
        url: "why_cayor experienced_investors",
        key: "experienced",
        style: "sub"
      },
      {
        value: "Extensive Africa Network",
        url: "why_cayor network",
        key: "network",
        style: "sub"
      },
      {
        value: "Entrepreneurial",
        url: "why_cayor entrepreneurial",
        key: "entrepreneurial",
        style: "sub"
      },
      {
        value: "Trusted Partnerships",
        url: "why_cayor partnerships",
        key: "partnerships",
        style: "sub"
      },
      {
        value: "Why Africa",
        url: "why_africa why_africa",
        key: "africa",
        style: "top"
      }
    ],
    whyAfricaTableText: [
      {
        header:
          "Demographic & cultural shifts will drive economic growth in African mid markets",
        template: "other",
        details: [
          {
            dKey: "w01",
            text:
              "We believe that the consumer goods & services, infrastructure, financial services and agriculture sectors will be engines of growth across the continent, providing the most attractive investment opportunities and potential for sustainable value creation.",
            style: "subHeader"
          },
          {
            dKey: "w02",
            text:
              "Our thesis is that demographic and structural shifts will drive economic growth in Africa, including:",
            style: "text"
          },
          {
            dKey: "w03",
            text: "Growth in consumer demand",
            style: "text bullet"
          },
          {
            dKey: "w04",
            text: "Closing the infrastructure deficit gap",
            style: "text bullet"
          },
          {
            dKey: "w05",
            text: "Increased financial inclusion",
            style: "text bullet"
          },
          {
            dKey: "w06",
            text: "And expansion of agricultural output",
            style: "text bullet"
          }
        ]
      }
    ],
    whyCayorTableText: [
      {
        header: "Experienced Africa Private Equity Investors",
        details: [
          {
            dKey: "i00",
            text:
              "We are well-grounded in private equity having risen to partnership/senior management in internationally recognized and established principal investment firms.",
            style: "subHeader"
          },
          {
            dKey: "i01",
            text:
              "We are seasoned private equity investors with investment experience gained in Africa over a combined 30 years.",
            style: "text"
          },
          {
            dKey: "i02",
            text:
              "In prior roles, we evaluated in excess of 300 investment opportunities and invested in 11 companies, and as a result acquired invaluable investment knowledge related to what pitfalls to avoid and how to increase, and monetize, shareholder value.",
            style: "text"
          },
          {
            dKey: "i03",
            text:
              "We leverage tactical and strategic investment approaches in deal execution to achieve superior returns for our investors.",
            style: "text"
          },
          {
            dKey: "i04",
            text:
              "We have an established track record of leading successful and difficult investments with invaluable lessons learnt and have invested different vintage funds through up and down cycles.  We are as a result experienced in navigating exogenous factors.",
            style: "text"
          }
        ]
      },
      {
        header: "Extensive Africa Network",
        details: [
          {
            dKey: "n00",
            text:
              "We have an extensive network of industry experts, managers,  advisors, and a successful track record of collaborating with these partners to improve financial performance of portfolio companies",
            style: "subHeader"
          },
          {
            dKey: "n01",
            text:
              "We are native Africans with peers who are now key decision makers across Africa in government and in boardrooms",
            style: "text"
          },
          {
            dKey: "n02",
            text:
              "We continue to successfully leverage our extensive network to originate, evaluate, monitor and exit investments",
            style: "text"
          }
        ]
      },
      {
        header: "Entrepreneurial",
        details: [
          {
            dKey: "e00",
            text:
              "As a newly established and growing company, we can identify with mid market owners and managers",
            style: "subHeader"
          },
          {
            dKey: "e01",
            text:
              "We are able to quickly identify value and opportunity where others may not while managing down side risk. Our flat and highly responsive decision-making structure allows for a higher level of flexibility and responsiveness, crucial for complex and often challenging Africa transactions",
            style: "text"
          }
        ]
      },
      {
        header: "Trusted Partnerships",
        details: [
          {
            dKey: "p00",
            text:
              "We are easily referenced with owners and managers from previous portfolio companies",
            style: "subHeader"
          },
          {
            dKey: "p01",
            text:
              "We are willing to invest considerable time and resources to develop relationships with business owners prior to financial close, which is often a key consideration to successfully consummating, and most importantly, managing Africa investments",
            style: "text"
          }
        ]
      }
    ],
    fadeIn: true
  };

  componentDidMount() {
    console.log("CDM opportunity");
    const { location } = this.props;
    const { navItems } = this.state;

    if (location.state === undefined) {
      return;
    } else {
      const target = location.state.id,
        currentNavItem = pickBy(navItems, item => {
          return target === item.url;
        }),
        index = Number(findKey(currentNavItem)),
        nextDetails = currentNavItem[index].url;

      this.setState({
        currentDetails: nextDetails
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
      currentDetails,
      whyAfricaTableText,
      whyCayorTableText,
      navItems,
      fadeIn
    } = this.state;
    const { width, height, match, location, smoosh } = this.props,
      bodyHeight = Math.floor(height * 0.84);
    // currentKey = this.props.location.pathname.split("/")[0] || "/";

    // debugger;

    return (
      <main
        className="opportunity"
        style={{ maxHeight: bodyHeight, maxWidth: width }}
      >
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
                path={`${match.url}/why_africa`}
                render={() => (
                  <TextTableContainer
                    text={whyAfricaTableText}
                    currentDetailIdx={0}
                    location={location.pathname.slice(1).split("/")[0]}
                    smoosh={smoosh}
                  />
                )}
              />

              <Route
                path={match.url + "/why_cayor"}
                render={() => (
                  <WhyCayor
                    location={location}
                    currentDetails={currentDetails}
                    text={whyCayorTableText}
                    smoosh={smoosh}
                  />
                )}
              />

              <Route
                exact
                path={match.url}
                render={() => (
                  <TextTableContainer
                    text={whyCayorTableText}
                    currentDetailIdx={0}
                    location={location.pathname.slice(1)}
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

export default Opportunities;

import React, { Component } from "react";
import findKey from "lodash/findKey";
import pickBy from "lodash/pickBy";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import SubNav from "../sub_navigation/sub_navigation.react";
import TextTableContainer from "../layout/text-table-container.react";
import RegionDetails from "./TargetRegionDetails.react";
import Agribusiness from "../media/agriculture.jpg";
import Manufacturing from "../media/supermarket.jpg";
import Infrastructure from "../media/infrastructure.jpg";
import SectorsContainer from "./sectors_container.react";
import FinTech from "../media/fin.jpg";
import "./approach.css";

class Approach extends Component {
  state = {
    navItems: [
      {
        value: "The Cayor Approach",
        url: "cayor_approach cayor_approach",
        key: "approach no-link",
        style: "top"
      },
      {
        value: "Clear Investment Philosophy",
        url: "cayor_approach philosophy",
        key: "strategy",
        style: "sub"
      },
      {
        value: "Mid Market Focus",
        url: "cayor_approach mid",
        key: "middle",
        style: "sub"
      },
      {
        value: "Structured Deal Origination",
        url: "cayor_approach structured deal",
        key: "structured deal",
        style: "sub"
      },
      {
        value: "Investment Sectors",
        url: "sectors sectors",
        key: "sectors",
        style: "top"
      },
      {
        value: "Target Regions & Countries",
        url: "regions regions",
        key: "regions",
        style: "top"
      },
      {
        value: "Investment Criteria",
        url: "investments investment",
        key: "criteria no-link",
        style: "top"
      },
      {
        value: "Deal Type Criteria",
        url: "investments deal",
        key: "deals",
        style: "sub"
      },
      {
        value: "Target Company Criteria",
        url: "investments company",
        key: "companies",
        style: "sub"
      }
    ],
    currentDetails: "cayor_approach cayor_approach",
    cayorApproachTableText: [
      {
        header: "Execute a Strategy With A Clear Investment Philosophy",
        template: "other",
        details: [
          {
            dKey: "s00",
            text: `Cayor’s investment philosophy has clearly defined principles. \nWhenever we consider an opportunity, we focus on investments that possess the following attributes:`,
            style: "subHeader"
          },
          {
            dKey: "s01",
            text: "Strong Management Team",
            style: "text bullet"
          },
          {
            dKey: "s02",
            text: "Clearly Identifiable Growth Prospects",
            style: "text bullet"
          },
          {
            dKey: "s03",
            text: "Cash Flow Generative",
            style: "text bullet"
          },
          {
            dKey: "s04",
            text: "Scope To Add Value",
            style: "text bullet"
          },
          {
            dKey: "s05",
            text: "Clear Prospects For Exit",
            style: "text bullet"
          },
          {
            dKey: "s06",
            text: "Demonstrated ESG Excellence",
            style: "text bullet"
          }
        ]
      },
      {
        header:
          "We believe the mid market is attractive for a number of reasons:",
        details: [
          {
            dKey: "a00",
            text: "Moderate competitive intensity",
            style: "subHeader"
          },
          {
            dKey: "a01",
            text:
              "In our experience to date, there has been limited competition for mid= market assets, resulting in more attractive asset pricing and superior returns for investors.",
            style: "text"
          },
          {
            dKey: "a02",
            text: "Significant Transaction Flow",
            style: "subHeader"
          },
          {
            dKey: "a03",
            text:
              "We continue to generate attractive transaction flow arising from demand for expansion capital. We target transactions ranging from $20 to $40 million in size because we believe that transactions in this range allow for proprietary transaction flow with lower entry valuations, better corporate governance terms, and greater scope for us to add value and drive growth and returns.",
            style: "text"
          },
          {
            dKey: "a04",
            text: "The Cayor Advantage",
            style: "subHeader"
          },
          {
            dKey: "a05",
            text:
              "Our team’s cumulative mid market experience, cultural and geographic diversity, excellent analytical and portfolio management skills; extensive deep networks in sub-Saharan Africa and sterling reputation, further differentiates us from many of our competitors.",
            style: "text"
          }
        ]
      },
      {
        header: "Structured Approach to Deal Origination",
        details: [
          {
            dKey: "a01",
            text:
              "We believe superior origination is a competitive advantage that we maintain through a combination of:",
            style: "subHeader"
          },
          {
            dKey: "a02",
            text:
              "Continually mapping market sectors and engaging associated professional networks",
            style: "text"
          },
          {
            dKey: "a03",
            text:
              "Adopting a geographic approach to sourcing investments that positions Cayor as a preferred capital partner and recognized brand, thus driving inbound enquiries",
            style: "text"
          }
        ]
      }
    ],
    sectorsTableText: [
      {
        header: "Financial Services",
        image: FinTech,
        alt: "Cayor Capital expertise in Financial Services",
        template: "bullet",
        key: "FinServices",
        details: [
          {
            dKey: "f00",
            text: "Consumer Finance",
            style: "text"
          },
          {
            dKey: "f01",
            text: "Insurance",
            style: "text"
          },
          {
            dKey: "f02",
            text: "Banking",
            style: "text"
          },
          {
            dKey: "f03",
            text: "Fintech",
            style: "text"
          },
          {
            dKey: "f04",
            text: "Payments",
            style: "text"
          }
        ]
      },
      {
        header: "grey"
      },
      {
        header: "Infrastructure Services",
        template: "bullet",
        alt: "Cayor Capital invsting in Africa's Infrastructure Services",
        image: Infrastructure,
        key: "Infrastructure1",
        details: [
          {
            dKey: "i00",
            text: "Materials (E.g.: Steel & Cement)",
            style: "text"
          },
          {
            dKey: "i01",
            text: "Equipment Rentals",
            style: "text"
          },
          {
            dKey: "i02",
            text: "Logistics",
            style: "text"
          },
          {
            dKey: "i03",
            text: "Facilities Management",
            style: "text"
          },
          {
            dKey: "i04",
            text: "Repairs & Maintenance",
            style: "text"
          }
        ]
      },
      {
        header: "Consumer Goods & Services",
        alt: "Cayor Capital building better Consumer Goods and Services",
        image: Manufacturing,
        template: "bullet",
        key: "CGS",
        details: [
          {
            dKey: "c00",
            text: "Retail",
            style: "text"
          },
          {
            dKey: "c01",
            text: "Food & Beverage",
            style: "text"
          },
          {
            dKey: "c02",
            text: "FMCG",
            style: "text"
          },
          {
            dKey: "c03",
            text: "Services",
            style: "text"
          }
        ]
      },
      {
        header: "red"
      },
      {
        header: "Agribusiness",
        alt:
          "Cayor Capital driving growth in Agribusiness, Agricultural Technology, and Farming",
        image: Agribusiness,
        template: "bullet",
        key: "Agribusiness1",
        details: [
          {
            // eslint-disable-line
            dKey: "a00",
            text: "Inputs (E.g.: Seeds, Fertilizer & Crop Protection)",
            style: "text"
          },
          {
            dKey: "a01",
            text: "Equipment",
            style: "text"
          },
          {
            dKey: "a02",
            text: "Storage",
            style: "text"
          },
          {
            dKey: "a03",
            text: "Agri-processing",
            style: "text"
          },
          {
            dKey: "a04",
            text: "Logistics",
            style: "text"
          }
        ]
      }
    ],
    regionsTableText: [
      {
        header: "West Africa",
        className: "west-africa",
        details: [
          {
            dKey: "w0",
            text: "Cote D'Ivoire",
            style: "text"
          },
          {
            dKey: "w1",
            text: "Cameroon",
            style: "text"
          },
          {
            dKey: "w2",
            text: "Ghana",
            style: "text"
          },
          {
            dKey: "w3",
            text: "Nigeria",
            style: "text"
          }
        ]
      },
      {
        header: "East Africa",
        className: "east-africa",
        details: [
          {
            dKey: "e0",
            text: "Kenya",
            style: "text"
          },
          {
            dKey: "e1",
            text: "Tanzania",
            style: "text"
          },
          {
            dKey: "e2",
            text: "Uganda",
            style: "text"
          }
        ]
      },
      {
        header: "Southern Africa",
        className: "south-africa",
        details: [
          {
            dKey: "s0",
            text: "South Africa",
            style: "text"
          }
        ]
      }
    ],
    investmentCriteriaTableText: [
      {
        header: "Deal Type Criteria:",
        details: [
          {
            dKey: "c00",
            text:
              "We pursue control opportunities as well as take significant minority stakes in companies where we have board representation and a robust set of minority protection rights, which often yield effective control and enable us to drive value and key decisions.",
            style: "text"
          },
          {
            dKey: "c01",
            text: "Growth Capital:",
            style: "subHeader"
          },
          {
            dKey: "c02",
            text:
              "Provide high growth and profitable mature companies capital to fund their expansion plans",
            style: "text"
          },
          {
            dKey: "c03",
            text: "Buyouts:",
            style: "subHeader"
          },
          {
            dKey: "c04",
            text:
              "Provide capital to purchase a controlling stake in private companies",
            style: "text"
          },
          {
            dKey: "c05",
            text:
              "Provide reputable management teams with funding to acquire a controlling stake in private companies",
            style: "text"
          },
          {
            dKey: "c06",
            text: "Replacement:",
            style: "subHeader"
          },
          {
            dKey: "c07",
            text:
              "Provide capital to acquire equity stakes from shareholders who are seeking to exit",
            style: "text"
          },
          {
            dKey: "c08",
            text: "Other:",
            style: "subHeader"
          },
          {
            dKey: "c09",
            text: "PIPE, Pre-IPO, Quasi Equity and Structured Transactions",
            style: "text"
          }
        ]
      },
      {
        header: "Target Company Criteria",
        template: "other",
        details: [
          {
            dKey: "s00",
            text:
              "We typically invest US$20 - 40 million in businesses with a clear scope for value addition on the basis of a conservative valuation.",
            style: "text"
          },
          {
            dKey: "s01",
            text: "Size:",
            style: "subHeader"
          },
          {
            dKey: "s02",
            text: "Leading market position and strong business fundamentals",
            style: "text bullet"
          },
          {
            dKey: "s03",
            style: "text bullet",
            text: "EBITDA > US$5 million"
          },
          {
            dKey: "p00",
            text: "Performance:",
            style: "subHeader"
          },
          {
            dKey: "p01",
            text:
              "Sub-Saharan Africa based businesses with strong growth potential",
            style: "text bullet"
          },
          {
            dKey: "p02",
            text:
              "3 -5 years of cash flow positive & profitable growth with favorable working capital dynamics",
            style: "text bullet"
          },
          {
            dKey: "m00",
            text: "Management:",
            style: "subHeader"
          },
          {
            dKey: "m01",
            text:
              "Innovative and experienced management team with proven operational and financial track record",
            style: "text bullet"
          },
          {
            dKey: "m02",
            text: "Strong commitment to good governance and ethics",
            style: "text bullet"
          },
          {
            dKey: "m03",
            text:
              "Clear commitment to realise an exit over a period of 3 to 7 years",
            style: "text bullet"
          }
        ]
      }
    ]
  };

  componentDidMount() {
    console.log("componentDidMount approach");
    const { navItems } = this.state;
    const { location } = this.props;

    if (location.state === undefined) {
      return;
    } else {
      // debugger;
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
    console.log("render approach");
    const {
      navItems,
      currentDetails,
      sectorsTableText,
      regionsTableText,
      investmentCriteriaTableText,
      cayorApproachTableText
    } = this.state;
    const { width, height, match, location } = this.props,
      bodyHeight = Math.floor(height * 0.82);
    let index = 0;

    if (
      location.state !== undefined &&
      location.pathname === "/approach/investments"
    ) {
      const investmentItem = pickBy(investmentCriteriaTableText, item => {
        return item.header
          .toLowerCase()
          .includes(location.state.id.split(" ")[1]);
      });
      index = Number(findKey(investmentItem));
    } else if (
      location.state !== undefined &&
      location.pathname === "/approach/cayor_approach"
    ) {
      const cayorItem = pickBy(cayorApproachTableText, item => {
        // debugger;
        return item.header
          .toLowerCase()
          .includes(location.state.id.split(" ")[1]);
      });
      index = Number(findKey(cayorItem));
    }

    return (
      <main
        className="approach"
        style={{ maxHeight: bodyHeight, maxWidth: width }}
      >
        <SubNav navItems={navItems} match={match} location={location} />
        <TransitionGroup className="slide">
          <Switch location={location}>
            <Route
              path={`${match.url}/cayor_approach`}
              render={routeProps => (
                <CSSTransition
                  key={location.key}
                  in={true}
                  timeout={2000}
                  classNames="slide"
                >
                  <TextTableContainer
                    text={cayorApproachTableText}
                    currentDetailIdx={index}
                    location={location.pathname.slice(1).split("/")[0]}
                  />
                </CSSTransition>
              )}
            />
            <Route
              path={`${match.url}/sectors`}
              render={() => (
                <CSSTransition
                  key={location.key}
                  in={true}
                  timeout={1000}
                  classNames="slide"
                >
                  <SectorsContainer
                    location={location}
                    fadeIn={true}
                    currentDetails={currentDetails}
                    text={sectorsTableText}
                    currentDetailIdx={0}
                    handleButtonClick={this.handleButtonClick}
                  />
                </CSSTransition>
              )}
            />
            <Route
              path={`${match.url}/regions`}
              render={() => (
                <CSSTransition
                  key={location.key}
                  in={true}
                  timeout={1000}
                  classNames="slide"
                >
                  <RegionDetails
                    location={location}
                    fadeIn={true}
                    text={regionsTableText}
                  />
                </CSSTransition>
              )}
            />
            <Route
              path={`${match.url}/investments`}
              render={() => (
                <CSSTransition
                  key={location.key}
                  in={true}
                  timeout={1000}
                  classNames="slide"
                >
                  <TextTableContainer
                    location={location.pathname.slice(1).split("/")[0]}
                    currentDetailIdx={index}
                    text={investmentCriteriaTableText}
                  />
                </CSSTransition>
              )}
            />
            <Route
              exact
              path={match.url}
              render={routeProps => (
                <CSSTransition
                  key={location.key}
                  in={true}
                  timeout={1000}
                  classNames="slide"
                >
                  <TextTableContainer
                    text={cayorApproachTableText}
                    currentDetailIdx={0}
                    location={location.pathname.slice(1)}
                  />
                </CSSTransition>
              )}
            />
          </Switch>
        </TransitionGroup>
      </main>
    );
  }
}

export default Approach;

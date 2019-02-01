import React, { Component } from "react";
import findKey from "lodash/findKey";
import pickBy from "lodash/pickBy";
import { Switch, Route } from "react-router-dom";

import SubNav from "../sub_navigation/sub_navigation.react";
import TextTableContainer from "../layout/text-table-container.react";
// import Footer from "../layout/footer.react";
// import Navigation from "../navigation/navigation.react";
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
        key: "approach",
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
        key: "criteria",
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
    currentDetails: "cayor_approach",
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
        // images: [],
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
    ],
    fadeIn: true,
    currentDetailIdx: 0,
    buttonDisabled: false
  };

  componentDidMount() {
    console.log("componentDidMount approach");
    const { navItems } = this.state;
    const { location } = this.props;

    if (location.pathname === "/approach") {
      return;
    } else {
      const target = location.state.id,
        //     target = path.replace("/opportunity/", ""),
        currentNavItem = pickBy(navItems, item => {
          return target === item.value;
        }),
        index = Number(findKey(currentNavItem)),
        //     // nextIdx = index - 1,
        nextDetails = currentNavItem[index].url.split(" ")[1];

      //
      this.setState({
        currentDetails: nextDetails,
        fadeIn: false
      });
    }
  }

  render() {
    const {
      navItems,
      fadeIn,
      currentDetails,
      currentDetailIdx,
      sectorsTableText,
      regionsTableText,
      investmentCriteriaTableText,
      buttonDisabled,
      cayorApproachTableText
    } = this.state;
    const { width, height, match, location } = this.props;

    return (
      <main className="approach" style={{ maxHeight: height, maxWidth: width }}>
        <SubNav
          navItems={navItems}
          match={match}
          currentDetails={currentDetails}
        />
        <Switch>
          <Route
            path={`${match.url}/cayor_approach`}
            render={routeProps => (
              <TextTableContainer
                disabled={buttonDisabled}
                fadeIn={true}
                currentDetails={currentDetails}
                text={cayorApproachTableText}
                currentDetailIdx={0}
                handleButtonClick={this.handleButtonClick}
                {...routeProps}
              />
            )}
          />
          <Route
            path={`${match.url}/sectors`}
            render={() => (
              <SectorsContainer
                location={location}
                fadeIn={true}
                currentDetails={currentDetails}
                text={sectorsTableText}
                currentDetailIdx={currentDetailIdx}
                handleButtonClick={this.handleButtonClick}
              />
            )}
          />
          <Route
            path={`${match.url}/regions`}
            render={() => (
              <RegionDetails
                location={location}
                fadeIn={true}
                text={regionsTableText}
                // handleButtonClick={this.handleButtonClick}
              />
            )}
          />
          <Route
            path={`${match.url}/investments`}
            render={() => (
              <TextTableContainer
                location={location}
                disabled={buttonDisabled}
                fadeIn={true}
                currentDetails={currentDetails}
                currentDetailIdx={0}
                text={investmentCriteriaTableText}
                // handleButtonClick={this.handleButtonClick}
              />
            )}
          />
          <Route
            path={match.url}
            render={routeProps => (
              <TextTableContainer
                disabled={buttonDisabled}
                fadeIn={true}
                currentDetails={currentDetails}
                text={cayorApproachTableText}
                currentDetailIdx={0}
                // handleButtonClick={this.handleButtonClick}
                {...routeProps}
              />
            )}
          />
        </Switch>
      </main>
    );
  }
}

export default Approach;

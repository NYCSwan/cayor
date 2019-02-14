import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import SubNav from "../sub_navigation/sub_navigation.react";
import TeamDetails from "./TeamDetails.react";
import TextTableContainer from "../layout/text-table-container.react";
import Dafe from "../media/Dafe.jpg";
import Fungai from "../media/Fungai.jpg";
import Yannick from "../media/Yannick.jpg";
import Kofi from "../media/KDomfeh.Portraitfull.jpg";

import "./people.css";

class People extends Component {
  state = {
    currentDetails: "experienced",
    navItems: [
      {
        value: "Experienced",
        url: "experienced experienced",
        key: "experienced",
        style: "top"
      },
      { value: "Native", url: "native native", key: "native", style: "top" },
      {
        value: "Team Bios",
        url: "team_bios team_bios",
        key: "bios",
        style: "top"
      }
    ],
    experiencedTextTable: [
      {
        details: [
          {
            dKey: "e00",
            style: "subHeader",
            text:
              "We have in excess of 30 years of Africa specific principal investment experience. As such, we are among the most experienced private equity investors active on the continent today"
          },
          {
            dKey: "e01",
            text:
              "Our combined experience was developed at leading emerging market focused private equity firms including: Actis, Citi Venture Capital International (CVCI) and Phatisa. These institutions’ rigorous standards requiring technical and investment excellence has resulted in world class skills across the Cayor Team.",
            style: "text"
          },
          {
            dKey: "e02",
            text:
              "We have extensive deal-related skills including: sector specific investment experience, mergers and acquisitions, restructuring, and divestitures expertise, as well as experience dealing with co-investors, local regulators and other relevant stakeholders.",
            style: "text"
          },
          {
            dKey: "e03",
            text:
              "We possess the maturity, experience and soft skills that are imperative to successful deal making, including being sensitive to and intimately familiar with cultural and business norms in Africa",
            style: "text"
          }
        ]
      }
    ],
    nativeTextTable: [
      {
        details: [
          {
            dKey: "n00",
            text:
              "Our team currently consists of four African nationals: a Nigerian, Zimbabwean, Cameroonian and Ghanaian.",
            style: "subHeader"
          },
          {
            dKey: "n01",
            text:
              "We’ve grown up, been educated in, and worked on the continent, and as a result have developed deep and broad relationship networks with business owners, regulators, intermediaries, advisors and co-investment partners.",
            style: "text"
          },
          {
            dKey: "n02",
            text:
              "Our sensitivity to African cultural norms and owners’ aspirations, which affect business operations and outcomes, helps build rapport with African business owners. Our wide network includes peers who are key decision makers in corporations and high-level government officials.",
            style: "text"
          }
        ]
      }
    ],
    teamDetails: [
      {
        name: "Fungai Ruwende",
        position: "Managing Partner",
        summary:
          "Zimbabwean citizen with over fourteen years of principal investment experience in Africa, and a combined 25 years of private equity, consulting and corporate experience.",
        experience: [
          "Founding Partner of Cayor. Previously, served as a non-executive director on a number of boards in Africa, and on one of the investment committees of the PIC, a South African pension fund manager with in excess of US$100 billion in AUM. ",
          "Partner at Actis, a leading emerging markets fund with over US$5 billion of AUM, where he rose through the ranks from Associate to Deal Partner. ",
          "As Deal Partner at Actis, he was a member of the management team and partnership group responsible for managing over US$2 billion, 30 investment professionals and 10 operations staff, across 5 offices in Africa. ",
          "Deputy Head of the Actis South Africa Office and led the Africa Business Services Sector. ",
          "Strategy Consultant with BCG in New York, and Bain in London and Johannesburg."
        ],
        education:
          "MBA from Harvard Business School and a BSc Eng. with Honours from the University of Zimbabwe",
        alt:
          "Photograph of Fungai Ruwende, Managing Partner Cayor Capital Sub-Saharan Africa mid-market Equity Fund- Accra Johannesburg Nigeria Kenya South Africa Cameroon Ghana",
        image: Fungai
      },
      {
        name: "blue3"
      },
      {
        name: "grey"
      },
      {
        name: "Dafe Diejomaoh",
        position: "Managing Partner",
        summary:
          "Nigerian citizen with over twenty years in private equity, investment banking and consulting experience,  having focused on Africa over the last fifteen years.",
        experience: [
          "Founding partner of Cayor Capital, Prior thereto, head of Africa Private Investments at The Rohatyn Group (TRG), an emerging markets specialist asset manager with AUM of approximately US$5 billion, and previously at CVCI Private Equity, the emerging markets private equity division of Citi, which was acquired by TRG",
          "At CVCI/TRG, over a 10 year period, responsible for investing and divesting the CVCI/TRG Africa Fund, a US$100 million sector",
          "Partner at NEWE Partners, an investment and advisory firm focused on Africa",
          "Principal at AIG Private Equity in New York, and founding member of AIG Horizon Partners, an AIG sponsored US$400 million mid-market private equity fund focused on US and European markets."
        ],
        education:
          "BA in Economics from Harvard University, M.B.A. from Harvard Business School, Master of Science in Development Economics from Oxford University",
        alt:
          "Photograph of Dafe Diejomaoh, Managing Partner Cayor Capital Sub-Saharan Africa mid-market Equity Fund- Accra Johannesburg Nigeria Kenya South Africa Cameroon Ghana",
        image: Dafe
      },
      {
        name: "grey3"
      },
      {
        name: "Our Team"
      },
      {
        name: "blue"
      },
      {
        name: "Yannick Mpollo",
        position: "Principal",
        summary:
          "Cameroonian citizen with over ten years in private equity and corporate finance and advisory in Africa",
        experience: [
          "Prior to joining Cayor, Principal at Phatisa Fund Managers (Phatisa), a Pan African private equity fund manager with approximately US$280 million under management, and rose through the ranks from Analyst to Principal. ",
          "At Phatisa, originated and evaluated private equity transactions in the FMCG, agro processing, food and beverage sectors across the Sub-Saharan Africa region. ",
          "Prior thereto, corporate finance professional at Cauris Finance Afrique, and advisory boutique in Johannesburg. ",
          "Master degree and Honours bachelor degree in the field of financial economics from the University of Johannesburg, in South Africa. "
        ],
        education:
          "Master degree and Honours bachelor degree in the field of financial economics from the University of Johannesburg, in South Africa",
        alt:
          "Photograph of Yannick Mpollo, Principal Cayor Capital Sub-Saharan Africa mid-market Equity Fund- Accra Johannesburg Nigeria Kenya South Africa Cameroon Ghana",
        image: Yannick
      },
      {
        name: "blue2"
      },
      {
        name: "grey2"
      },
      {
        name: "Kofi Domfeh",
        position: "Vice President",
        summary:
          "Citizen of Ghana and the United States with over ten years experience spanning a number of sectors, including Energy, Consumer, TMT, Financial, Agribusiness and Industrials. ",
        experience: [
          "Prior to Joining Cayor, Principal at Arcadian Investment Partners, an Africa-focused investment advisory firm, advising on transactions representing both sell-side and buy-side interests, spanning venture capital to infrastructure projects in Africa. ",
          "As a principal at Spencer Capital Holdings, a permanent-capital investment firm. He spearheaded European & U.S. private equity investment banking division in New York, raising over US$5 billion. ",
          "Additionally, he was a member of the Leverage Finance Group at JPMorgan, leveraging loans and bonds for U.S. Corporates. "
        ],
        education:
          "BA in Economics from Pomona College, and an M.B.A. from Columbia University Graduate School of Business",
        alt:
          "Photograph of Kofi Domfeh, Vice President Cayor Capital Sub-Saharan Africa mid-market Equity Fund- Accra Johannesburg Nigeria Kenya South Africa Cameroon Ghana",
        image: Kofi
      }
    ],
    fadeIn: true,
    closeDetails: true
  };

  componentDidMount() {
    const { location } = this.props;
    if (location.pathname === "/people") {
      this.setState({ currentDetails: "experienced" });
      return;
    } else {
      const topic = location.state.id,
        subNavTopic = topic.toLowerCase();
      this.setState({
        currentDetails: subNavTopic
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

  handleBioClick = () => {
    this.setState({ closeDetails: false });
  };

  render() {
    const {
      currentDetails,
      navItems,
      fadeIn,
      experiencedTextTable,
      nativeTextTable,
      teamDetails,
      closeDetails
    } = this.state;
    const { width, height, match, location } = this.props,
      bodyHeight = Math.floor(height * 0.82);
    // currentKey = this.props.location.pathname.split("/")[1];

    return (
      <main
        className="people"
        style={{ minHeight: bodyHeight, minWidth: width }}
      >
        <SubNav navItems={navItems} match={match} location={location} />
        <TransitionGroup className="slide">
          <CSSTransition
            in={fadeIn}
            timeout={{ enter: 1000, exit: 500 }}
            key={location.state.interiorTransitionKey}
            classNames="slide"
            mountOnEnter
            unmountOnExit
          >
            <Switch location={location}>
              <Route
                path={`/people/team_bios`}
                render={routeProps => (
                  <TeamDetails
                    currentDetails={currentDetails}
                    teamDetails={teamDetails}
                    currentDetailIdx={0}
                    closeDetails={closeDetails}
                    handleBioClick={this.handleBioClick}
                    {...routeProps}
                  />
                )}
              />
              <Route
                path={`${match.url}/native`}
                render={() => (
                  <TextTableContainer
                    location={location.pathname.slice(1).split("/")[0]}
                    text={nativeTextTable}
                    currentDetailIdx={0}
                  />
                )}
              />
              <Route
                path={`${match.url}/:id`}
                render={() => (
                  <TextTableContainer
                    location={location.pathname.slice(1).split("/")[0]}
                    text={experiencedTextTable}
                    currentDetailIdx={0}
                  />
                )}
              />
              <Route
                path={match.url}
                render={() => (
                  <TextTableContainer
                    location={location.pathname.slice(1)}
                    text={experiencedTextTable}
                    currentDetailIdx={0}
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

export default People;

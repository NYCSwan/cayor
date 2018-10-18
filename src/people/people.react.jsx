import React, { Component } from 'react';
import findKey from 'lodash/findKey';
import pickBy from 'lodash/pickBy';
import SubNav from '../sub_navigation/sub_navigation.react';
import TeamDetails from './TeamDetails.react';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';
import TextTableContainer from '../layout/text-table-container.react';
import Dafe from '../media/DafeC.jpeg';
import Fungai from '../media/stock.jpg';
import Yannick from '../media/stock.jpg';
import Kofi from '../media/KDomfeh.Portrait.jpg';

import './people.css';

class People extends Component {
  state = {
    currentDetails: 'experienced',
    navItems: [
      { value: 'Experienced', url: 'experienced', style: 'top' },
      { value: 'Native', url: 'native', style: 'top' },
      { value: 'Team Bios', url: 'bios', style: 'top' },
    ],
    experiencedTextTable: [
      {
        details: [
          {
            dKey: 'e00',
            style: 'subHeader',
            text:
              'We have in excess of 30 years of Africa specific principal investment experience. As such, we are among the most experienced private equity investors active on the continent today',
          },
          {
            dKey: 'e01',
            text:
              'Our combined experience was developed at leading emerging market focused private equity firms including: Actis, Citi Venture Capital International (CVCI) and Phatisa. These institutions’ rigorous standards requiring technical and investment excellence has resulted in world class skills across the Cayor Team.',
            style: 'text',
          },
          {
            dKey: 'e02',
            text:
              'We have extensive deal-related skills including: sector specific investment experience, mergers and acquisitions, restructuring, and divestitures expertise, as well as experience dealing with co-investors, local regulators and other relevant stakeholders.',
            style: 'text',
          },
          {
            dKey: 'e03',
            text:
              'We possess the maturity, experience and soft skills that are imperative to successful deal making, including being sensitive to and intimately familiar with cultural and business norms in Africa',
            style: 'text',
          },
        ],
      },
    ],
    nativeTextTable: [
      {
        details: [
          {
            dKey: 'n00',
            text:
              'Our team currently consists of four African nationals: a Nigerian, Zimbabwean, Cameroonian and Ghanaian. We’ve grown up, been educated in, and worked on the continent, and as a result have developed deep and broad relationship networks with business owners, regulators, intermediaries, advisors and co-investment partners.',
            style: 'text',
          },
          {
            dKey: 'n01',
            text:
              'Our sensitivity to African cultural norms and owners’ aspirations, that affect business operations and outcomes, helps build rapport with African business owners.',
            style: 'text',
          },
          {
            dKey: 'n02',
            text:
              'Our wide network includes peers who are key decision makers in corporations and high-level government officials.',
            style: 'text',
          },
        ],
      },
    ],
    teamDetails: [
      {
        name: 'Fungai Ruwende',
        position: 'Managing Partner',
        summary:
          'Zimbabwean citizen with over fourteen years of principal investment experience in Africa, and a combined 25 years of private equity, consulting and corporate experience',
        experience: [
          'Founding Partner of Cayor. Previously, served as a non-executive director on a number of boards in Africa, and on one of the investment committees of the PIC, a South African pension fund manager with in excess of US$100 billion in AUM. ',
          'Partner at Actis, a leading emerging markets fund with over US$5 billion of AUM, where he rose through the ranks from Associate to Deal Partner. ',
          'As Deal Partner at Actis, he was a member of the management team and partnership group responsible for managing over US$2 billion, 30 investment professionals and 10 operations staff, across 5 offices in Africa. ',
          'Deputy Head of the Actis South Africa Office and led the Africa Business Services Sector. ',
          'Strategy Consultant with BCG in New York, and Bain in London and Johannesburg.',
        ],
        education:
          'MBA from Harvard Business School and a BSc Eng. with Honours from the University of Zimbabwe',
        alt:
          'Photograph of Fungai Ruwende, Managing Partner Cayor Capital Sub-Saharan Africa Equity Fund',
        image: Fungai,
      },
      {
        name: 'Dafe Diejomaoh',
        position: 'Managing Partner',
        summary:
          'Nigerian citizen with over twenty years of private equity, investment banking and consulting experience, of which the last fifteen have been spent focused on Africa',
        experience: [
          'Founding partner of Cayor Capital, Prior thereto, head of Africa Private Investments at The Rohatyn Group (TRG), an emerging markets specialist asset manager with AUM of approximately US$5 billion, and previously at CVCI Private Equity, the emerging markets private equity division of Citi, which was acquired by TRG',
          'At CVCI/TRG, over a 10 year period, responsible for investing and divesting the CVCI/TRG Africa Fund, a US$100 million sector',
          'Partner at NEWE Partners, an investment and advisory firm focused on Africa',
          'Principal at AIG Private Equity in New York, and founding member of AIG Horizon Partners, an AIG sponsored US$400 million mid-market private equity fund focused on US and European markets.',
        ],
        education:
          'BA in Economics from Harvard University, M.B.A. from Harvard Business School, Master of Science in Development Economics Master of Science in Development Economics',
        alt:
          'Photograph of Dafe Diejomaoh, Managing Partner Cayor Capital Sub-Saharan Africa Equity Fund',
        image: Dafe,
      },
      {
        name: 'grey',
      },
      {
        name: 'Yannick Mpollo',
        position: 'Principal',
        summary:
          'Cameroonian citizen with over ten years in private equity and corporate finance and advisory in Africa',
        experience: [
          'Prior to Joining Cayor, Principal at Phatisa Fund Managers (Phatisa), a Pan African private equity fund manager with approximately US$280 million under management, and rose through the ranks from Analyst to Principal',
          'At Phatisa, originated and evaluated private equity transactions in the FMCG, agro processing, food and beverage sectors across the Sub-Saharan Africa region',
          'Prior thereto, corporate finance professional at Cauris Finance Afrique, and advisory boutique in Johannesburg',
          'Master degree and Honours bachelor degree in the field of financial economics from the University of Johannesburg, in South Africa',
        ],
        education:
          'Master degree and Honours bachelor degree in the field of financial economics from the University of Johannesburg, in South Africa',
        alt:
          'Photograph of Yannick Mpollo, Principal Cayor Capital Sub-Saharan Africa Equity Fund',
        image: Yannick,
      },
      {
        name: 'blue',
      },
      {
        name: 'Kofi Domfeh',
        position: 'Vice President',
        summary:
          'Citizen of Ghana and the United States with over ten years experience spanning a number of sectors, including Energy, Consumer, TMT, Financial, Agribusiness and Industrials',
        experience: [
          'Prior to Joining Cayor, Principal at Arcadian Investment Partners, an Africa-focused investment advisory firm. Advised on transactions representing both sell-side and buy-side interests, spanning venture capital to infrastructure projects in Africa',
          'Principal at Spencer Capital Holdings, a permanent-capital investment firm. Spearheaded European & U.S. private equity investment banking division in New York. Raised over US$5 billion.',
          'Member of the Leverage Finance Group at JPMorgan’s of leverage loans and bonds for U.S. Corporates',
        ],
        education:
          'BA in Economics from Pomona College, and an M.B.A. from Columbia University Graduate School of Business',
        alt:
          'Photograph of Kofi Domfeh, Vice President Cayor Capital Sub-Saharan Africa Equity Fund',
        image: Kofi,
      },
    ],
    fadeIn: true,
    currentDetailIdx: 0,
  };

  handleClick = e => {
    console.log('handle sub navigation click opportunity');
    const { navItems } = this.state;
    const currentNavItem = pickBy(
      navItems,
      item => e.target.innerText.toLowerCase() === item.value.toLowerCase()
    );
    const index = Number(findKey(currentNavItem));
    // debugger;
    this.setState({
      currentDetails: e.target.innerText.toLowerCase(),
      fadeIn: true,
      currentDetailIdx: index,
    });
  };

  handleButtonClick = e => {
    const { currentDetailIdx, navItems } = this.state;
    const maxIndex = navItems.length - 1;

    if (e.target.value === 'Next' && currentDetailIdx !== maxIndex) {
      this.setState({
        currentDetailIdx: currentDetailIdx + 1,
      });
    } else if (e.target.value === 'Next' && currentDetailIdx === maxIndex) {
      this.setState({
        currentDetailIdx: 0,
      });
    } else {
      this.setState({
        currentDetailIdx: maxIndex,
      });
    }
  };

  renderDetails() {
    const {
      currentDetails,
      fadeIn,
      teamDetails,
      experiencedTextTable,
      nativeTextTable,
      teamText,
    } = this.state;
    if (currentDetails === 'native') {
      return (
        <TextTableContainer
          fadeIn={fadeIn}
          currentDetails={currentDetails}
          text={nativeTextTable}
          currentDetailIdx={0}
          handleButtonClick={this.handleButtonClick}
        />
      );
    } else if (currentDetails === 'experienced') {
      return (
        <TextTableContainer
          fadeIn={fadeIn}
          currentDetails={currentDetails}
          text={experiencedTextTable}
          currentDetailIdx={0}
          handleButtonClick={this.handleButtonClick}
        />
      );
    } else {
      return (
        <TeamDetails
          fadeIn={fadeIn}
          height={this.props.height}
          teamDetails={teamDetails}
          pageDetails={teamText}
        />
      );
    }
  }

  render() {
    const { currentDetails, navItems, fadeIn } = this.state;
    const { width, height } = this.props;
    return (
      <main className="people" style={{ minHeight: height, minWidth: width }}>
        <Navigation
          fadeIn={fadeIn}
          headerImg="people"
          history={this.props.history}
          location={this.props.location}
          handleClose={this.props.handleClose}
          isContactModalOpen={this.props.isContactModalOpen}
          handleClockClick={this.props.handleClockClick}
        />
        <SubNav
          navItems={navItems}
          match={this.props.match}
          currentDetails={currentDetails}
          handleClick={this.handleClick}
        />
        {this.renderDetails()}
        <Footer location={this.props.location} />
      </main>
    );
  }
}

export default People;

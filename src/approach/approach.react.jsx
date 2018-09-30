import React, { Component } from 'react';
import findKey from 'lodash/findKey';
import pickBy from 'lodash/pickBy';

import SubNav from '../sub_navigation/sub_navigation.react';
import TextTableContainer from '../layout/text-table-container.react';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';
import RegionDetails from './TargetRegionDetails.react';
import Agribusiness from '../media/shipping.jpg';
import Manufacturing from '../media/manufacturing.jpg';
import Infrastructure from '../media/machine_industrialCropped.jpeg';
import SectorsContainer from './sectors_container.react';
import FinTech from '../media/United_Bank_for_Africa_in_Ghana.jpg';
import './approach.css';

class Approach extends Component {
  state = {
    navItems: [
      { value: 'The Cayor Approach', key: 'approach', style: 'top' },
      { value: 'Clear Investment Philosophy', key: 'strategy', style: 'sub' },
      { value: 'Mid Market Focus', key: 'middle', style: 'sub' },
      {
        value: 'Structured Deal Origination',
        key: 'structuredDeals',
        style: 'sub',
      },
      { value: 'Investment Sectors', key: 'sectors', style: 'top' },
      { value: 'Target Regions & Countries', key: 'regions', style: 'top' },
      { value: 'Investment Criteria', key: 'criteria', style: 'top' },
      { value: 'Deal Type Criteria', key: 'deals', style: 'sub' },
      { value: 'Target Company Criteria', key: 'companies', style: 'sub' },
    ],
    currentDetails: 'clear investment philosophy',
    cayorApproachTableText: [
      {
        header: 'Execute a Strategy With A Clear Investment Philosophy',
        template: 'other',
        details: [
          {
            dKey: 's00',
            text:
              'Cayor’s investment philosophy has clearly defined principles. Whenever we consider an opportunity, we focus on investments that possess the following attributes:',
            style: 'subHeader',
          },
          {
            dKey: 's02',
            text: 'Strong Management Team',
            style: 'text bullet',
          },
          {
            dKey: 's03',
            text: 'Clearly Identifiable Growth Prospects',
            style: 'text bullet',
          },
          {
            dKey: 's04',
            text: 'Cash Flow Generative',
            style: 'text bullet',
          },
          {
            dKey: 's05',
            text: 'Scope To Add Value',
            style: 'text bullet',
          },
          {
            dKey: 's06',
            text: 'Clear Prospects For Exit',
            style: 'text bullet',
          },
          {
            dKey: 's07',
            text: 'Demonstrated ESG Excellence',
            style: 'text bullet',
          },
        ],
      },
      {
        header:
          'We believe the mid market is attractive for a number of reasons:',
        details: [
          {
            dKey: 'a00',
            text: 'Moderate competitive intensity',
            style: 'subHeader',
          },
          {
            dKey: 'a01',
            text:
              'In our experience to date, there has been limited competition for mid= market assets, resulting in more attractive asset pricing and superior returns for investors.',
            style: 'text',
          },
          {
            dKey: 'a02',
            text: 'Significant Transaction Flow',
            style: 'subHeader',
          },
          {
            dKey: 'a03',
            text:
              'We continue to generate attractive transaction flow arising from demand for expansion capital. We target transactions ranging from $20 to $40 million in size because we believe that transactions in this range allow for proprietary transaction flow with lower entry valuations, better corporate governance terms, and greater scope for us to add value and drive growth and returns.',
            style: 'text',
          },
          {
            dKey: 'a04',
            text: 'The Cayor Advantage',
            style: 'subHeader',
          },
          {
            dKey: 'a05',
            text:
              'Our team’s cumulative mid market experience, cultural and geographic diversity, excellent analytical and portfolio management skills; extensive deep networks in sub-Saharan Africa and sterling reputation, further differentiates us from many of our competitors.',
            style: 'text',
          },
        ],
      },
      {
        header: 'Structured Approach to Deal Origination',
        details: [
          {
            dKey: 'a01',
            text:
              'We believe superior origination is a competitive advantage that we maintain through a combination of:',
            style: 'subHeader',
          },
          {
            dKey: 'a02',
            text:
              'Continually mapping market sectors and engaging associated professional networks',
            style: 'text',
          },
          {
            dKey: 'a03',
            text:
              'Adopting a geographic approach to sourcing investments that positions Cayor as a preferred capital partner and recognized brand, thus driving inbound enquiries',
            style: 'text',
          },
        ],
      },
    ],
    sectorsTableText: [
      {
        header: 'Financial Services',
        image: FinTech,
        template: 'bullet',
        details: [
          {
            dKey: 'f00',
            text: 'Consumer Finance',
            style: 'text',
          },
          {
            dKey: 'f01',
            text: 'Insurance',
            style: 'text',
          },
          {
            dKey: 'f02',
            text: 'Banking',
            style: 'text',
          },
          {
            dKey: 'f03',
            text: 'Fintech',
            style: 'text',
          },
          {
            dKey: 'f04',
            text: 'Payments',
            style: 'text',
          },
        ],
      },
      {
        header: 'Infrastructure Services',
        template: 'bullet',
        image: Infrastructure,
        details: [
          {
            dKey: 'i00',
            text: 'Materials (E.g.: Steel & Cement)',
            style: 'text',
          },
          {
            dKey: 'i01',
            text: 'Equipment Rentals',
            style: 'text',
          },
          {
            dKey: 'i02',
            text: 'Logistics',
            style: 'text',
          },
          {
            dKey: 'i03',
            text: 'Facilities Management',
            style: 'text',
          },
          {
            dKey: 'i04',
            text: 'Repairs & Maintenance',
            style: 'text',
          },
        ],
      },
      {
        header: 'Consumer Goods & Services',
        image: Manufacturing,
        template: 'bullet',
        details: [
          {
            dKey: 'c00',
            text: 'Retail',
            style: 'text',
          },
          {
            dKey: 'c01',
            text: 'Food & Beverage',
            style: 'text',
          },
          {
            dKey: 'c02',
            text: 'FMCG',
            style: 'text',
          },
          {
            dKey: 'c03',
            text: 'Services',
            style: 'text',
          },
        ],
      },
      {
        header: 'Agribusiness',
        image: Agribusiness,
        template: 'bullet',
        details: [
          {
            // eslint-disable-line
            dKey: 'a00',
            text: 'Inputs (E.g.: Seeds, Fertilizer & Crop Protection)',
            style: 'text',
          },
          {
            dKey: 'a01',
            text: 'Equipment',
            style: 'text',
          },
          {
            dKey: 'a02',
            text: 'Storage',
            style: 'text',
          },
          {
            dKey: 'a03',
            text: 'Agri-processing',
            style: 'text',
          },
          {
            dKey: 'a04',
            text: 'Logistics',
            style: 'text',
          },
        ],
      },
    ],
    regionsTableText: [
      {
        header: 'West Africa',
        className: 'west-africa',
        details: [
          {
            dKey: 'w0',
            text: "Cote D'Ivoire",
            style: 'text',
          },
          {
            dKey: 'w1',
            text: 'Cameroon',
            style: 'text',
          },
          {
            dKey: 'w2',
            text: 'Ghana',
            style: 'text',
          },
          {
            dKey: 'w3',
            text: 'Nigeria',
            style: 'text',
          },
        ],
      },
      {
        header: 'East Africa',
        className: 'east-africa',
        details: [
          {
            dKey: 'e0',
            text: 'Kenya',
            style: 'text',
          },
          {
            dKey: 'e1',
            text: 'Tanzania',
            style: 'text',
          },
          {
            dKey: 'e2',
            text: 'Uganda',
            style: 'text',
          },
        ],
      },
      {
        header: 'Southern Africa',
        className: 'south-africa',
        details: [
          {
            dKey: 's0',
            text: 'South Africa',
            style: 'text',
          },
        ],
      },
    ],
    investmentCriteriaTableText: [
      {
        header: 'Deal Type Criteria:',
        details: [
          {
            dKey: 'c00',
            text:
              'We pursue control opportunities as well as take significant minority stakes in companies where we have board representation and a robust set of minority protection rights, which often yield effective control and enable us to drive value and key decisions.',
            style: 'text',
          },
          {
            dKey: 'c01',
            text: 'Growth Capital:',
            style: 'subHeader',
          },
          {
            dKey: 'c02',
            text:
              'Provide high growth and profitable mature companies capital to fund their expansion plans',
            style: 'text',
          },
          {
            dKey: 'c03',
            text: 'Buyouts:',
            style: 'subHeader',
          },
          {
            dKey: 'c04',
            text:
              'Provide capital to purchase a controlling stake in private companies',
            style: 'text',
          },
          {
            dKey: 'c05',
            text:
              'Provide reputable management teams with funding to acquire a controlling stake in private companies',
            style: 'text',
          },
          {
            dKey: 'c06',
            text: 'Replacement:',
            style: 'subHeader',
          },
          {
            dKey: 'c07',
            text:
              'Provide capital to acquire equity stakes from shareholders who are seeking to exit',
            style: 'text',
          },
          {
            dKey: 'c08',
            text: 'Other:',
            style: 'subHeader',
          },
          {
            dKey: 'c09',
            text: 'PIPE, Pre-IPO, Quasi Equity and Structured Transactions',
            style: 'text',
          },
        ],
      },
      {
        header: 'Target Company Criteria',
        template: 'other',
        // images: [],
        details: [
          {
            dKey: 's00',
            text:
              'We typically invest US$20 - 40 million in businesses with a clear scope for value addition on the basis of a conservative valuation.',
            style: 'text',
          },
          {
            dKey: 's01',
            text: 'Size:',
            style: 'subHeader',
          },
          {
            dKey: 's02',
            text: 'Leading market position and strong business fundamentals',
            style: 'text bullet',
          },
          {
            dKey: 's03',
            style: 'text bullet',
            text: 'EBITDA > US$5 million',
          },
          {
            dKey: 'p00',
            text: 'Performance:',
            style: 'subHeader',
          },
          {
            dKey: 'p01',
            text:
              'Sub-Saharan Africa based businesses with strong growth potential',
            style: 'text bullet',
          },
          {
            dKey: 'p02',
            text:
              '3 -5 years of cash flow positive & profitable growth with favorable working capital dynamics',
            style: 'text bullet',
          },
          {
            dKey: 'm00',
            text: 'Management:',
            style: 'subHeader',
          },
          {
            dKey: 'm01',
            text:
              'Innovative and experienced management team with proven operational and financial track record',
            style: 'text bullet',
          },
          {
            dKey: 'm02',
            text: 'Strong commitment to good governance and ethics',
            style: 'text bullet',
          },
          {
            dKey: 'm03',
            text:
              'Clear commitment to realise an exit over a period of 3 to 7 years',
            style: 'text bullet',
          },
        ],
      },
    ],
    fadeIn: true,
    currentDetailIdx: 0,
    buttonDisabled: false,
  };

  handleClick = e => {
    console.log('handle sub navigation click', e);
    const { navItems } = this.state;
    const currentNavItem = pickBy(
      navItems,
      item => e.target.innerText.toLowerCase() === item.value.toLowerCase()
    );
    const index = Number(findKey(currentNavItem)) - 1;
    // debugger;
    // const newIndex = navItems.indexOf({value: e.target.innerText)
    if (index === 3 || index === 8) {
      this.setState({ buttonDisabled: true });
    } else {
      this.setState({ buttonDisabled: false });
    }

    this.setState({
      currentDetails: e.target.innerText.toLowerCase(),
      fadeIn: true,
      currentDetailIdx: index,
    });
  };

  handleButtonClick = () => {
    const { navItems, currentDetailIdx } = this.state;
    const maxIndex = navItems.length - 2;
    const index = currentDetailIdx + 1;
    const details = navItems[index + 1].value.toLowerCase();
    // debugger
    if (currentDetailIdx === -1) {
      this.setState({
        currentDetailIdx: index,
        currentDetails: 'clear imvestment philosophy',
        buttonDisabled: false,
      });
    } else if (currentDetailIdx === 0) {
      this.setState({
        currentDetailIdx: index,
        currentDetails: 'middle market focus',
        buttonDisabled: false,
      });
    } else if (currentDetailIdx === 2) {
      this.setState({
        currentDetailIdx: index,
        currentDetails: details,
        buttonDisabled: true,
      });
    } else if (index !== maxIndex) {
      this.setState({
        currentDetailIdx: index,
        currentDetails: details,
        buttonDisabled: false,
      });
    } else {
      this.setState({
        currentDetailIdx: maxIndex,
        currentDetails: details,
        buttonDisabled: true,
      });
    }
  };
  // refactor this ish
  renderTextDetails() {
    const {
      currentDetails,
      currentDetailIdx,
      fadeIn,
      investmentCriteriaTableText,
      sectorsTableText,
      regionsTableText,
      cayorApproachTableText,
      buttonDisabled,
    } = this.state;

    if (
      currentDetails === 'clear investment philosophy' ||
      currentDetails === 'mid market focus' ||
      currentDetails === 'structured deal origination' ||
      currentDetails === 'deal & portfolio mgmt'
    ) {
      // debugger
      return (
        <TextTableContainer
          location={this.props.location.pathname.split('/')[1]}
          fadeIn={fadeIn}
          disabled={buttonDisabled}
          currentDetails={currentDetails}
          text={cayorApproachTableText}
          currentDetailIdx={currentDetailIdx}
          handleButtonClick={this.handleButtonClick}
        />
      );
    } else if (currentDetails === 'investment sectors') {
      // debugger;
      return (
        <SectorsContainer
          location={this.props.location.pathname.split('/')[1]}
          fadeIn={fadeIn}
          currentDetails={currentDetails}
          text={sectorsTableText}
          currentDetailIdx={currentDetailIdx}
          handleButtonClick={this.handleButtonClick}
        />
      );
    } else if (
      currentDetails === 'investment criteria' ||
      currentDetails === 'deal type criteria'
    ) {
      return (
        <TextTableContainer
          location={this.props.location.pathname.split('/')[1]}
          disabled={buttonDisabled}
          fadeIn={fadeIn}
          currentDetails={currentDetails}
          currentDetailIdx={0}
          text={investmentCriteriaTableText}
          handleButtonClick={this.handleButtonClick}
        />
      );
    } else if (currentDetails === 'target company criteria') {
      return (
        <TextTableContainer
          location={this.props.location.pathname.split('/')[1]}
          disabled={buttonDisabled}
          fadeIn={fadeIn}
          currentDetails={currentDetails}
          currentDetailIdx={1}
          text={investmentCriteriaTableText}
          handleButtonClick={this.handleButtonClick}
        />
      );
    } else if (currentDetails.includes('target regions')) {
      return (
        <RegionDetails
          location={this.props.location.pathname.split('/')[1]}
          fadeIn={fadeIn}
          text={regionsTableText}
          handleButtonClick={this.handleButtonClick}
        />
      );
    } else if (currentDetails === 'the cayor approach') {
      return (
        <TextTableContainer
          location={this.props.location.pathname.split('/')[1]}
          disabled={buttonDisabled}
          fadeIn={fadeIn}
          currentDetails={currentDetails}
          text={cayorApproachTableText}
          currentDetailIdx={0}
          handleButtonClick={this.handleButtonClick}
        />
      );
    }
  }

  render() {
    const { navItems, fadeIn, currentDetails, currentDetailIdx } = this.state;
    const { width, height } = this.props;

    return (
      <div className="approach" style={{ maxHeight: height, maxWidth: width }}>
        <Navigation
          fadeIn={fadeIn}
          history={this.props.history}
          location={this.props.location}
          handleClose={this.props.handleClose}
          handleClockClick={this.props.handleClockClick}
          isContactModalOpen={this.props.isContactModalOpen}
          headerImg="approach"
        />
        <main className="body">
          <SubNav
            navItems={navItems}
            match={this.props.match}
            currentDetails={currentDetails}
            handleClick={this.handleClick}
            currentDetailIdx={currentDetailIdx}
          />
          {this.renderTextDetails()}
        </main>
        <Footer location={this.props.location} />
      </div>
    );
  }
}

export default Approach;

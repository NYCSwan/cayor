import React, { Component } from 'react';
import findKey from 'lodash/findKey';
import pickBy from 'lodash/pickBy';

import SubNav from '../sub_navigation/sub_navigation.react';
import TextTableContainer from '../layout/text-table-container.react';
// import PageDetails from '../layout/pageDetails.react';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';
import RegionDetails from './TargetRegionDetails.react';
import Agribusiness from '../media/world.png';
import FashionStore from '../media/middle_class.jpg';
import MiddleClass from '../media/canal.jpg';
// import ConsumerMarket from '../media/consumer-market.jpg';
import SectorsContainer from './sectors_container.react';
import './approach.css';


class Approach extends Component {
  state = {
    navItems: [
      {value: 'The Cayor Approach', key: 'approach', style: 'top'},
      {value: 'Clear Investment Philosophy', key: 'strategy', style: 'sub'},
      {value: 'Middle Market Focus', key: 'middle', style: 'sub'},
      {value: 'Structured Deal Origination', key: 'structuredDeals', style: 'sub'},
      {value: 'Deal & Portfolio Mgmt', key: 'returns', style: 'sub'},
      {value: 'Investment Sectors', key: 'sectors', style: 'top'},
      {value: 'Investment Criteria', key: 'criteria', style: 'top'},
      {value: 'Deal Type Criteria', key: 'deals', style: 'sub'},
      {value: 'Target Company Criteria', key: 'companies', style: 'sub'},
      {value: 'Target Regions & Countries', key: 'regions', style: 'top'}
    ],
    currentDetails: 'clear investment philosophy',
    cayorApproachTableText: [
      {
        header: 'Execute a Strategy With A Clear Investment Philosophy',
        template: 'other',
        details: [{
          dKey: 's00',
          text: 'Cayor’s investment philosophy has clearly defined principles. Whenever we consider an opportunity, we focus on investments that possess the following attributes:',
          style: 'text'
        },
        {
          dKey: 's01',
          text: 'Investment Philosophy',
          style: 'header'
        },
        {
          dKey: 's02',
          text: 'Strong Management Team',
          style: 'text'
        },
        {
          dKey: 's03',
          text: 'Clearly Identifiable Growth Prospects',
          style: 'text'
        },
        {
          dKey: 's04',
          text: 'Cash Flow Generative',
          style: 'text'
        },
        {
          dKey: 's05',
          text: 'Scope To Add Value',
          style: 'text'
        },
        {
          dKey: 's06',
          text: 'Clear Prospects For Exit',
          style: 'text'
        },
        {
          dKey: 's07',
          text: 'Demonstrated ESG Excellence',
          style: 'text'
        }]
      },
      {
        header: 'We believe the middle market is attractive for a number of reasons:',
        details: [
          {
          dKey: 'a00',
          text: 'reduced competition',
          style: 'subHeader'
        },
          {
            dKey: 'a01',
            text: 'In our experience to date, there is less competition for middle market assets, resulting in more attractive asset pricing and superior returns for investors.',
            style: 'text'
          },
          {
            dKey: 'a02',
            text: 'Superior Transaction Flow',
            style: 'subHeader'
          },
          {
            dKey: 'a03',
            text: 'We continue to generate attractive transaction flow arising from demand for expansion capital. We target transactions ranging from $20 to $40 million in size because we believe that transactions in this range allow for proprietary transaction flow with lower entry valuations, better corporate governance terms, and greater scope for us to add value and drive growth and returns.',
            style: 'text'
          },
          {
            dKey: 'a04',
            text: 'The Cayor Advantage',
            style: 'subHeader'
          },
          {
            dKey: 'a05',
            text: 'Our team’s cumulative experience, cultural and geographic diversity, excellent analytical and portfolio management skills; extensive deep networks in sub-Saharan Africa and sterling reputation, further differentiates us from many of our competitors.',
            style: 'text'
          }]
      },
      {
        header: 'Structured Approach to Deal Origination',
        details: [
          {
            dKey: 'a01',
            text: 'We believe superior origination is a competitive advantage that we maintain through a combination of:',
            style: 'subHeader'
          },
          {
            dKey: 'a02',
            text: 'Continually mapping market sectors and engaging associated professional networks.',
            style: 'text'
          },
          {
            dKey: 'a03',
            text: 'Adopting a geographic approach to sourcing investments that positions Cayor as a preferred capital partner and recognized brand, thus driving inbound enquiries.',
            style: 'text'
          }]
      },
      {
        header: 'Drive Returns from Both Deal and Portfolio Management',
        details: [
          {
            dKey: 'd00',
            text: 'We drive returns for our investors in connection with specific transactions AND across the aggregate portfolio by:',
            style: 'text'
          },
          {
            dKey: 'd01',
            text: 'Generate Gross Super Returns:',
            style: 'subHeader'
          },
          {
            dKey: 'd02',
            text: 'We target reasonable entry valuations',
            style: 'text'
          },
          {
            dKey: 'd03',
            text: 'We significantly grow EBITDA by investing in sectors with enduring growth drivers, and in companies with clear, quantifiable and executable value addition plans',
            style: 'text'
          },
          {
            dKey: 'd04',
            text: 'We invest in companies with cash-generative business models where we reward management for working capital and capex management and the pay down of debt',
            style: 'text'
          },
          {
            dKey: 'd05',
            text: 'We drive exits throughout the deal cycle',
            style: 'text'
          },
          {
            dKey: 'd06',
            text: 'Delivering High Net Returns:',
            style: 'subHeader'
          },
          {
          dKey: 'd07',
          text: 'We minimise gross-to-net returns for investors by, amongst other strategies, structuring cash yields from investments to reduce reliance on management fees',
          style: 'text'
        },
        {
          dKey: 'd08',
          text: 'We dynamically construct our investment portfolio by investing across sectors with differentiated risk return profiles and striking a balance between low and higher risk/return opportunities',
          style: 'text'
        }]
      }],
    sectorsTableText: [
      {
        header: 'Financial Services',
        image: Agribusiness,
        template: 'bullet',
        details: [{
          dKey: 'f00',
          text: 'Consumer Finance',
          style: 'text'
        },
        {
          dKey: 'f01',
          text: 'Insurance',
          style: 'text'
        },
        {
          dKey: 'f02',
          text: 'Banking',
          style: 'text'
        },
        {
          dKey: 'f03',
          text: 'Fintech',
          style: 'text'
        },
        {
          dKey: 'f04',
          text: 'Payments',
          style: 'text'
        },
        {
          dKey: 'f05',
          text: 'Financial Infrastructure',
          style: 'text'
        }]
      },
      {
        header: 'Infrastructure Services',
        template: 'bullet',
        image: MiddleClass,
        details: [{
          dKey: 'i00',
          text: 'Materials (E.g.: Steel & Cement)',
          style: 'text'
        },
        {
          dKey: 'i01',
          text: 'Equipment Rentals',
          style: 'text'
        },
        {
          dKey: 'i02',
          text: 'Logistics',
          style: 'text'
        },
        {
          dKey: 'i03',
          text: 'Facilities Management',
          style: 'text'
        },
        {
          dKey: 'i04',
          text: 'Engineering Services',
          style: 'text'
        },
        {
          dKey: 'i05',
          text: 'Repairs & Maintenance',
          style: 'text'
        }]
      },
      {
        header: 'Consumer Goods & Services',
        image: FashionStore,
        template: 'bullet',
        details: [{
          dKey: 'c00',
          text: 'Retail',
          style: 'text'
        },
        {
          dKey: 'c01',
          text: 'Food & Beverage',
          style: 'text'
        },
        {
          dKey: 'c02',
          text: 'FMCG',
          style: 'text'
        },
        {
          dKey: 'c03',
          text: 'Services',
          style: 'text'
        }]
      },
      {
        header: 'Agribusiness',
        image: Agribusiness,
        template: 'bullet',
        details: [{ // eslint-disable-line
          dKey: 'a00',
          text: "Inputs (E.g.: Seeds, Fertilizer & Crop Protection)",
          style: 'text'
        },
        {
          dKey: 'a01',
          text: 'Equipment',
          style: 'text'
        },
        ,
        {
          dKey: 'a02',
          text: 'Storage',
          style: 'text'
        },
        {
          dKey: 'a03',
          text: 'Agri-processing',
          style: 'text'
        },
        {
          dKey: 'a04',
          text: 'Logistics',
          style: 'text'
        }]
      }],
    regionsTableText: [
      {
        header: 'West Africa',
        className: 'west-africa',
        details: [{
          dKey: 'w0',
          text: "Cote D'Ivoire",
          style: 'text'
        },
        {
          dKey: 'w1',
          text: 'Cameroon',
          style: 'text'
        },
        {
          dKey: 'w2',
          text: 'Ghana',
          style: 'text'
        },
        {
          dKey: 'w3',
          text: 'Nigeria',
          style: 'text'
        }]
      },
      {
        header: 'East Africa',
        className: 'east-africa',
        details: [{
          dKey: 'e0',
          text: 'Kenya',
          style: 'text'
        },
        {
          dKey: 'e1',
          text: 'Tanzania',
          style: 'text'
        },
        {
          dKey: 'e2',
          text: 'Uganda',
          style: 'text'
        }]
      },
      {
        header: 'Southern Africa',
        className: 'south-africa',
        details: [{
          dKey: 's0',
          text: 'South Africa',
          style: 'text'
        }]
      }],
    investmentCriteriaTableText: [
      {
        header: 'Deal Type Criteria:',
        details: [{
          dKey: 'c00',
          text: 'We pursue control opportunities as well as take significant minority stakes in companies where we have board representation and a robust set of minority protection rights, which often yield effective control and enable us to drive value and key decisions.',
          style: 'text'
        },
        {
          dKey: 'c01',
          text: 'Growth Capital:',
          style: 'subHeader'
        },
        {
          dKey: 'c02',
          text: 'Provide high growth and profitable mature companies capital to fund their expansion plans',
          style: 'text'
        },
        {
          dKey: 'c03',
          text: 'Acquisition:',
          style: 'subHeader'
        },
        {
          dKey: 'c04',
          text: 'Provide capital to purchase a controlling stake in private companies',
          style: 'text'
        },
        {
          dKey: 'c05',
          text: 'Management Buy Outs (MBO):',
          style: 'subHeader'
        },
        {
          dKey: 'c06',
          text: 'Provide reputable management teams with funding to acquire a controlling stake in private companies',
          style: 'text'
        },
        {
          dKey: 'c07',
          text: 'Replacement:',
          style: 'subHeader'
        },
        {
          dKey: 'c08',
          text: 'Provide capital to acquire equity stakes from shareholders who are seeking to exit',
          style: 'text'
        },
        {
          dKey: 'c09',
          text: 'Other:',
          style: 'subHeader'
        },
        {
          dKey: 'c10',
          text: 'PIPE, Pre-IPO, Quasi Equity and Structured Transactions',
          style: 'text'
        }]
      },
      {
        header: 'Target Company Criteria',
        template: 'other',
        // images: [],
        details: [
        {
          dKey: 's00',
          text: 'We typically invest US$20 - 40 million in businesses with a clear scope for value addition on the basis of a conservative valuation.',
          style: 'text'
        },
        {
          dKey: 's01',
          text: 'Size',
          style: 'header'
        },
        {
          dKey: 's02',
          text: 'Leading market position and strong business fundamentals',
          style: 'text'
        },
        {
          dKey: 's03',
          style: 'text',
          text: 'EBITDA > US$5 million'
        },
        {
          dKey: 'p00',
          text: 'Performance',
          style: 'header'
        },
        {
          dKey: 'p01',
          text: 'Sub-Saharan Africa based businesses with strong growth potential',
          style: 'text'
        },
        {
          dKey: 'p02',
          text: 'Profitable and cash flow positive businesses with favourable working capital dynamics',
          style: 'text'
        },
        {
          dKey: 'm00',
          text: 'Management',
          style: 'header',
        },
        {
          dKey: 'm01',
          text: 'Innovative and experienced management team with proven operational and financial track record',
          style: 'text'
        },
        {
          dKey: 'm02',
          text: 'Strong commitment to good governance and ethics',
          style: 'text'
        },
        {
          dKey: 'm03',
          text: 'Clear commitment to realise an exit over a period of 3 to 7 years',
          style: 'text'
        }]
      }
    ],
    fadeIn: true,
    currentDetailIdx: 0
  }

  handleClick = (e) => {
    console.log('handle sub navigation click', e);
    const { navItems } = this.state;
    const currentNavItem = pickBy(navItems, item => e.target.innerText.toLowerCase() === item.value.toLowerCase());
    const index = Number(findKey(currentNavItem))-1;
    // debugger;
    // const newIndex = navItems.indexOf({value: e.target.innerText)
    this.setState({
      currentDetails: e.target.innerText.toLowerCase(),
      fadeIn: true,
      currentDetailIdx: index
    })
  }

  handleButtonClick = (e) => {
    const { navItems, currentDetailIdx } = this.state;
    // const {text} = this.props;
    const maxIndex = navItems.length-1;

    if (e.target.value === "Next" && currentDetailIdx !== maxIndex){
      this.setState({
        currentDetailIdx: currentDetailIdx +1
      })
    } else if (e.target.value === "Next" && currentDetailIdx === maxIndex){
      this.setState({
        currentDetailIdx: 0
      })
    } else {
      this.setState({
        currentDetailIdx: maxIndex
      })
    }
  }
// refactor this ish
  renderTextDetails() {
    const { currentDetails, currentDetailIdx, fadeIn, investmentCriteriaTableText, sectorsTableText, regionsTableText, cayorApproachTableText } = this.state;

    if (currentDetails === 'the cayor approach' || currentDetails === 'clear investment philosophy' || currentDetails === 'middle market focus' || currentDetails === 'structured deal origination' || currentDetails === 'deal & portfolio mgmt') {
      // debugger
      return (
        <TextTableContainer
          fadeIn={fadeIn}
          currentDetails={currentDetails}
          text={cayorApproachTableText}
          currentDetailIdx={currentDetailIdx}
          handleButtonClick={this.handleButtonClick} />
      )
    } else if (currentDetails === 'investment sectors') {
      // debugger;
      return (
        <SectorsContainer
          fadeIn={fadeIn}
          currentDetails={currentDetails}
          text={ sectorsTableText }
          currentDetailIdx={currentDetailIdx}
          handleButtonClick={this.handleButtonClick} />
      )
    } else if (currentDetails === 'investment criteria' || currentDetails === 'deal type criteria') {
      return (
        <TextTableContainer
          fadeIn={fadeIn}
          currentDetails={currentDetails}
          currentDetailIdx={0}
          text={ investmentCriteriaTableText }
          handleButtonClick={this.handleButtonClick}/>
      )
    } else if (currentDetails === 'target company criteria') {
      return (
        <TextTableContainer
          fadeIn={fadeIn}
          currentDetails={currentDetails}
          currentDetailIdx={1}
          text={ investmentCriteriaTableText }
          handleButtonClick={this.handleButtonClick}/>
      )
    } else if (currentDetails.includes('target regions')) {
      return (
        <RegionDetails
          fadeIn={fadeIn}
          text={ regionsTableText }
          handleButtonClick={this.handleButtonClick} />
      )
    }
  }

  render() {
    const { navItems, currentDetails, currentDetailIdx } = this.state;

    return (
      <div className="approach">
        <Navigation
          history={this.props.history}
          location={this.props.location}
          handleClick={this.props.handleClockClick}
          headerImg='approach' />
        <main className='body'>
          <SubNav
            navItems={navItems}
            match={this.props.match}
            currentDetails={currentDetails}
            handleClick={this.handleClick}
            currentDetailIdx={currentDetailIdx} />
          {this.renderTextDetails()}
        </main>
        <Footer location={this.props.location} />
      </div>
    );
  }
}

export default Approach;

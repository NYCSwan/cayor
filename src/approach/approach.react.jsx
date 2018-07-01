import React, { Component } from 'react';
import SubNav from '../sub_navigation/sub_navigation.react';
import TextTableContainer from '../layout/text-table-container.react';
// import PageDetails from '../layout/pageDetails.react';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';
import RegionDetails from './TargetRegionDetails.react';
import Agribusiness from '../media/world.png';
import FashionStore from '../media/middle_class.jpg';
import MiddleClass from '../media/canal.jpg';
import ConsumerMarket from '../media/consumer-market.jpg';
import SectorsContainer from './SectorDetails.react';
import './approach.css';


class Approach extends Component {
  state = {
    navItems: [
      {value: 'The Cayor Approach', key: 'approach', style: 'top'},
      {value: 'The Middle Market', key: 'middle', style: 'sub'},
      {value: 'Structured Deal Origination', key: 'structuredDeals', style: 'sub'},
      {value: 'Strategy', key: 'strategy', style: 'sub'},
      {value: 'Drive Returns from Both Deal and Portfolio Management', key: 'returns', style: 'sub'},
      {value: 'Investment Sectors', key: 'sectors', style: 'top'},
      {value: 'Investment Criteria', key: 'criteria', style: 'top'},
      {value: 'Target Regions & Countries', key: 'regions', style: 'top'}
    ],
    currentDetails: 'the middle market',
    approachTableText: [{
        header: 'We believe the middle market is attractive for a number of reasons:',
        details: [{
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
        header: 'We believe superior origination is a competitive advantage that we maintain through a combination of:',
        details: [
          {
            dKey:'a01',
            text: 'Continually mapping market sectors and engaging associated professional networks.',
            style: 'text'
          },
          {
            dKey:'s02',
            text: 'Adopting a geographic approach to sourcing investments that positions Cayor as a preferred capital partner and recognized brand, thus driving inbound enquiries.',
            style: 'text'
          }]
      },
      {
        header: 'Cayor’s investment philosophy has clearly defined principles.',
        details: [{
          dKey: 0,
          text: 'Strong Management Team',
          style: 'text'
        },
        {
          dKey: 1,
          text: 'Clearly Identifiable Growth Prospects',
          style: 'text'
        },
        {
          dKey: 2,
          text: 'Cash Flow Generative',
          style: 'text'
        },
        {
          dKey: 3,
          text: 'Scope To Add Value',
          style: 'text'
        },
        {
          dKey: 4,
          text: 'lear Prospects For Exit',
          style: 'text'
        },
        {
          dKey: 5,
          text: 'ESG Excellence',
          style: 'text'
        }]
      },
      {
        header: 'Generate Gross Super Returns:',
        details: [{
          dKey: 0,
          text: 'Target reasonable entry valuations',
          style: 'text'
        },
        {
          dKey: 1,
          text: 'Significantly grow EBITDA',
          style: 'text'
        },
        {
          dKey: 2,
          text: 'Generate cash',
          style: 'text'
        },
        {
          dKey: 3,
          text: 'Drive exits throughout the deal cycle'
        }]
      },
      {
        header: 'Deliver High Net Returns:',
        details: [{
          dKey: 0,
          text: 'Minimise gross-to-net returns for LPs',
          style: 'text'
        },
        {
          dKey: 1,
          text: 'Dynamically construct',
          style: 'text'
        },
        {
          dKey: 2,
          text: 'Manage a diversified portfolio',
          style: 'text'
        }]
      }],
    sectorsTableText: [
      {
        header: 'Financial Services',
        image: Agribusiness,
        template: 'bullet',
        details: [{
          dKey: 0,
          text: 'Consumer Finance',
          style: 'text'
        },
        {
          dKey: 1,
          text: 'Insurance',
          style: 'text'
        },
        {
          dKey: 2,
          text: 'Banking',
          style: 'text'
        },
        {
          dKey: 3,
          text: 'Fintech',
          style: 'text'
        },
        {
          dKey: 4,
          text: 'Payments',
          style: 'text'
        },
        {
          dKey: 5,
          text: 'Financial Infrastructure',
          style: 'text'
        }]
      },
      {
        header: 'Infrastructure Services',
        template: 'bullet',
        image: MiddleClass,
        details: [{
          dKey: 0,
          text: 'Materials (E.g.: Steel & Cement)',
          style: 'text'
        },
        {
          dKey: 1,
          text: 'Equipment Rentals',
          style: 'text'
        },
        {
          dKey: 2,
          text: 'Logistics',
          style: 'text'
        },
        {
          dKey: 3,
          text: 'Facilities Management',
          style: 'text'
        },
        {
          dKey: 4,
          text: 'Engineering Services',
          style: 'text'
        },
        {
          dKey: 5,
          text: 'Repairs & Maintenance',
          style: 'text'
        }]
      },
      {
        header: 'Consumer Goods & Services',
        image: FashionStore,
        template: 'bullet',
        details: [{
          dKey: 0,
          text: 'Retail',
          style: 'text'
        },
        {
          dKey: 1,
          text: 'Food & Beverage',
          style: 'text'
        },
        {
          dKey: 2,
          text: 'FMCG',
          style: 'text'
        },
        {
          dKey: 3,
          text: 'Services',
          style: 'text'
        }]
      },
      {
        header: 'Agribusiness',
        image: Agribusiness,
        template: 'bullet',
        details: [{ // eslint-disable-line
          dKey: 0,
          text: "Inputs (E.g.: Seeds, Fertilizer & Crop Protection)",
          style: 'text'
        },
        {
          dKey: 1,
          text: 'Equipment',
          style: 'text'
        },
        ,
        {
          dKey: 2,
          text: 'Storage',
          style: 'text'
        },
        {
          dKey: 3,
          text: 'Agri-processing',
          style: 'text'
        },
        {
          dKey: 4,
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
    criteriaTableText: [
      {
        header: 'Deal Type Investment Criteria:',
        details: [{
          dKey: 'c00',
          text: 'We take significant minority stake in companies with board representation and a robust set of minority protection rights, which will enable us to drive value and influence key decisions.',
          style: 'text'
        },
        {
          dKey: 'c01',
          text: 'Growth Capital',
          style: 'subHeader'
        },
        {
          dKey: 'c02',
          text: 'Provide high growth and profitable mature companies capital to fund their expansion plans',
          style: 'text'
        },
        {
          dKey: 'c03',
          text: 'Acquisition',
          style: 'subHeader'
        },
        {
          dKey: 'c04',
          text: 'Provide capital to purchase a controlling stake in private companies',
          style: 'text'
        },
        {
          dKey: 'c05',
          text: 'Management Buy Outs (MBO)',
          style: 'subHeader'
        },
        {
          dKey: 'c06',
          text: 'Provide reputable management teams with funding to acquire a controlling stake in private companies',
          style: 'text'
        },
        {
          dKey: 'c07',
          text: 'Replacement',
          style: 'subHeader'
        },
        {
          dKey: 'c08',
          text: 'Provide capital to acquire equity stakes from shareholders who are seeking to exit',
          style: 'text'
        },
        {
          dKey: 'c09',
          text: 'Other',
          style: 'subHeader'
        },
        {
          dKey: 'c10',
          text: 'PIPE, Pre-IPO, Quasi Equity and Structured Transactions',
          style: 'text'
        }]
      },
      {
        header: 'Size',
        template: 'bullet',

        details: [{
          dKey: 's00',
          text: 'Leading market position and strong business fundamentals',
          style: 'text'
        },
        {
          dKey: 's01',
          style: 'text',
          text: 'EBITDA'
        },
        {
          dKey: 's02',
          text: 'US$5 million',
          style: 'text'
        }]
      },
      {
        header: 'Performance',
        image: ConsumerMarket,
        details: [{
          dKey: 'p00',
          text: 'Sub-Saharan Africa based businesses with strong growth potential',
          style: 'text'
        },
        {
          dKey: 'p01',
          text: 'Profitable and cash flow positive businesses with favourable working capital dynamics',
          style: 'text'
        }]
      },
      {
        header: 'Management',
        details: [{
          dKey: 'm00',
          text: 'Innovative and experienced management team with proven operational and financial track record',
          style: 'text'
        },
        {
          dKey: 'm01',
          text: 'Strong commitment to good governance and ethics',
          style: 'text'
        },
        {
          dKey: 'm02',
          text: 'Clear commitment to realise an exit over a period of 3 to 7 years',
          style: 'text'
        }]
      }
    ],
    fadeIn: true
  }

  handleClick = (e) => {
    console.log('handle sub navigation click', e);
    this.setState({
      currentDetails: e.target.innerText.toLowerCase(),
      fadeIn: true
    })
  }
// refactor this ish
  renderTextDetails() {
    const { approachHeader, currentDetails, fadeIn, criteriaTableText, sectorsTableText, regionsTableText, approachTableText } = this.state;

    if (currentDetails === 'the cayor approach') {
      return <TextTableContainer
        fadeIn={fadeIn}
        mainHeader={approachHeader}
        currentDetails={currentDetails}
        text={approachTableText} />
    } else if (currentDetails === 'investment sectors') {
      // debugger;
      return <SectorsContainer
        fadeIn={fadeIn}
        currentDetails={currentDetails}
        text={ sectorsTableText } />
    } else if (currentDetails === 'investment criteria') {
      return <RegionDetails
        fadeIn={fadeIn}
        text={ regionsTableText } />
    } else if (currentDetails.includes('target regions')) {
      return <TextTableContainer
        fadeIn={fadeIn}
        currentDetails={currentDetails}
        text={ criteriaTableText } />
    } else if (currentDetails.includes('the middle')) {
      return  <TextTableContainer
        fadeIn={fadeIn}
      mainHeader={approachHeader}
      currentDetails={currentDetails}
      text={approachTableText}
      newIndex={0} />
    } else if (currentDetails.includes('structured deal')) {
      return  <TextTableContainer
        fadeIn={fadeIn}
      mainHeader={approachHeader}
      currentDetails={currentDetails}
      text={approachTableText}
      newIndex={1} />
    } else if (currentDetails.includes('strategy')) {
      return  <TextTableContainer
        fadeIn={fadeIn}
      mainHeader={approachHeader}
      currentDetails={currentDetails}
      text={approachTableText}
      newIndex={2} />
    } else if (currentDetails.includes('drive')) {
      return  <TextTableContainer
        fadeIn={fadeIn}
      mainHeader={approachHeader}
      currentDetails={currentDetails}
      text={approachTableText}
      newIndex={3} />
    }
  }

  render() {
    const { navItems, currentDetails} = this.state;

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
            handleClick={this.handleClick} />
          {this.renderTextDetails()}
        </main>
        <Footer location={this.props.location} />
      </div>
    );
  }
}

export default Approach;

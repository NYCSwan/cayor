import React, { Component } from 'react';
import SubNav from '../sub_navigation/sub_navigation.react';
import TextTableContainer from '../layout/text-table-container.react';
// import PageDetails from '../layout/pageDetails.react';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';
import RegionDetails from './TargetRegionDetails.react';
import Agribusiness from '../media/world.png';
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
    currentDetails: 'The Cayor Approach',
    approachTableText: [{
        header: 'We believe the middle market is attractive for a number of reasons:',
        template: 'long',
        details: [{
          dkey: 'a00',
          subHeader: 'reduced competition',
          text: 'In our experience to date, there is less competition for middle market assets, resulting in more attractive asset pricing and superior returns for investors.'
        },
        {
          dKey: 'a01',
          subHeader: 'Superior Transaction Flow',
          text: 'We continue to generate attractive transaction flow arising from demand for expansion capital. We target transactions ranging from $20 to $40 million in size because we believe that transactions in this range allow for proprietary transaction flow with lower entry valuations, better corporate governance terms, and greater scope for us to add value and drive growth and returns.'
        },
        {
          dKey: 'a02',
          subHeader: 'The Cayor Advantage',
          text: 'Our team’s cumulative experience, cultural and geographic diversity, excellent analytical and portfolio management skills; extensive deep networks in sub-Saharan Africa and sterling reputation, further differentiates us from many of our competitors.'
        }]
      },
      {
        header: 'We believe superior origination is a competitive advantage that we maintain through a combination of:',
        template: 'long',
        details: [
          {
            dKey:'a01',
            text: 'Continually mapping market sectors and engaging associated professional networks.'
          },
          {
            dKey:'s02',
            text: 'Adopting a geographic approach to sourcing investments that positions Cayor as a preferred capital partner and recognized brand, thus driving inbound enquiries.'
          }]
      },
      {
        header: 'Cayor’s investment philosophy has clearly defined principles.',
        template: 'bullet',
        details: [{
          dKey: 0,
          text: 'Strong Management Team'
        },
        {
          dKey: 1,
          text: 'Clearly Identifiable Growth Prospects'
        },
        {
          dKey: 2,
          text: 'Cash Flow Generative'
        },
        {
          dKey: 3,
          text: 'Scope To Add Value'
        },
        {
          dKey: 4,
          text: 'lear Prospects For Exit'
        },
        {
          dKey: 5,
          text: 'ESG Excellence'
        }]
      },
      {
        header: 'Generate Gross Super Returns:',
        details: [{
          dKey: 0,
          text: 'Target reasonable entry valuations'
        },
        {
          dKey: 1,
          text: 'Significantly grow EBITDA'
        },
        {
          dKey: 2,
          text: 'Generate cash'
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
          text: 'Minimise gross-to-net returns for LPs'
        },
        {
          dKey: 1,
          text: 'Dynamically construct'
        },
        {
          dKey: 2,
          text: 'Manage a diversified portfolio'
        }]
      }],
    sectorsTableText: [
      {
        header: 'Financial Services',
        image: Agribusiness,
        details: [{
          dKey: 0,
          text: 'Consumer Finance'
        },
        {
          dKey: 1,
          text: 'Insurance'
        },
        {
          dKey: 2,
          text: 'Banking'
        },
        {
          dKey: 3,
          text: 'Fintech'
        },
        {
          dKey: 4,
          text: 'Payments'
        },
        {
          dKey: 5,
          text: 'Financial Infrastructure'
        }]
      },
      {
        header: 'Infrastructure Services',
        details: [{
          dKey: 0,
          text: 'Materials (E.g.: Steel & Cement)'
        },
        {
          dKey: 1,
          text: 'Equipment Rentals'
        },
        {
          dKey: 2,
          text: 'Logistics'
        },
        {
          dKey: 3,
          text: 'Facilities Management'
        },
        {
          dKey: 4,
          text: 'Engineering Services'
        },
        {
          dKey: 5,
          text: 'Repairs & Maintenance'
        }]
      },
      {
        header: 'Consumer Goods & Services',
        details: [{
          dKey: 0,
          text: 'Retail'
        },
        {
          dKey: 1,
          text: 'Food & Beverage'
        },
        {
          dKey: 2,
          text: 'FMCG'
        },
        {
          dKey: 3,
          text: 'Services'
        }]
      },
      {
        header: 'Agribusiness',
        image: Agribusiness,
        details: [{ // eslint-disable-line
          dKey: 0,
          text: "Inputs (E.g.: Seeds, Fertilizer & Crop Protection)"
        },
        {
          dKey: 1,
          text: 'Equipment'
        },
        ,
        {
          dKey: 2,
          text: 'Storage'
        },
        {
          dKey: 3,
          text: 'Agri-processing'
        },
        {
          dKey: 4,
          text: 'Logistics'
        }]
      }],
    regionsTableText: [
      {
        header: 'West Africa',
        className: 'west-africa',
        details: [{
          dKey: 'w0',
          text: "Cote D'Ivoire"
        },
        {
          dKey: 'w1',
          text: 'Cameroon'
        },
        {
          dKey: 'w2',
          text: 'Ghana'
        },
        {
          dKey: 'w3',
          text: 'Nigeria'
        }]
      },
      {
        header: 'East Africa',
        className: 'east-africa',
        details: [{
          dKey: 'e0',
          text: 'Kenya'
        },
        {
          dKey: 'e1',
          text: 'Tanzania'
        },
        {
          dKey: 'e2',
          text: 'Uganda'
        }]
      },
      {
        header: 'Southern Africa',
        className: 'south-africa',
        details: [{
          dKey: 's0',
          text: 'South Africa'
        }]
      }],
    criteriaTableText: [
      {
        header: 'Deal Type Investment Criteria:',
        details: [{
          dKey: 0,
          text: 'We take significant minority stake in companies with board representation and a robust set of minority protection rights, which will enable us to drive value and influence key decisions.'
        },
        {
          dKey: 1,
          text: 'Growth Capital: Provide high growth and profitable mature companies capital to fund their expansion plans'
        },
        {
          dKey: 2,
          text: 'Acquisition: Provide capital to purchase a controlling stake in private companies'
        },
        {
          dKey: 3,
          text: 'Management Buy Outs (MBO): Provide reputable management teams with funding to acquire a controlling stake in private companies'
        },
        {
          dKey: 4,
          text: 'Replacement: Provide capital to acquire equity stakes from shareholders who are seeking to exit'
        },
        {
          dKey: 5,
          text: 'Other: PIPE, Pre-IPO, Quasi Equity and Structured Transactions'
        }]
      },
      {
        header: 'Size',
        details: [{
          dKey: 0,
          text: 'Leading market position and strong business fundamentals'
        },
        {
          dKey: 1,
          text: 'EBITDA'
        },
        {
          dKey: 2,
          text: 'US$5 million'
        }]
      },
      {
        header: 'Performance',
        details: [{
          dKey: 0,
          text: 'Sub-Saharan Africa based businesses with strong growth potential'
        },
        {
          dKey: 1,
          text: 'Profitable and cash flow positive businesses with favourable working capital dynamics'
        }]
      },
      {
        header: 'Management',
        details: [{
          dKey: 0,
          text: 'Innovative and experienced management team with proven operational and financial track record'
        },
        {
          dKey: 1,
          text: 'Strong commitment to good governance and ethics'
        },
        {
          dKey: 2,
          text: 'Clear commitment to realise an exit over a period of 3 to 7 years'
        }]
      }
    ],
    fadeIn: true
  }

  handleClick = (e) => {
    console.log('handle sub navigation click', e);
    this.setState({
      currentDetails: e.target.innerText,
      fadeIn: true
    })
  }

  renderTextDetails() {
    const { approachHeader, currentDetails, fadeIn, criteriaTableText, sectorsTableText, regionsTableText, approachTableText } = this.state;

    if (currentDetails === 'The Cayor Approach') {
      return <TextTableContainer
        fadeIn={fadeIn}
        mainHeader={approachHeader}
        currentDetails={currentDetails}
        text={approachTableText} />
    } else if (currentDetails === 'Investment Sectors') {
      return <TextTableContainer
        fadeIn={fadeIn}
        currentDetails={currentDetails}
        text={ sectorsTableText } />
    } else if (currentDetails === 'Target Regions & Countries') {
      return <RegionDetails
        fadeIn={fadeIn}
        text={ regionsTableText } />
    } else {
      return <TextTableContainer
        fadeIn={fadeIn}
        currentDetails={currentDetails}
        text={ criteriaTableText } />
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

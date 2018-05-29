import React, { Component } from 'react';
import SubNav from '../sub_navigation/sub_navigation.react';
import TextTableContainer from '../layout/text-table-container.react';
import PageDetails from '../layout/pageDetails.react';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';
import RegionDetails from './TargetRegionDetails.react';
import './approach.css';

class Approach extends Component {
  state = {
    navItems: [
      {value: 'The Cayor Approach', url: 'approach'},
      {value: 'Investment Sectors', url: 'sectors'},
      {value: 'Investment Criteria', url: 'criteria'},
      {value: 'Target Regions & Countries', url: 'regions'}
    ],
    currentDetails: 'The Cayor Approach',
    approachHeader: "Target the Middle Market",
    approachText: ['Cayor defines the middle market as investments in the $20 to $40 million range, with capital delivered from Funds ranging from $200 to $300 million in size.'],
    approachTableText: [
      {
        header: 'We believe the middle market is attractive for a number of reasons:',
        details: [{
          dKey: 0,
          text: 'Reduced Competition: there is less competition for middle market assets, which will yield more attractive asset pricing and superior returns for investors.'
        },
        {
          dKey: 1,
          text: 'Superior Transaction Flow: we continue to generate attractive deal flow as a result of demand for expansion capital from companies seeking to benefit from high growth rates in Sub-Saharan African markets.'
        },
        {
          dKey: 2,
          text: 'Our target transactions allow for: proprietary deals with lower entry valuations, better corporate governance terms, and greater scope for Cayor to add value and drive growth and returns.'
        },
        {
          dKey: 3,
          text: 'Cayor’s Competitive Advantage: our team’s combined experience executing transactions in the middle market space, and across the target geographies and sectors, gives Cayor a comparative advantage.'
        },
        {
          dKey: 4,
          text: 'Cayor’s distinctive characteristics further differentiate us from our competitors. We represent cultural and geographic diversity, possess excellent analytical and portfolio management skills, have extensive networks in Sub-Saharan Africa and maintain a sterling reputation.'
        }]
      },
      {
        header: 'Structured & Proprietary Deal Flow:',
        details: [
          {
            dKey:0,
            text: 'Map sectors to identify attractive targets'
          },
          {
            dKey:1,
            text: 'Develop shadow portfolio of target companies'
          },
          {
            dKey:2,
            text: 'Access corporate M&A decision-makers'
          },
          {
            dKey:3,
            text: 'Build relationships with key stakeholders'
          }]
      },
      {
        header: 'Strategy With A Clear Investment Philosophy:',
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
        details: [{
          dKey: 0,
          text: "Cote D'Ivoire"
        },
        {
          dKey: 1,
          text: 'Cameroon'
        },
        {
          dKey: 2,
          text: 'Ghana'
        },
        {
          dKey: 3,
          text: 'Nigeria'
        }]
      },
      {
        header: 'East Africa',
        details: [{
          dKey: 0,
          text: 'Kenya'
        },
        {
          dKey: 1,
          text: 'Tanzania'
        },
        {
          dKey: 2,
          text: 'Uganda'
        }]
      },
      {
        header: 'Southern Africa',
        details: [{
          dKey: 0,
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
    ]
  }

  handleClick = (e) => {
    console.log('handle sub navigation click', e);
    this.setState({
      currentDetails: e.target.innerText
    })
  }

  renderTextDetails() {
    const {currentDetails, criteriaTableText, sectorsTableText, regionsTableText, approachTableText} = this.state;

    if (currentDetails === 'The Cayor Approach') {
      return <TextTableContainer
        currentDetails={currentDetails}
        text={approachTableText} />
    } else if (currentDetails === 'Investment Sectors') {
      return <TextTableContainer
        currentDetails={currentDetails}
        text={ sectorsTableText } />
    } else if (currentDetails === 'Target Regions & Countries') {
      return <RegionDetails
        text={ regionsTableText } />
    } else {
      return <TextTableContainer
        currentDetails={currentDetails}
        text={ criteriaTableText } />
    }
  }

  render() {
    const { navItems, approachText, fadeIn, currentDetails} = this.state;

    return (
      <div className="approach">
        <Navigation
          history={this.props.history}
          location={this.props.location}
          handleClick={this.props.handleClick}
          headerImg='approach' />
        <SubNav
          navItems={navItems}
          match={this.props.match}
          currentDetails={currentDetails}
          handleClick={this.handleClick} />
        { currentDetails === 'The Cayor Approach' ?
          <PageDetails
          fadeIn={fadeIn}
          pageDetails={approachText} />
          : null
        }
          {this.renderTextDetails()}
        <Footer />
      </div>
    );
  }
}

export default Approach;

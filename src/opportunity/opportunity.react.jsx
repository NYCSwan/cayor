import React, { Component } from 'react';
// import AfricaDetails from './AfricaDetails.react';
// import WhyCayorDetails from './WhyCayorDetails.react';
// import CayorPerspectiveDetails from './CayorPerspectiveDetails.react';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';
import SubNav from '../sub_navigation/sub_navigation.react';
import TextTableContainer from '../layout/text-table-container.react';
import PageDetails from '../layout/pageDetails.react';

import './opportunity.css';

class Opportunities extends Component {
  state = {
    currentDetails: 'Africa Opportunity',
    navItems: [
      {value: 'Africa Opportunity', url: 'africa', style: 'top'},
      {value: 'Why Cayor', url: 'cayor', style: 'top'}
    ],
    africaText: ['We believe that the consumer goods & services, infrastructure, financial services and agriculture sectors will be engines of growth across the continent, providing the most attractive investment opportunities and potential for sustainable value creation.','The Africa private equity landscape is shifting: existing GPs are moving up in fund size and pursuing larger transactions in excess of $50 million. Conversely, regional or country specific funds, due to their smaller sizes, are typically investing less than $20 million per transaction.'],
    africaTableText: [
      {
        header: 'Our thesis is that demographic and structural shifts will drive economic growth in Africa, including:',
        details: [{
          dKey: 0,
          text: "growth in consumer demand;"
        },
        {
          dKey: 1,
          text: 'closing the infrastructure deficit gap;'
        },
        {
          dKey: 2,
          text: 'increased financial inclusion;'
        },
        {
          dKey: 3,
          text: 'And expansion of agricultural output'
        }]
    }],
    whyTableText: [
      {
        header: 'Experienced Africa Private Equity Investors:',
        details: [{
          dKey: 0,
          text: '30 years of experience in and across Africa'
        },
        {
          dKey: 1,
          text: 'Together Cayor has evaluated in excess of 300 investment opportunities and invested in 11 companies'
        },
        {
          dKey: 2,
          text: 'Our team has acquired unique investment knowledge related to increasing and monetizing shareholder value; while avoiding market and region specific pitfalls'
        }]
      },
      {
        header: 'Extensive Africa Network:',
        details: [{
          dKey: 0,
          text: 'We are native Africans in our 30s and 40s, and our peers are decision makers across Africa in government and in boardrooms'
        },
        {
          dKey: 1,
          text: 'We have a history of successfully collaborating with industry experts, managers and advisors to improve financial performance of portfolio companies'
        },
        {
          dKey: 2,
          text: 'The Cayor team leverages our network to originate, evaluate and exit investments'
        }]
      },
      {
        header: 'Entrepreneurial:',
        details: [{
          dKey: 0,
          text: 'Cayor’s approach to generating value aligns with the needs of mid-market owners and managers focused on sustainable growth'
        },
        {
          dKey: 1,
          text: 'Cayor is structured to be flat and efficient, enhanced by highly responsive decision-making; with our Managing Partners engaging hands-on in transaction execution and based in Africa'
        },
        {
          dKey: 2,
          text: 'We are well-versed in African cultural norms and aspirations affecting business, resulting in our ability to effectively build rapport with African business owners'
        }]
      },
      {
        header: 'Trusted Partnerships:',
        details: [
          {
            dKey: 0,
            text: 'Cayor can easily provide prospective partners with endorsements of the owners and managers from the companies across our previous portfolios.'
          },
          {
            dKey: 1,
            text: 'The team is always willing to invest the necessary time upfront, to proactively develop a deep relationship with potential partners, even prior to investment'
          }
        ]
      }
    ],
    fadeIn: true
  }

  handleClick = (e) => {
    console.log('handle sub navigation click', e);
    // debugger;
    this.setState({
      currentDetails: e.target.innerText,
      fadeIn: true
    })
  }

  renderDetails() {
    console.log('renderDetails');
    const {currentDetails, africaTableText, whyTableText} = this.state;
    if (currentDetails === 'Africa Opportunity') {
      return <TextTableContainer
        currentDetails={currentDetails}
        text={africaTableText}/>
    } else {
      return <TextTableContainer
        currentDetails={currentDetails}
        text={ whyTableText }/>;
    }
  }

  render() {
    const { currentDetails, navItems, africaText } = this.state;

    return (
      <div className="opportunity">
        <Navigation
          history={this.props.history}
          location={this.props.location}
          handleClick={this.props.handleClick}
          headerImg='opportunity' />
        <SubNav
          navItems={navItems}
          match={this.props.match}
          handleClick={this.handleClick}
          currentDetails={currentDetails} />
        { this.renderDetails() }
        { currentDetails === 'Africa Opportunity' ?
          <PageDetails
            fadeIn={this.state.fadeIn}
            pageDetails={africaText} />
          : null
        }
        <Footer location={this.props.location} />
      </div>
    );
  }
}

export default Opportunities;

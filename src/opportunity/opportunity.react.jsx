import React, { Component } from 'react';
// import AfricaDetails from './AfricaDetails.react';
// import WhyCayorDetails from './WhyCayorDetails.react';
// import CayorPerspectiveDetails from './CayorPerspectiveDetails.react';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';
import SubNav from '../sub_navigation/sub_navigation.react';
import TextTableContainer from '../layout/text-table-container.react';
import PageDetails from '../layout/pageDetails.react';
import Demographics from '../media/canal.jpg';

import './opportunity.css';

class Opportunities extends Component {
  state = {
    currentDetails: 'experienced africa private equity investors',
    navItems: [
      {value: 'Why Cayor', url: 'cayor', style: 'top'},
      {value: 'Experienced Africa Private Equity Investors', url: 'experienced_investors', style: 'sub'},
      {value: 'Extensive Africa Network', url: 'african_network', style: 'sub'},
      {value: 'Entrepreneurial', url: 'entrepreneurial', style: 'sub'},
      {value: 'Trusted Partnerships', url: 'partnerships', style: 'sub'},
      {value: 'Why Africa', url: 'africa', style: 'top'},

    ],
    africaTableText: [
      {
        header: 'Our thesis is that demographic and structural shifts will drive economic growth in Africa, including:',
        template: 'other',
        // image: Demographics,
        details: [
          {
            dKey: 'w00',
            text: 'We believe that the consumer goods & services, infrastructure, financial services and agriculture sectors will be engines of growth across the continent, providing the most attractive investment opportunities and potential for sustainable value creation.',
            style: 'text'
          },
          {
            dKey: 'w01',
            text: 'Our thesis is that demographic and structural shifts will drive economic growth in Africa, including:',
            style: 'subHeader'
          },
          {
            dKey: 'w02',
            text: "Growth in consumer demand;",
            style: 'text'
          },
          {
            dKey: 'w03',
            text: 'Closing the infrastructure deficit gap;',
            style: 'text'
          },
          {
            dKey: 'w04',
            text: 'Increased financial inclusion;',
            style: 'text'
          },
          {
            dKey: 'w05',
            text: 'And expansion of agricultural output',
            style: 'text'
          }
        ]
    }],
    whyCayorTableText: [
      {
        header: 'Experienced Africa Private Equity Investors:',
        details: [{
          dKey: 'i00',
          text: 'We are Seasoned private equity investors with investment experience gained in Africa over a combined 30 years',
          style: 'subHeader'
        },
        {
          dKey: 'i01',
          text: 'In prior roles, we evaluated in excess of 300 investment opportunities and invested in 11 companies, and as a result acquired invaluable investment knowledge related to what pitfalls to avoid and how to increase, and monetize, shareholder value',
          style: 'text'
        },
        {
          dKey: 'i02',
          text: 'We are well-grounded in private equity having risen to partnership/senior management in internationally recognized and established principal investment firms',
          style: 'text'
        },
        {
          dKey: 'i03',
          text: 'We leverage tactical and strategic investment approaches in deal execution to achieve superior returns for our investors',
          style: 'text'
        },
        {
          dKey: 'i04',
          text: 'We have an established track record of leading successful and difficult investments with invaluable lessons learnt and have invested different vintage funds through up and down cycles.  We are as a result experienced in navigating exogenous factors',
          style: 'text'
        }]
      },
      {
        header: 'Extensive Africa Network:',
        details: [{
          dKey: 'n00',
          text: 'We are native Africans with peers who are now key decision makers across Africa in government and in boardrooms',
          style: 'subHeader'
        },
        {
          dKey: 'n01',
          text: 'We have a track record of successfully collaborating with industry experts, managers and advisors to improve financial performance of portfolio companies',
          style: 'text'
        },
        {
          dKey: 'n02',
          text: 'We continue to successfully leverage our extensive network to originate, evaluate, monitor and exit investments',
          style: 'text'
        }]
      },
      {
        header: 'Entrepreneurial:',
        details: [{
          dKey: 'e00',
          text: 'As a newly established and growing company, we can identify with mid-market owners and managers',
          style: 'subHeader'
        },
        {
          dKey: 'e01',
          text: 'Our flat and highly responsive decision-making structure (Investment Committee consists of the Partners who are hands on in transaction execution and are based in Africa) allows for a higher level of flexibility and responsiveness, crucial for complex and often challenging Africa transactions',
          style: 'text'
        },
        {
          dKey: 'e02',
          text: 'Our sensitivity to African cultural norms and owners’ aspirations, that affect business operations and outcomes, helps build rapport with African business owners',
          style: 'text'
        }]
      },
      {
        header: 'Trusted Partnerships:',
        details: [
          {
            dKey: 'p00',
            text: 'We are easily referenced with owners and managers from previous portfolio companies',
            style: 'subHeader'
          },
          {
            dKey: 'p01',
            text: 'We are willing to invest considerable time and resources to develop relationships with business owners prior to financial close, which is often a key consideration to successfully consummating, and most importantly, managing Africa investments',
            style: 'text'
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
      currentDetails: e.target.innerText.toLowerCase(),
      fadeIn: true
    })
  }

  renderDetails() {
    console.log('renderDetails');
    const {currentDetails, fadeIn, africaTableText, whyCayorTableText} = this.state;
    if (currentDetails === 'why africa') {
      return <TextTableContainer
        fadeIn={fadeIn}
        currentDetails={currentDetails}
        text={africaTableText}/>
    } else {
      return <TextTableContainer
        fadeIn={fadeIn}
        currentDetails={currentDetails}
        text={ whyCayorTableText }/>;
    }
  }

  render() {
    const { currentDetails, navItems, africaTableText } = this.state;

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
        {/* currentDetails === 'why africa' ?
          <PageDetails
            fadeIn={this.state.fadeIn}
            pageDetails={africaTableText} />
          : null
        */}
        <Footer location={this.props.location} />
      </div>
    );
  }
}

export default Opportunities;

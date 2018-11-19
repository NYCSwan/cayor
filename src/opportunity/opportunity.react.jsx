import React, { Component } from 'react';
import findKey from 'lodash/findKey';
import pickBy from 'lodash/pickBy';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';
import SubNav from '../sub_navigation/sub_navigation.react';
import TextTableContainer from '../layout/text-table-container.react';

import './opportunity.css';

class Opportunities extends Component {
  state = {
    currentDetails: 'experienced africa private equity investors',
    navItems: [
      { value: 'Why Cayor', url: 'cayor', style: 'top' },
      {
        value: 'Experienced Africa Private Equity Investors',
        url: 'experienced_investors',
        style: 'sub',
      },
      {
        value: 'Extensive Africa Network',
        url: 'african_network',
        style: 'sub',
      },
      { value: 'Entrepreneurial', url: 'entrepreneurial', style: 'sub' },
      { value: 'Trusted Partnerships', url: 'partnerships', style: 'sub' },
      { value: 'Why Africa', url: 'africa', style: 'top' },
    ],
    whyAfricaTableText: [
      {
        header:
          'Demographic & cultural shifts will drive economic growth in African mid markets',
        template: 'other',
        details: [
          {
            dKey: 'w01',
            text:
              'We believe that the consumer goods & services, infrastructure, financial services and agriculture sectors will be engines of growth across the continent, providing the most attractive investment opportunities and potential for sustainable value creation.',
            style: 'subHeader',
          },
          {
            dKey: 'w02',
            text:
              'Our thesis is that demographic and structural shifts will drive economic growth in Africa, including:',
            style: 'text',
          },
          {
            dKey: 'w03',
            text: 'Growth in consumer demand',
            style: 'text bullet',
          },
          {
            dKey: 'w04',
            text: 'Closing the infrastructure deficit gap',
            style: 'text bullet',
          },
          {
            dKey: 'w05',
            text: 'Increased financial inclusion',
            style: 'text bullet',
          },
          {
            dKey: 'w06',
            text: 'And expansion of agricultural output',
            style: 'text bullet',
          },
        ],
      },
    ],
    whyCayorTableText: [
      {
        header: 'Experienced Africa Private Equity Investors',
        details: [
          {
            dKey: 'i00',
            text:
              'We are well-grounded in private equity having risen to partnership/senior management in internationally recognized and established principal investment firms',
            style: 'subHeader',
          },
          {
            dKey: 'i01',
            text:
              'We are Seasoned private equity investors with investment experience gained in Africa over a combined 30 years',
            style: 'text',
          },
          {
            dKey: 'i02',
            text:
              'In prior roles, we evaluated in excess of 300 investment opportunities and invested in 11 companies, and as a result acquired invaluable investment knowledge related to what pitfalls to avoid and how to increase, and monetize, shareholder value',
            style: 'text',
          },
          {
            dKey: 'i03',
            text:
              'We leverage tactical and strategic investment approaches in deal execution to achieve superior returns for our investors',
            style: 'text',
          },
          {
            dKey: 'i04',
            text:
              'We have an established track record of leading successful and difficult investments with invaluable lessons learnt and have invested different vintage funds through up and down cycles.  We are as a result experienced in navigating exogenous factors',
            style: 'text',
          },
        ],
      },
      {
        header: 'Extensive Africa Network',
        details: [
          {
            dKey: 'n00',
            text:
              'We have an extensive network of industry experts, managers,  advisors, and a successful track record of collaborating with these partners to improve financial performance of portfolio companies',
            style: 'subHeader',
          },
          {
            dKey: 'n01',
            text:
              'We are native Africans with peers who are now key decision makers across Africa in government and in boardrooms',
            style: 'text',
          },
          {
            dKey: 'n02',
            text:
              'We continue to successfully leverage our extensive network to originate, evaluate, monitor and exit investments',
            style: 'text',
          },
        ],
      },
      {
        header: 'Entrepreneurial',
        details: [
          {
            dKey: 'e00',
            text:
              'As a newly established and growing company, we can identify with mid market owners and managers',
            style: 'subHeader',
          },
          {
            dKey: 'e01',
            text:
              'We are able to quickly identify value and opportunity where others may not while managing down side risk. Our flat and highly responsive decision-making structure allows for a higher level of flexibility and responsiveness, crucial for complex and often challenging Africa transactions',
            style: 'text',
          },
        ],
      },
      {
        header: 'Trusted Partnerships',
        details: [
          {
            dKey: 'p00',
            text:
              'We are easily referenced with owners and managers from previous portfolio companies',
            style: 'subHeader',
          },
          {
            dKey: 'p01',
            text:
              'We are willing to invest considerable time and resources to develop relationships with business owners prior to financial close, which is often a key consideration to successfully consummating, and most importantly, managing Africa investments',
            style: 'text',
          },
        ],
      },
    ],
    fadeIn: true,
    currentDetailIdx: 0,
    buttonDisabled: false,
  };

  handleClick = e => {
    console.log('handle sub navigation click opportunity');
    const { navItems } = this.state;
    const currentNavItem = pickBy(
      navItems,
      item => e.target.innerText.toLowerCase() === item.value.toLowerCase()
    );
    const index = Number(findKey(currentNavItem));
    if (index === 5) {
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
    const { currentDetailIdx, navItems } = this.state;
    // const {text} = this.props;
    const maxIndex = navItems.length - 1;
    const index = currentDetailIdx + 1;
    const details = navItems[index + 1].value.toLowerCase();
    if (currentDetailIdx === -1) {
      this.setState({
        currentDetailIdx: index,
        currentDetails: 'experienced africa private equity investors',
        buttonDisabled: false,
      });
    } else if (currentDetailIdx === 0) {
      this.setState({
        currentDetailIdx: index,
        currentDetails: 'extensive africa network',
        buttonDisabled: false,
      });
      // } else if (index === 3) {
      //   this.setState({
      //     currentDetailIdx: index,
      //     currentDetails: details,
      //     buttonDisabled: true,
      //   });
    } else if (currentDetailIdx !== maxIndex) {
      this.setState({
        currentDetailIdx: index,
        currentDetails: details,
        buttonDisabled: false,
      });
    } else {
      debugger;
      this.setState({
        currentDetailIdx: maxIndex,
        currentDetails: details,
        buttonDisabled: true,
      });
    }
  };

  renderDetails() {
    console.log('renderDetails');
    const {
      currentDetails,
      currentDetailIdx,
      fadeIn,
      whyAfricaTableText,
      whyCayorTableText,
      buttonDisabled,
    } = this.state;
    if (currentDetails === 'why africa') {
      debugger;
      return (
        <TextTableContainer
          fadeIn={fadeIn}
          disabled={buttonDisabled}
          currentDetails={currentDetails}
          text={whyAfricaTableText}
          currentDetailIdx={0}
          handleButtonClick={this.handleButtonClick}
        />
      );
    } else if (currentDetails === 'why cayor') {
      return (
        <TextTableContainer
          disabled={buttonDisabled}
          fadeIn={fadeIn}
          currentDetails={currentDetails}
          text={whyCayorTableText}
          currentDetailIdx={0}
          handleButtonClick={this.handleButtonClick}
        />
      );
    } else {
      return (
        <TextTableContainer
          fadeIn={fadeIn}
          disabled={buttonDisabled}
          currentDetails={currentDetails}
          text={whyCayorTableText}
          currentDetailIdx={currentDetailIdx}
          handleButtonClick={this.handleButtonClick}
        />
      );
    }
  }

  render() {
    const { currentDetails, navItems, fadeIn, currentDetailIdx } = this.state;
    const { width, height } = this.props;
    return (
      <div
        className="opportunity"
        style={{ maxHeight: height, maxWidth: width }}
      >
        <Navigation
          fadeIn={fadeIn}
          history={this.props.history}
          location={this.props.location}
          handleClose={this.props.handleClose}
          handleClockClick={this.props.handleClockClick}
          isContactModalOpen={this.props.isContactModalOpen}
          headerImg="opportunity"
        />
        <SubNav
          navItems={navItems}
          match={this.props.match}
          handleClick={this.handleClick}
          currentDetails={currentDetails}
          currentDetailIdx={currentDetailIdx}
        />
        {this.renderDetails()}
        <Footer location={this.props.location} />
      </div>
    );
  }
}

export default Opportunities;

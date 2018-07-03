import React, { Component } from 'react';
import findKey from 'lodash/findKey';
import pickBy from 'lodash/pickBy';

import TextTableContainer from '../layout/text-table-container.react';
// import PageDetails from '../layout/pageDetails.react';
import SubNav from '../sub_navigation/sub_navigation.react';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';
import Business from '../media/business.jpg'
import './esg.css';

class Esg extends Component {
  state = {
    currentDetails: 'esg philosophy',
    navItems: [
      {value: 'ESG Philosophy', key: 'philosophy', style: 'top'},
      {value: 'ESG Strategy', key: 'strategy', style: 'top'},
      {value: 'ESG Framework', key: 'framework', style: 'top'}
    ],
    philosophyTextTable: [
      {
        header: 'Cayor\'s ESG Philosophy',
        details: [
        {
          dKey: 'p00',
          text: 'We consider our approach to responsible investing to be both risk and return focused.',
          style: 'subHeader'
        },
        {
          dKey: 'p01',
          text: 'ESG factors inform our investment decision-making and ownership practices. We believe researching, assessing and managing ESG factors will enhance our ability to meet the long-term investment objectives for our fund. With regard to establishing a trade-off between impact and returns, we do not see ESG considerations as being contradictory to our commercial objectives.',
          style: 'text'
        },
        {
          dKey: 'p02',
          text: 'Rather, we seek to identify opportunities for enhancing the internal efficiencies and market opportunities of our portfolio companies through ESG management, while reducing the risks associated with our investment process. This approach is premised on the tenet that active ownership can add sustained value at exit and to the advancement of sustainable development within Africa.',
          style: 'text'
        }]
      }
    ],
    strategyTextTable: [
      {
        header: 'Cayor\'s ESG Strategy',
        details: [
          {
            dKey: 's00',
            text: 'We have developed a strategy to achieve the requisite balance between environmental and social impact and generating commercial returns, all of which is underpinned by our ESG philosophy.',
            style: 'subHeader'
          },
          {
            dKey: 's01',
            text: 'Starting at the initial stages of the investment process, we apply the principles described below to the Fund’s portfolio companies and their operational activities. Post-investment, we will closely monitor progress on ESG matters and compliance by portfolio companies relative to Cayor’s ESG framework and policy guidelines.',
            style: 'text'
          }
        ]
      }
    ],
    frameworkTableText: [
      {
        header: 'Our Framework and Policy Guidelines support the following objectives:',
        template: 'bullet',
        details: [{
          dKey: 'f00',
          text: 'Policy',
          style: 'subHeader'
        },
        {
          dKey: 'f08',
          text: 'To adhere to the UNPRI, and the IFC performance standards;',
          style: 'text'
        },
        {
          dKey: 'f01',
          text: 'To partner with appropriate ESG experts to provide independent guidance on best international practice relating to ESG matters;',
          style: 'text'
        },
        {
          dKey: 'f07',
          text: 'To fulfill the requirements of applicable National, Provincial and Local legislation where our portfolio companies operate;',
          style: 'text'
        },
        {
          dKey: 'f09',
          text: 'Process',
          style: 'subHeader'
        },
        {
          dKey: 'f03',
          text: 'To integrate ESG into our investment management framework through our ESG management system;',
          style: 'text'
        },
        {
          dKey: 'f02',
          text: 'To conduct ESG due diligence assessments on all potential investment opportunities to requisite specifications, as required;',
          style: 'text'
        },
        {
          dKey: 'f05',
          text: 'To implement reasonable precautions to protect the health and safety of portfolio company employees and any external parties such as affected communities; and',
          style: 'text'
        },
        {
          dKey: 'f10',
          text: 'Management',
          style: 'subHeader'
        },
        {
          dKey: 'f04',
          text: 'To communicate and work closely with investee companies to ensure management and employees’ understanding and shared commitment to conformance with our policy;',
          style: 'text'
        },
        {
          dKey: 'f06',
          text: 'To implement responsible practices to ensure that good governance will enhance the reputation of the Fund and Cayor brand at all times',
          style: 'text'
        }]
      }
    ],
    fadeIn: true,
    currentDetailIdx: 0
  }

  handleClick = (e) => {
    console.log('handle sub navigation click esg');
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


  renderDetails() {
    console.log('renderDetails');
    const {currentDetails, fadeIn, philosophyTextTable, strategyTextTable, frameworkTableText} = this.state;
    if (currentDetails === 'esg philosophy') {
      return (
        <TextTableContainer
          fadeIn={fadeIn}
          currentDetails={currentDetails}
          text={philosophyTextTable}
          currentDetailIdx={0}
          handleButtonClick={this.handleButtonClick} />
      )
    } else if (currentDetails === 'esg strategy'){
      return (
        <TextTableContainer
          fadeIn={fadeIn}
          currentDetails={currentDetails}
          text={ strategyTextTable }
          currentDetailIdx={0}
          handleButtonClick={this.handleButtonClick} />
      );
    } else {
      return (
        <TextTableContainer
          fadeIn={fadeIn}
          currentDetails={currentDetails}
          text={ frameworkTableText }
          currentDetailIdx={0}
          handleButtonClick={this.handleButtonClick} />
      );
    }
  }

  render() {
    const { currentDetails, currentDetailIdx, fadeIn, navItems } = this.state;
    return (
      <div className="esg">
        <Navigation
          fadeIn={fadeIn}
          history={this.props.history}
          location={this.props.location}          handleClose={this.props.handleClose}
          handleClockClick={this.props.handleClockClick}          isContactModalOpen={this.props.isContactModalOpen}
          headerImg='esg' />
          <main className='body'>
            <SubNav
              navItems={navItems}
              match={this.props.match}
              handleClick={this.handleClick}
              currentDetails={currentDetails}
              currentDetailIdx={currentDetailIdx}
              fadeIn={fadeIn} />
              { this.renderDetails() }
          </main>
        <Footer location={this.props.location} />
      </div>
    );
  }
}

export default Esg;

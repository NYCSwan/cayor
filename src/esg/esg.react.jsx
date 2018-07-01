import React, { Component } from 'react';
import TextTableContainer from '../layout/text-table-container.react';
import PageDetails from '../layout/pageDetails.react';
import SubNav from '../sub_navigation/sub_navigation.react';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';
import Business from '../media/business.jpg'
import './esg.css';

class Esg extends Component {
  state = {
    currentDetails: 'philosophy',
    navItems: [
      {value: 'ESG Philosophy', key: 'philosophy', style: 'top'},
      {value: 'ESG Strategy', key: 'strategy', style: 'top'},
      {value: 'ESG Framework', key: 'framework', style: 'top'}
    ],
    philosophyText: [
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
    }],
    frameworkTableText: [
      {
        header: 'Our Framework and Policy Guidelines support the following objectives:',
        template: 'bullet',
        image: Business,
        details: [{
          dKey: 'f00',
          text: 'To adhere to the UNPRI, and the IFC performance standards;',
          style: 'text'
        },
        {
          dKey: 'f07',
          text: 'To integrate ESG into our investment management framework through our ESG management system;',
          style: 'text'
        },
        {
          dKey: 'f01',
          text: 'To partner with appropriate ESG experts to provide independent guidance on best international practice relating to ESG matters;',
          style: 'text'
        },
        {
          dKey: 'f02',
          text: 'To conduct ESG due diligence assessments on all potential investment opportunities to requisite specifications, as required;',
          style: 'text'
        },
        {
          dKey: 'f03',
          text: 'To fulfill the requirements of applicable National, Provincial and Local legislation where our portfolio companies operate;',
          style: 'text'
        },
        {
          dKey: 'f04',
          text: 'To communicate and work closely with investee companies to ensure management and employees’ understanding and shared commitment to conformance with our policy;',
          style: 'text'
        },
        {
          dKey: 'f05',
          text: 'To implement reasonable precautions to protect the health and safety of portfolio company employees and any external parties such as affected communities; and',
          style: 'text'
        },
        {
          dKey: 'f06',
          text: 'To implement responsible practices to ensure that good governance will enhance the reputation of the Fund and Cayor brand at all times',
          style: 'text'
        }]
      }
    ],
    fadeIn: true
  }

    handleClick = (e) => {
      console.log('handle sub navigation click', e);

      this.setState({
        fadeIn: true,
        currentDetails: e.target.innerText.toLowerCase()
      })
    }

  // renderDetails() {
  //   const {currentDetails} = this.state;
  //   if (currentDetails === 'philosophy') {
  //     return <PageDetails pageDetails={this.state.philosophyText} />
  //   } else if (currentDetails === 'strategy') {
  //     return <PageDetails pageDetails={this.state.strategyText} />
  //   } else if (currentDetails === 'framework') {
  //     return <PageDetails pageDetails={this.state.frameworkTableText} />
  //   }
  // }

  render() {
    const { currentDetails, fadeIn, navItems, frameworkTableText, philosophyText, strategyText } = this.state;

    return (
      <div className="esg">
        <Navigation
          history={this.props.history}
          location={this.props.location}
          handleClick={this.props.handleClick}
          headerImg='esg' />
          <main className='body'>
            <SubNav
              navItems={navItems}
              match={this.props.match}
              handleClick={this.handleClick}
              currentDetails={currentDetails}
              fadeIn={fadeIn} />
              { currentDetails === 'framework' ?
                <TextTableContainer
                currentDetails={currentDetails}
                text={frameworkTableText}/>
                : null
              }
              {currentDetails !== 'framework' &&
                <PageDetails
                  fadeIn={fadeIn}
                  pageDetails={currentDetails === 'philosophy' ? philosophyText : strategyText} />
              }
          </main>
        <Footer location={this.props.location} />
      </div>
    );
  }
}

export default Esg;

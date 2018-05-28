import React, { Component } from 'react';
import TextTableContainer from '../layout/text-table-container.react';
import PageDetails from '../layout/pageDetails.react';
import SubNav from '../sub_navigation/sub_navigation.react';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';
import './esg.css';

class Esg extends Component {
  state = {
    currentDetails: 'Philosophy',
    navItems: [
      {value: 'Philosophy', url: 'philosophy'},
      {value: 'Strategy', url: 'strategy'},
      {value: 'Framework', url: 'framework'}
    ],
    philosophyText: ['Cayor considers our approach to responsible investing to be both risk and return focused.','ESG is a key consideration in Cayor’s investment decision-making and ownership practices. We believe researching, assessing and managing factors related to ESG enhances our ability to meet the long-term investment objectives of our fund. At Cayor, ESG considerations are not contradictory to achieving our commercial objectives.','Instead, Cayor uses ESG management to identify opportunities to enhance the internal efficiencies and market opportunities of our portfolio companies; while reducing the risks associated with our investment process. We are driven by the principle that active ownership adds sustained value at exit, and contributes to the advancement of sustainable development within Africa.'],
    strategyText: ['We have developed a strategy to achieve balance between environmental and social impact and generating commercial returns; underpinned by our ESG philosophy.','From the start, the team will apply our ESG strategy to the Fund’s portfolio companies and their operational activities.','Post-investment, Cayor will closely monitor progress on ESG matters and compliance by portfolio companies relative to our ESG Framework and Policy Guidelines.'],
    frameworkTableText: [
      {
        header: 'Our Framework and Policy Guidelines support the following objectives:',
        details: [{
          dKey: 0,
          text: 'Adhere to the UNPRI, and the IFC performance standards;'
        },
        {
          dKey: 7,
          text: 'Integrate ESG into Cayor’s investment management framework through its ESG management system;'
        },
        {
          dKey: 1,
          text: 'Partner with appropriate ESG experts to provide independent guidance on best international practice relating to ESG matters;'
        },
        {
          dKey: 2,
          text: 'Conduct ESG due diligence assessments on all potential investment opportunities to requisite specifications;'
        },
        {
          dKey: 3,
          text: 'Fulfill the requirements of applicable National, Provincial and Local legislation where our portfolio companies operate;'
        },
        {
          dKey: 4,
          text: 'Communicate and work closely with investee companies to ensure management and employees’ understanding and shared commitment to compliance;'
        },
        {
          dKey: 5,
          text: 'Implement reasonable precautions to protect the health and safety of Portfolio Company employees and any external parties, such as affected communities;'
        },
        {
          dKey: 6,
          text: 'Implement responsible practices to ensure that good governance will enhance the reputation of the Fund and the Cayor brand at all times'
        }]
      }
    ],
    fadeIn: true

  }

    handleClick = (e) => {
      console.log('handle sub navigation click', e);

      this.setState({
        fadeIn: true,
        currentDetails: e.target.innerText
      })
    }

  // renderDetails() {
  //   const {currentDetails} = this.state;
  //   if (currentDetails === 'Philosophy') {
  //     return <EsgPhilosophyDetails pageDetails={this.state.philosophyText} />
  //   } else if (currentDetails === 'Strategy') {
  //     return <EsgStrategyDetails pageDetails={this.state.strategyText} />
  //   } else if (currentDetails === 'Framework') {
  //     return <EsgFrameworkDetails pageDetails={this.state.frameworkText} />
  //   }
  // }

  render() {
    const { currentDetails, fadeIn, navItems, frameworkTableText, philosophyText, strategyText } = this.state;

    return (
      <div className="esg">
        <Navigation
          history={this.props.history}
          location={this.props.location}
          handleClick={this.props.handleClick} />
        <SubNav
          navItems={navItems}
          match={this.props.match}
          handleClick={this.handleClick}
          fadeIn={fadeIn} />
          { currentDetails === 'Framework' ?
            <TextTableContainer
            currentDetails={currentDetails}
            text={frameworkTableText}/>
            : null
          }
          {currentDetails !== 'Framework' &&
            <PageDetails
              fadeIn={fadeIn}
              pageDetails={currentDetails === 'Philosophy' ? philosophyText : strategyText} />
          }
        <Footer />
      </div>
    );
  }
}

export default Esg;

import React, { Component } from 'react';
import findKey from 'lodash/findKey';
import pickBy from 'lodash/pickBy';
import SubNav from '../sub_navigation/sub_navigation.react';
import TeamDetails from './TeamDetails.react';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';
import TextTableContainer from '../layout/text-table-container.react';
import './people.css';

class People extends Component {

  state = {
    currentDetails: 'experienced',
    navItems: [
      {value: 'Experienced', url: 'experienced', style: 'top'},
      {value: 'Native', url: 'native', style: 'top'},
      {value: 'Team Bios', url: 'bios', style: 'top'}
    ],
    experiencedTextTable: [
      {
      details: [
        {
          dKey: 'e00',
          style: 'subHeader',
          text: 'We have in excess of 30 years of Africa specific principal investment experience. As such, we are among the most experienced private equity investors active on the continent today.'
        },
        {
          dKey: 'e01',
          text: 'Our combined experience was developed at leading emerging market focused private equity firms including: Actis, Citi Venture Capital International (CVCI) and Phatisa. These institutions’ rigorous standards requiring technical and investment excellence has resulted in world class skills across the Cayor Team.',
          style: 'text'
        },
        {
          dKey: 'e02',
          text: 'We have extensive deal-related skills including: sector specific investment experience, mergers and acquisitions, restructuring, and divestitures expertise, as well as experience dealing with co-investors, local regulators and other relevant stakeholders.',
          style: 'text'
        },
        {
          dKey: 'e03',
          text: 'We possess the maturity, experience and soft skills that are imperative to successful deal making, including being sensitive to and intimately familiar with cultural and business norms in Africa',
          style: 'text'
        }
      ]
    }],
    nativeTextTable: [
      {
      details: [
      {
        dKey: 'n00',
        text: 'Our team currently consists of four African nationals: a Nigerian, Zimbabwean, Cameroonian and Ghanaian.',
        style: 'subHeader'
      },
      {
        dKey: 'n01',
        text: 'We’ve grown up, been educated in, and worked on the continent, and as a result have developed deep and broad relationship networks with business owners, regulators, intermediaries, advisors and co-investment partners.',
        style: 'text'
      },
      {
        dKey: 'n02',
        text: 'Our wide network includes peers who are key decision makers in corporations and high-level government officials (central bankers, ministers, exchange regulators, etc.).',
        style: 'text'
      }]
      }],
    teamDetails: [
      {
        name: 'Fungai Ruwende',
        position: 'Managing Partner',
        summary: 'TBD',
        experience: 'TBD',
        education: 'TBD',
        url: 'fungai'

      },
      {
        name: 'Dafe Diejomaoh',
        position: 'Managing Partner',
        summary: 'TBD',
        experience: 'TBD',
        education: 'TBD',
        url: 'dafe'

      },
      {
        name: 'Yannick Mpollo',
        position: 'Principal',
        summary: 'TBD',
        experience: 'TBD',
        education: 'TBD',
        url: 'yannick'
      },
      {
        name: 'Kofi Domfeh',
        position: 'Vice President',
        summary: 'TBD',
        experience: 'TBD',
        education: 'TBD',
        url: 'kofi'

      }
    ],
    fadeIn: true,
    currentDetailIdx: 0
  }

    handleClick = (e) => {
      console.log('handle sub navigation click opportunity');
      const { navItems } = this.state;
      const currentNavItem = pickBy(navItems, item => e.target.innerText.toLowerCase() === item.value.toLowerCase());
      const index = Number(findKey(currentNavItem));
      // debugger;
      this.setState({
        currentDetails: e.target.innerText.toLowerCase(),
        fadeIn: true,
        currentDetailIdx: index
      })
    }

    handleButtonClick = (e) => {
      const { currentDetailIdx, navItems } = this.state;
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

  renderDetails() {
    const { currentDetails, fadeIn, teamDetails, experiencedTextTable, nativeTextTable, teamText } = this.state;
    if (currentDetails === 'native') {
      return (
        <TextTableContainer
          fadeIn={fadeIn}
          currentDetails={currentDetails}
          text={nativeTextTable}
          currentDetailIdx={0}
          handleButtonClick={this.handleButtonClick} />
      )
    } else if (currentDetails === 'experienced') {
      return (
        <TextTableContainer
          fadeIn={fadeIn}
          currentDetails={currentDetails}
          text={experiencedTextTable}
          currentDetailIdx={0}
          handleButtonClick={this.handleButtonClick} />
      )
    } else {
      return (
        <TeamDetails
          fadeIn={fadeIn}
          teamDetails={teamDetails}
          pageDetails={teamText} />
      )
    }
  }

  render() {
    const {currentDetails, navItems, fadeIn} = this.state;

    return (
      <div className="people">
        <Navigation
          fadeIn={fadeIn}
          headerImg='people'
          history={this.props.history}
          location={this.props.location}          handleClose={this.props.handleClose}          isContactModalOpen={this.props.isContactModalOpen}
          handleClockClick={this.props.handleClockClick} />
        <SubNav
          navItems={navItems}
          match={this.props.match}
          currentDetails={currentDetails}
          handleClick={this.handleClick} />
        { this.renderDetails() }
        <Footer location={this.props.location}/>
      </div>
    );
  }
}

export default People;

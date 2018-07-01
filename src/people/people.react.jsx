import React, { Component } from 'react';
import SubNav from '../sub_navigation/sub_navigation.react';
// import FocusedDetails from './FocusedDetails.react';
// import NativeDetails from './NativeDetails.react';
import PageDetails from '../layout/pageDetails.react';
import TeamDetails from './TeamDetails.react';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';
// import PeopleHeaderImg from '../media/people_banner.jpg';
import './people.css';

class People extends Component {

  state = {
    currentDetails: 'focused',
    navItems: [
      {value: 'Focused', url: 'focused', style: 'top'},
      {value: 'Native', url: 'native', style: 'top'},
      {value: 'Experienced', url: 'experienced', style: 'top'},
      {value: 'Team Bios', url: 'bios', style: 'top'}
    ],
    focusedText: ['Our Managing Partners and Investment Team are hands-on, with a consistent track record of regularly interacting with company management and creating value.', 'Our Managing Partners have been actively involved in the management of their respective funds including: fund raising, accounting management and relationship management.', 'When it comes to Africa and sector-specific experience, our team has executed transactions across: agro-processing, food, beverage, packaging, TMT, media, banking and insurance sectors.'],
    nativeText: ['The Cayor team is comprised of four African nationals, a Zimbabwean, a Nigerian, a Cameroonian and Ghanaian.','Together we have deep Africa investment experience, having spent over 30 years investing in the Continent. '],
    experiencedText: ['Our team has principal investment expertise specifically related to Middle Market Investments across various sectors in Africa, and we are among the most experienced private equity investors active in Africa today.','We developed our world class experience working at leading emerging market focused private equity firms, such as: Actis, Citi Venture Capital International (CVCI) and Phatisa. We embody the rigorous standards, technical expertise and investment excellence that investors have come to expect from these leading institutions.','The team has extensive deal-related skills including: sector specific investment experience, mergers and acquisitions, restructuring, and divestitures expertise, as well as experience dealing with co-investors, local regulators and other relevant stakeholders.'],
    teamText: ['Test team'],
    teamDetails: [{
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

    }],
    fadeIn: true,

  }

  handleClick = (e) => {
    console.log('handle sub navigation click', e);
    this.setState({
      currentDetails: e.target.innerText.toLowerCase()
    })
  }

  renderDetails() {
    const {currentDetails, fadeIn, teamDetails, experiencedText, nativeText, focusedText, teamText} = this.state;
    if (currentDetails === 'focused') {
      return <PageDetails fadeIn={fadeIn} pageDetails={focusedText} />
    } else if (currentDetails === 'native') {
      return <PageDetails fadeIn={fadeIn} pageDetails={nativeText} />
    } else if (currentDetails === 'experienced') {
      return <PageDetails fadeIn={fadeIn}  pageDetails={experiencedText} />
    } else {
      return <TeamDetails fadeIn={fadeIn} teamDetails={teamDetails} pageDetails={teamText} />
    }
  }

  render() {
    const {currentDetails, navItems} = this.state;

    return (
      <div className="people">
        <Navigation
          headerImg='people'
          history={this.props.history}
          location={this.props.location}
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

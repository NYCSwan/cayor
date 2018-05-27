import React, { Component } from 'react';
import SubNav from '../sub_navigation/sub_navigation.react';
import FocusedDetails from './FocusedDetails.react';
import NativeDetails from './NativeDetails.react';
import ExperiencedDetails from './ExperiencedDetails.react';
import TeamDetails from './TeamDetails.react';
import Footer from '../layout/footer.react';
import Navigation from '../navigation/navigation.react';
import './people.css';

class People extends Component {

  state = {
    navItems: [
      {value: 'Focused', url: 'focused'},
      {value: 'Native', url: 'native'},
      {value: 'Experienced', url: 'experienced'},
      {value: 'Team Bios', url: 'bios'}
    ],
    currentDetails: 'Focused',
    focusedText: ['Our Managing Partners and Investment Team are hands-on, with a consistent track record of regularly interacting with company management and creating value.', 'Our Managing Partners have been actively involved in the management of their respective funds including: fund raising, accounting management and relationship management.', 'When it comes to Africa and sector-specific experience, our team has executed transactions across: agro-processing, food, beverage, packaging, TMT, media, banking and insurance sectors.'],
    nativeText: ['The Cayor team is comprised of four African nationals, a Zimbabwean, a Nigerian, a Cameroonian and Ghanaian.','Together we have deep Africa investment experience, having spent over 30 years investing in the Continent. '],
    experiencedText: ['Our team has principal investment expertise specifically related to Middle Market Investments across various sectors in Africa, and we are among the most experienced private equity investors active in Africa today.','We developed our world class experience working at leading emerging market focused private equity firms, such as: Actis, Citi Venture Capital International (CVCI) and Phatisa. We embody the rigorous standards, technical expertise and investment excellence that investors have come to expect from these leading institutions.','The team has extensive deal-related skills including: sector specific investment experience, mergers and acquisitions, restructuring, and divestitures expertise, as well as experience dealing with co-investors, local regulators and other relevant stakeholders.'],
    teamText: ['Test team']

  }

  handleClick = (e) => {
    console.log('handle sub navigation click', e);
    this.setState({
      currentDetails: e.target.innerText
    })
  }

  renderDetails() {
    const {currentDetails} = this.state;
    if (currentDetails === 'Focused') {
      return <FocusedDetails pageDetails={this.state.focusedText} />
    } else if (currentDetails === 'Native') {
      return <NativeDetails pageDetails={this.state.nativeText} />
    } else if (currentDetails === 'Experienced') {
      return <ExperiencedDetails pageDetails={this.state.experiencedText} />
    } else {
      return <TeamDetails pageDetails={this.state.teamText} />
    }
  }

  render() {
    return (
      <div className="people">
        <Navigation
          history={this.props.history}
          location={this.props.location}
          handleClick={this.props.handleClick} />
        <SubNav
          navItems={this.state.navItems}
          match={this.props.match}
          handleClick={this.handleClick} />
        { this.renderDetails() }
        <Footer />
      </div>
    );
  }
}

export default People;

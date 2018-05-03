import React, { Component } from 'react';

class Opportunities extends Component {
  state = {
    navItems: [
      {value: 'Africa Opportunity', url: 'africa'},
      {value: 'Why Cayor', url: 'cayor'},
      {value: 'The Cayor Perspective', url: 'perspective'}
    ],
    currentDetails: 'Africa Opportunity',
    pageDetails: ['Test']
  }

  renderDetails() {
    const {currentDetails} = this.state;
    if (currentDetails === 'Focused') {
      return <FocusedDetails pageDetails={this.state.pageDetails} />
    } else if (currentDetails === 'Native') {
      return <NativeDetails pageDetails={this.state.pageDetails} />
    } else if (currentDetails === 'Experienced') {
      return <ExperiencedDetails pageDetails={this.state.pageDetails} />
    } else {
      return <TeamDetails pageDetails={this.state.pageDetails} />
    }
  }

  render() {
    return (
      <div className="Opportunity">
      opportunity
        <SubNav
          navItems={this.state.navItems}
          match={this.props.match} />
        { this.renderDetails() }
      </div>
    );
  }
}

export default Opportunities;

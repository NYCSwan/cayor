/* @flow */

import React, { Component } from "react";
import pickBy from "lodash/pickBy";
import findKey from "lodash/findKey";
import TextTableContainer from "../layout/text-table-container.react";

export default class WhyCayor extends Component {
  state = {
    currentDetailIdx: -1
  };

  componentDidMount() {
    console.log("componentDidMount whyCayor");
    const { location, text } = this.props,
      target = location.state.id,
      currentNavItem = pickBy(text, item => {
        return target === item.header;
      }),
      index = Number(findKey(currentNavItem));

    this.setState({ currentDetailIdx: index });
  }

  render() {
    const { currentDetailIdx } = this.state;

    return (
      <div>
        {currentDetailIdx >= 0 && (
          <TextTableContainer
            location={this.props.location}
            fadeIn={true}
            currentDetails={this.props.currentDetails}
            text={this.props.text}
            currentDetailIdx={currentDetailIdx}
            // handleClick={this.handleButtonClick}
            // {...routeProps}
          />
        )}
      </div>
    );
  }
}

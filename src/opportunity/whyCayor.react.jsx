import React, { Component } from "react";
import pickBy from "lodash/pickBy";
import findKey from "lodash/findKey";
import TextTableContainer from "../layout/text-table-container.react";

export default class WhyCayor extends Component {
  state = {
    currentDetailIdx: 0
  };

  componentDidMount() {
    console.log("componentDidMount whyCayor");
    const { location, text } = this.props,
      target = location.state.id.split(" ")[1].replace(/\_.*/, ""),
      currentNavItem = pickBy(text, item => {
        return item.header.toLowerCase().includes(target);
      }),
      index = Number(findKey(currentNavItem));
    this.setState({ currentDetailIdx: index });
  }

  render() {
    const { currentDetailIdx } = this.state;

    return (
      <div>
        <TextTableContainer
          location={this.props.location}
          text={this.props.text}
          currentDetailIdx={currentDetailIdx}
        />
      </div>
    );
  }
}

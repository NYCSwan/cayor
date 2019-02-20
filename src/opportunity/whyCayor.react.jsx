import React, { Component } from "react";
import pickBy from "lodash/pickBy";
import findKey from "lodash/findKey";
import TextTableContainer from "../layout/text-table-container.react";

export default class WhyCayor extends Component {
  state = {
    currentDetailIdx: 0
  };

  componentDidMount() {
    // console.log("componentDidMount whyCayor");
    const { location, text } = this.props,
      target = location.state.id.split(" ")[1].replace(/_.*/, ""),
      currentNavItem = pickBy(text, item =>
        item.header.toLowerCase().includes(target)
      ),
      index = Number(findKey(currentNavItem));
    this.setState({ currentDetailIdx: index });
  }

  shouldComponentUpdate(nextState) {
    console.log("shouldComponentUpdate");
    return this.state.currentDetailIdx !== nextState.currentDetailIdx;
  }
  
  render() {
    const { currentDetailIdx } = this.state;
    const path = this.props.location.pathname.slice(1).split("/")[0];
    return (
      <TextTableContainer
        location={path}
        text={this.props.text}
        currentDetailIdx={currentDetailIdx}
      />
    );
  }
}

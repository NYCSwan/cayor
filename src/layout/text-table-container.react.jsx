import React, { Component } from 'react';
// import { Fade } from 'reactstrap';
import TextTable from './text-table.react';
import Button from './button.react';
import './text-table-container.css';

class TextTableContainer extends Component {
  state = {
    currentDetailIdx: 0
  }

  componentDidMount() {
    if (this.props.text.length > 1) {
      // debugger;
    }
  }

  handleButtonClick = (e) => {
    const {currentDetailIdx} = this.state;
    const {text} = this.props;
    const maxIndex = text.length-1
    if (e.target.value === "Next" && currentDetailIdx !== maxIndex){
      this.setState({
        currentDetailIdx: currentDetailIdx +1
      })
    } else if (e.target.value === "Next" && currentDetailIdx === maxIndex){
      this.setState({
        currentDetailIdx: 0
      })
    } else if (e.target.value === "Back" && currentDetailIdx !== 0){
      this.setState({
        currentDetailIdx: currentDetailIdx -1
      })
    } else {
      this.setState({
        currentDetailIdx: maxIndex
      })
    }
  }

  render() {
    const { currentDetailIdx } = this.state;

    return (

      <div className="text-table-container">
      {this.props.mainHeader &&
        <h4>{this.props.mainHeader}</h4>
      }
        <TextTable
        text={this.props.text[currentDetailIdx]}/>
        {this.props.text.length > 1 &&
          <div>
          <Button
          handleClick={this.handleButtonClick}
          value='Back'
          text='Back' />
          <Button
          handleClick={this.handleButtonClick}
          value='Next'
          text='Next' />
          </div>
        }
      </div>
    )
  }
}
export default TextTableContainer;

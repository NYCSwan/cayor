import React from 'react';
// import { Fade } from 'reactstrap';
import TextTable from './text-table.react';
import Button from './button.react';
import './text-table-container.css';

const TextTableContainer = (props) => (
  <div className="text-table-container">
    {props.mainHeader ?
      <h4 className='header left'>{props.mainHeader}</h4>
      : null
    }
      <TextTable
        fadeIn={props.fadeIn}
        text={props.text[props.currentDetailIdx]}/>
      {props.text.length > 1 &&
        <div>
          <Button
            style={"button next interior"}
            handleClick={props.handleButtonClick}
            value='Next'
            text='>>' />
        </div>
      }
  </div>
)
// class TextTableContainer extends Component {
  // state = {
  //   currentIdx: 0
  // }

  // componentDidMount() {
  //   if (this.props.text.length > 1) {
  //     this.handleNavClick()
  //   }
  // }
  //
  // shouldComponentUpdate(nextProps) {
  //   return this.props.currentDetailIdx !== nextProps.currentDetailIdx || this.props.currentDetails !== nextProps.currentDetails;
  // }
  // componentWillReceiveProps({ newIndex }) {
  //   console.log('componentWillReceiveProps text table');
  //   if (newIndex !== this.props.currentDetailIdx) {
  //     this.handleNavClick(newIndex);
  //   }
  // }

  // componentWillUpdate({newProps}) {
  //   if(this.newProps.currentDetailIdx !== this.props.currentDetailIdx) {
  //     this.handleNavClick(newProps.newIndex);
  //   }
  // }

  // handleButtonClick = (e) => {
  //   const {currentIdx} = this.state;
  //   const {text} = this.props;
  //   const maxIndex = text.length-1;
  //
  //   if (e.target.value === "Next" && currentIdx !== maxIndex){
  //     this.setState({
  //       currentIdx: currentIdx +1
  //     })
  //   } else if (e.target.value === "Next" && currentIdx === maxIndex){
  //     this.setState({
  //       currentIdx: 0
  //     })
  //   } else {
  //     this.setState({
  //       currentIdx: maxIndex
  //     })
  //   }
  // }
  //
  // handleNavClick = () => {
  //   console.log('handle nav click');
  //   const { currentDetailIdx } = this.props;
  //   const index = currentDetailIdx -1;
  //   this.setState({ currentIdx: index });
  //   // debugger;
  // }
  //
  // render() {
  //   const { currentIdx } = this.state;
  //
  //   return (

      // <div className="text-table-container">
      // {this.props.mainHeader &&
      //   <h4 className='header left'>{this.props.mainHeader}</h4>
      // }
      // {/* this.props.text.template === 'bullet' ?
      //   <BulletPointTextContainer
      //     currentDetails */}
      //   <TextTable
      //     fadeIn={this.props.fadeIn}
      //     text={this.props.text[currentIdx]}/>
      //   {this.props.text.length > 1 &&
      //     <div>
      //       <Button
      //         style={"button next interior"}
      //         handleClick={this.handleButtonClick}
      //         value='Next'
      //         text='>>' />
      //     </div>
      //   }
      // </div>
    // )
  // }
// }
export default TextTableContainer;

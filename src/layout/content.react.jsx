import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Navigation from '../navigation/navigation.react';
import Footer from './footer.react';
import Routes from '../routes';

import './content.css';

class Content extends Component {
  state = {
    slideToRight: false,
    slideToLeft: false
  }

  togglePageTransition = () => {
    console.log(' handle home page transition');
    this.setState({
      slideToLeft: !this.state.slideToLeft

    })
  }


  render() {
    console.log('render content component');
    const { slideToLeft, slideToRight } = this.state;

    return (

      <main className='content'>



            {/* props.transitionPage && */}
            <div>

              <Routes
              props={this.props.props}
              handlePageTransition={this.togglePageTransition}
              slideToLeft={slideToLeft}
              slideToRight={slideToRight} />
              <Footer />

            </div>
          </CSSTransition>
        </TransitionGroup>
      </main>
    )

  }
}

export default Content;

import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Navigation from '../navigation/navigation.react';
import Footer from './footer.react';
import Routes from '../routes';

import './content.css';

const Content = (props) => (
  <main className='content'>
    <TransitionGroup>
      <CSSTransition
        in={props.transitionPage}
        timeout={1000}
        key={props.transitionKey}
        classNames='slide'
        appear>
        <div>
        {/* props.transitionPage && */}
          <div>
            <Navigation
            handleClick={props.handleClick} />
            <Routes
              props={props.props} />
            <Footer />
          </div>

        </div>
      </CSSTransition>
    </TransitionGroup>
  </main>
);

export default Content;

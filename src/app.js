import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './App.css';
import Navigation from './navigation/navigation.react';
import Footer from './navigation/footer.react';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className='body'>
          <Routes
            props={this.props} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(App);

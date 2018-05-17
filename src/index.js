import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';

// childFactory={child => React.cloneElement(
// child,
// {
//   classNames: location.state.transition,
//   timeout: location.state.duration
// }
// )}



ReactDOM.render((
  <Router>
    <App />
  </Router>), document.getElementById('root'));
registerServiceWorker();

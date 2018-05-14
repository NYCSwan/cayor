import React from 'react';
import Clock from '../clocks/clock.react';
import Logo from '../media/cayor_color_2inch.jpg';
import './navigation.css';

const Navigation = props => (

  <header className='header slideIn'>
    <a
      className='logo left'
      href='/'
      alt='homepage'>
      <img
        src={Logo}
        alt='logo' />
    </a>
    <ul className='nav'>
      <li><a href='people'>PEOPLE</a></li>
      <li><a href='approach' alt='Cayor Approach'>APPROACH</a></li>
      <li><a href='opportunity' alt='Cayor Opportunities'>OPPORTUNITY</a></li>
      <li><a href='esg' alt='ESG'>ESG</a></li>
      <li onClick={props.handleClick}><Clock offset='2' /> ACCRA</li>
      <li onClick={props.handleClick}><Clock offset='0'/> JOHANESSBURG</li>
    </ul>
  </header>
)

export default Navigation;

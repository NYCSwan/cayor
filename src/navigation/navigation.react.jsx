import React from 'react';
import { NavLink } from 'react-router-dom';
import Clock from '../clocks/clock.react';
import Logo from '../media/cayor_color_2inch.jpg';
import './navigation.css';

const Navigation = props => (

  <header className='header slide'>
    <NavLink to='/' className='logo-container'>
      <img
        className='logo'
        src={Logo}
        alt='logo' />
    </NavLink>
    <ul className='nav right'>
      <li><NavLink to='people' className='link'>PEOPLE</NavLink></li>
      <li>
        <NavLink to='approach' className='link'>APPROACH</NavLink></li>
      <li>
        <NavLink to='opportunity' className='link'>OPPORTUNITY</NavLink></li>
      <li>
        <NavLink to='esg' className='link'>ESG</NavLink></li>
      <li
        onClick={props.handleClick} className='clock'>
        <Clock offset='2' />ACCRA</li>
      <li
      onClick={props.handleClick}
      className='clock'>
      <Clock offset='0'/>JOHANESSBURG</li>
    </ul>
  </header>
)

export default Navigation;

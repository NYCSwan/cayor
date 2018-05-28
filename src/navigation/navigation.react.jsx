import React from 'react';
import { NavLink } from 'react-router-dom';
import Clock from '../clocks/clock.react';
import Logo from '../media/cayor_color.png';
import './navigation.css';

const Navigation = props => (

  <header className={`header ${props.headerImg}`}>
    <NavLink to='/' className='logo-container'>
      <img
        className='logo'
        src={Logo}
        alt='logo' />
    </NavLink>
    <ul className='nav right'>
      <li>
        <NavLink to='/people' activeClassName="selected"
        className='link'>PEOPLE</NavLink></li>
      <li>
        <NavLink to='/approach' activeClassName="selected"
        className='link'>APPROACH</NavLink></li>
      <li>
        <NavLink to='/opportunity' activeClassName="selected"
        className='link'>OPPORTUNITY</NavLink></li>
      <li>
        <NavLink to='/esg' activeClassName="selected"
        className='link'>ESG</NavLink></li>
      <li
        onClick={props.handleClick}
        activeClassName="selected"
        className='clock'>
        <Clock offset='2' />ACCRA
        </li>
      <li
        onClick={props.handleClick}
        activeClassName="selected"
        className='clock'>
        <Clock offset='0'/>JOHANESSBURG
      </li>
    </ul>
  </header>
)

export default Navigation;

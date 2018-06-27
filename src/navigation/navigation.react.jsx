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
    <div className='right'>
      <ul className='nav'>
        <li>
          <NavLink to='/people' activeClassName="selected"
          className='link'>PEOPLE</NavLink></li>
        <li>
          <NavLink to='/opportunity' activeClassName="selected"
          className='link'>OPPORTUNITY</NavLink></li>
        <li>
          <NavLink to='/approach' activeClassName="selected"
          className='link'>APPROACH</NavLink></li>
        <li>
          <NavLink to='/esg' activeClassName="selected"
          className='link'>ESG</NavLink></li>
      </ul>
      <div className='clocks'>
        <div
          onClick={props.handleClockClick}
          className='clock-container'>
          <Clock offset='2' />
          <h6>ACCRA</h6>
        </div>
        <div
          onClick={props.handleClockClick}
          className='clock-container'>
          <Clock offset='0'/>
          <h6>JBG</h6>
        </div>
      </div>
    </div>
  </header>
)

export default Navigation;

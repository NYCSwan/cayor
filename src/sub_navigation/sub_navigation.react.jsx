import React from 'react';
import './sub_navigation.css';

const SubNav = (props) => (
  <aside className="sub_navigation">
    <ul className='list'>
      { props.navItems.map(navItem => {
        return (
          <li key={navItem.value}
            onClick={props.handleClick}>
            {navItem.value}
          </li>
        )
      }
      )}
    </ul>
  </aside>
)

export default SubNav;

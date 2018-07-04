import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/fontawesome-free-solid';
import './sub_navigation.css';

const SubNav = (props) => (
  <aside className="sub_navigation">
    <ul className='list'>
      { props.navItems.map(navItem => {
        return (
          <li
            key={navItem.value}
            onClick={props.handleClick}
            className={props.currentDetails === navItem.value.toLowerCase() ? `${navItem.style} active` : navItem.style}>
            <FontAwesomeIcon
              className={props.currentDetails.includes(navItem.value.toLowerCase()) ? `active` : 'hideIcon'}
              icon={faLongArrowAltRight}
              pull='left' />
            { navItem.style === 'top' ?
              navItem.value.toUpperCase() :
              navItem.value
            }
          </li>
        )
      })}
    </ul>
  </aside>
)

export default SubNav;

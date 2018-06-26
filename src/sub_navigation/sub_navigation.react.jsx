import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight';
import './sub_navigation.css';

const SubNav = (props) => (
  <aside className="sub_navigation">
    <ul className='list'>
      { props.navItems.map(navItem => {
        return (
          <li
            key={navItem.value}
            onClick={props.handleClick}
            className={props.currentDetails === navItem.value ? `${navItem.style} active` : navItem.style}>
            {navItem.value}
            <FontAwesomeIcon className={props.currentDetails === navItem.value ? `active` : 'hideIcon'} />
          </li>
        )
      }
      )}
    </ul>
  </aside>
)

export default SubNav;

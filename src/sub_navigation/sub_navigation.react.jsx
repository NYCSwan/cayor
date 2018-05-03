import React from 'react';

const SubNav = (props) => (
  <aside className="sub_navigation">
    <ul>
      { props.navItems.map(navItem => {
        return (
          <li>{navItem.value}</li>
        )
      }
      )}
    </ul>
  </aside>
)

export default SubNav;

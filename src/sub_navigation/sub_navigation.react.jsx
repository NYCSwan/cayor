import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sub_navigation.css";

const SubNav = props => (
  <aside className="sub_navigation">
    <ul className="list">
      {props.navItems.map(navItem => {
        const location = {
          pathname: `${props.match.url}/${navItem.url.split(" ")[0]}`,
          state: { id: navItem.value }
        };
        return (
          <li
            key={navItem.value}
            // onClick={navItem.style === "sub" ? props.handleClick : null}
            className={
              props.currentDetails === navItem.url
                ? `${navItem.style} active`
                : navItem.style
            }
          >
            <FontAwesomeIcon
              className={
                props.currentDetails.includes(navItem.url.split(" ")[1])
                  ? `active`
                  : "hideIcon"
              }
              icon="arrow-right"
              pull="left"
            />
            <Link to={location}>
              {navItem.style === "top"
                ? navItem.value.toUpperCase()
                : navItem.value}
            </Link>
          </li>
        );
      })}
    </ul>
  </aside>
);

export default SubNav;

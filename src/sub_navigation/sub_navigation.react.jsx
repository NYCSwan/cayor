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
          state: { id: navItem.url, transition: "slide" }
        };
        return (
          <li
            key={navItem.value}
            className={
              props.location.state !== undefined &&
              props.location.state.id === navItem.url
                ? `${navItem.style} active`
                : navItem.style
            }
          >
            <FontAwesomeIcon
              className={
                props.location.state !== undefined &&
                props.location.state.id === navItem.url
                  ? `active`
                  : "hideIcon"
              }
              icon="arrow-right"
              pull="left"
            />
            {navItem.key.includes("no-link") ? (
              navItem.value.toUpperCase()
            ) : (
              <Link to={location}>
                {navItem.style === "top"
                  ? navItem.value.toUpperCase()
                  : navItem.value}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  </aside>
);

export default SubNav;

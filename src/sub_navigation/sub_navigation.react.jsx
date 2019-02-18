import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sub_navigation.css";

const SubNav = props => (
  <aside className="sub_navigation">
    <ul className="list">
      {props.navItems.map(navItem => {
        const tKey = props.location.pathname.slice(1).split("/")[0];
        const key = navItem.url.split(" ");
        const iKey = key[1];
        const work = key[0];
        const path = `${props.match.url}/${work}`;
        const location = {
          pathname: path,
          state: {
            id: navItem.url,
            transitionKey: tKey,
            interiorTransitionKey: iKey
          }
        };
        // debugger;

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

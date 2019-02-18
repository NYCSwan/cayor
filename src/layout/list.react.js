import React from "react";
import { ListGroupItem, ListGroup } from "reactstrap";
import "./list.css";

const List = props => (
  <ListGroup className={props.style ? props.style : null}>
    {props.items.map(item => {
      return (
        <ListGroupItem key={item.dKey} className={item.style}>
          {item.style === "subHeader" ? item.text.toUpperCase() : item.text}
        </ListGroupItem>
      );
    })}
  </ListGroup>
);

export default List;

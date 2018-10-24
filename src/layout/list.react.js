import React from 'react';
import { ListGroupItem, ListGroup } from 'reactstrap';

const List = props => (
  <ListGroup>
    {props.items.map(item => {
      <ListGroupItem key={item.dKey} className={item.style}>
        {item.text}
      </ListGroupItem>;
    })}
  </ListGroup>
);

export default List;

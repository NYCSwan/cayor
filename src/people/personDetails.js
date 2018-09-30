import React from 'react';

export default (PersonDetails = props => (
  <div>
    <aside>
      <img
        src={props.personDetails.image}
        alt={props.personDetails.alt}
        className="portrait"
      />
    </aside>
    <div className="bioDetails">
      <h1 className="name">{props.personDetails.name}</h1>
      <h2 className="role">{props.personDetails.role}</h2>
    </div>
  </div>
));

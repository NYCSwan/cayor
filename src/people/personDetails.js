import React from 'react';
import './personDetails.css';
import Button from '../layout/button.react';

const PersonDetails = props => (
  <main className="personDetails">
    <aside className="right">
      <div className="info">
        <img
          src={props.personDetails.image}
          alt={props.personDetails.alt}
          className="portrait"
        />
        <h1 className="name">{props.personDetails.name.toUpperCase()}</h1>
        <h2 className="role">{props.personDetails.position.toLowerCase()}</h2>
      </div>
      <Button
        disabled={props.personDetails.name === 'Kofi Domfeh'}
        className="next"
        handleClick={props.handleNextClick}
        value={props.personDetails.name}
        text=">>"
      />
    </aside>
    <div className="bioDetails">
      <p>{props.personDetails.summary}</p>
      <h5>Experience</h5>
      <p>{props.personDetails.experience}</p>
      <h5>Education</h5>

      <p>{props.personDetails.education}</p>
    </div>
  </main>
);

export default PersonDetails;

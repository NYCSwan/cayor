import React from 'react';
import { Fade } from 'reactstrap';
import Dafe from '../media/Accra.jpg';
import Fungai from '../media/Accra.jpg';
import Yannick from '../media/Accra.jpg';
import Kofi from '../media/Accra.jpg';

import './snapshot.css';

const getImage = (name) => {
  if (name === 'Fungai Ruwende') {
    return <img className={`headshot ${name}`} src={Fungai} alt='Photograph of Fungai Ruwende'/>;
  } else if (name === 'Dafe Diejomaoh') {
    return <img className={`headshot ${name}`} src={Dafe} alt='Photograph of Dafe Diejomaoh'/>;
  } else if (name === 'Yannick Mpollo') {
    return <img className={`headshot ${name}`} src={Yannick} alt='Photograph of Yannick Mpollo'/>;
  } else {
    return <img className={`headshot ${name}`} src={Kofi} alt='Photograph of Kofi Domfeh' />;
  }
};

const Snapshot = (props) => (
  <Fade
    in={props.fadeIn}
    className={`snapshot ${props.name}`}
    key={props.name}
    onClick={props.handleClick}>
    {getImage(props.name)}
    <div className='text'>
      <h4 className={props.name}>{props.name}</h4>
      <h5 className={props.name}>{props.role}</h5>
    </div>
  </Fade>
)

export default Snapshot;

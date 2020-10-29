import React from 'react';
import './card.style.css';

export const Card = (props) => {
  let nameStyle = {
    textAlign: 'center'
  };
  return(
      <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
        <h4 style={nameStyle}>{props.monster.name}</h4>
        <p>{props.monster.email}</p>
      </div>
  );
};
import React from 'react';

const Project = (props) => {
  return (
      <li style={{border: '1px solid black'}}>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.github}</p>
        <p>{props.thumbnail}</p>
      </li>
  )
};

export default Project;
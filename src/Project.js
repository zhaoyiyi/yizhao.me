import React from 'react';
import { Link } from 'react-router';

const Project = (props) => {
  return (
      <li style={{border: '1px solid black'}}>
        <Link to={'/projects/' + props.name.replace(' ', '-')}><h2>{props.name}</h2></Link>
        <p>{props.description}</p>
        <p>{props.github}</p>
        <p>{props.thumbnail}</p>
      </li>
  )
};

export default Project;
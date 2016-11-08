import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/projects">projects</Link></li>
        <li><Link to="/resume">resume</Link></li>
        <li><a href="#">linkedin</a></li>
        <li><a href="#">Github</a></li>
      </ul>
    </nav>
  )
};

export default Navbar;

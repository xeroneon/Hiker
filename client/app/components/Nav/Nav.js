import React from 'react';
import Button from '../Button/Button';


import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar">
    <Link to="/">
      <h2>
        <strong>
          HIKER
      </strong>
      </h2>
    </Link>
    <Link to="/signin"><Button btnName="Sign In" /></Link>
  </nav>
);
export default Nav;

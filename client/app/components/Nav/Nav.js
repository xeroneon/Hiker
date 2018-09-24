import React, { Component } from 'react';
import Button from '../Button/Button';
import {
  getFromStorage,
  setInStorage
} from "../../utils/storage";

import { Link } from 'react-router-dom';

const Nav = props => {
  return <nav className="navbar">
    <Link to="/">
      <h2>
        <strong>
          HIKER
          </strong>
      </h2>
    </Link>
    <Link to={props.route}><Button btnName={props.btnName} onClick={props.handleClick}/></Link>
  </nav>
};
export default Nav;

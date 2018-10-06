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
    {props.token && <Link to="/account"><Button btnName="Account" /></Link>}
    {props.admin && <Link to="/admin"><Button btnName="Admin" /></Link>}
    <Link to={props.token ? "/signout" : "/signin"}><Button btnName={props.token ? "Sign Out" : "Sign In"} onClick={props.handleClick}/></Link>
  </nav>
};
export default Nav;

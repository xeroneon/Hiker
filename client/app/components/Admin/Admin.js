import React, { Component } from "react";
import Example from '../Map/Clustermap';
import {
  getFromStorage,
  setInStorage
} from "../../utils/storage";
import { Redirect } from 'react-router';
import Nav from "../Nav/Nav";

const Admin = () => {
  return( <Example />
  ) 
}

export default Admin
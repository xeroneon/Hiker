import React, { Component } from "react";
import Example from '../Map/Clustermap';
import {
  getFromStorage,
  setInStorage
} from "../../utils/storage";
import { Redirect } from 'react-router';
import Nav from "../Nav/Nav";

const Admin = () => {

  const userAdmin = getFromStorage("userAdmin")
  console.log(userAdmin)
  if (userAdmin) {


    return (<Example />)
  }

  else {
    return ("You do not have permission to access this page")
  }


}

export default Admin
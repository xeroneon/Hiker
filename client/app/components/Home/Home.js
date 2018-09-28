import React, { Component } from 'react';
import Example from '../Map/Map';
import 'whatwg-fetch';
// import { url } from 'inspector';
import {
  getFromStorage,
  setInStorage
} from "../../utils/storage";
import { Redirect } from 'react-router'
import Nav from "../Nav/Nav"
import TrailView from '../Map/TrailView';


class Home extends Component {

  state = {
    token: getFromStorage("Hiker"),
  }

  handleClick() {
    if (this.state.token) {
      localStorage.removeItem("Hiker");
    }
  }

  render() {

    const token = getFromStorage("Hiker");

    if (!token) {
      return <Redirect to='/' />;
    }
    document.body.style = "";
    return (
      <div>
        <Nav onClick={this.handleClick} token={this.state.token}/>

        <Example />

      </div>

    );
  }

}

export default Home;

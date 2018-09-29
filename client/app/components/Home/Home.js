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
<<<<<<< HEAD
      <div className='frame h-100'>
        <Nav btnName={this.state.btnName} route={this.state.route} onClick={this.handleClick}/>
=======
      <div>
        <Nav onClick={this.handleClick} token={this.state.token}/>
>>>>>>> 1ea5a74075edbc25533ba8df26fe02013e4f0bd4

        <Example />

      </div>

    );
  }

}

export default Home;

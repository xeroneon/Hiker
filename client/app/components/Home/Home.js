import React, { Component } from 'react';
import Example from '../Map/Map';
import 'whatwg-fetch';
// import { url } from 'inspector';
import {
  getFromStorage,
  setInStorage
} from "../../utils/storage";
import { Redirect } from 'react-router'
import Emergency from '../Emergency';
import Nav from "../Nav/Nav"
import TrailView from '../Map/TrailView';


class Home extends Component {

  state = {
    token: getFromStorage("Hiker"),
    btnName: "Sign In",
    route: "signin"
  }

  componentDidMount() {
    if (!this.state.token) {
      this.setState({
        signedIn: true,
        btnName: "Sign In",
        route: "signin"
      })
    } else {
      this.setState({
        signedIn: true,
        btnName: "Sign Out",
        route: "signout"
      })
    }
  }

  // componentDidMount() {
  //   const token = getFromStorage("Hiker");

  //   if (token) {
  //     fetch('/api/account/verify?token=' + token)
  //       .then(res => res.json())
  //       .then(json => {
  //         if (json.success) {
  //           this.setState({
  //             token
  //           })
  //         }
  //       })
  //   }
  // }

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
        <Nav btnName={this.state.btnName} route={this.state.route} onClick={this.handleClick}/>

        <Example />

      </div>

    );
  }

}

export default Home;

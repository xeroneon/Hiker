import React, { Component } from 'react';
import Example from '../Map/Map';
import 'whatwg-fetch';
// import { url } from 'inspector';
import {
  getFromStorage,
  setInStorage
} from "../../utils/storage";
import { Redirect } from 'react-router'


class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      token: '',


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

  render() {

    const token = getFromStorage("Hiker");

    if (!token) {
      return <Redirect to='/' />;
    }
    document.body.style = "";
    return (
      <div><Example /></div>
    );
  }

}

export default Home;

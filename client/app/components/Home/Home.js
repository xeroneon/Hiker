import React, { Component } from 'react';
import Map from '../Map/Map';
import 'whatwg-fetch';
// import { url } from 'inspector';

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
    document.body.style = "";
    return (
      <div><Map /></div>
    );
  }

}

export default Home;

import React, { Component } from 'react';
import Map from '../Map/Map';
import 'whatwg-fetch';
// import { url } from 'inspector';

class Home extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div><Map /></div>
    );
  }

}

export default Home;

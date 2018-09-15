import React, { Component } from 'react';
import Example from '../Map/Map';
import 'whatwg-fetch';
// import { url } from 'inspector';

class Home extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    document.body.style = "";
    return(
      <div><Example /></div>
    );
  }

}

export default Home;

import React, { Component } from 'react';
import 'whatwg-fetch';

import axios from "axios";



class Home extends Component {

  handleClick() {
    axios.post("/api/test-sms")
        .then(res => {
            console.log(res)
        })
  }

  render() {
    return (
      <div>
        <button type="submit" onClick={this.handleClick}>Submit</button>
      </div>

    );
  }

}

export default Home;

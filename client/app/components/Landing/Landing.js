import React, { Component } from 'react';
import 'whatwg-fetch';
// import { url } from 'inspector';
import '../../styles/landing.scss';
import Button from '../Button/Button'

// document.body.id = 'landingImg';

class Landing extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className="landingDiv">
          <h2>Helping hikers stay safe</h2>
          <Button btnName="Join"/>
      </div>
    );
  }

}

export default Landing;
import React, { Component } from 'react';
import 'whatwg-fetch';
// import { url } from 'inspector';
// import '../../styles/landing.scss';
import Button from '../Button/Button'


class Landing extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        document.body.style = "height: 100vh; width: 100vw; background: url('/assets/img/hiking.jpg') center center no-repeat !important; background-size: cover !important;";
    return(
      <div className="landingDiv">
          <h2><strong>Helping hikers stay safe</strong></h2>
          <Button btnName="Join"/>
      </div>
    );
  }

}

export default Landing;
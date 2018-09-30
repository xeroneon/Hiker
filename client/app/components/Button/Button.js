import React, { Component } from 'react';
import 'whatwg-fetch';

class Button extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return(
          <button className="main-btn" onClick={() => this.props.onClick}>{this.props.btnName}</button>
    );
  }

}

export default Button;
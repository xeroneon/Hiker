import React, { Component } from 'react';
import 'whatwg-fetch';
// import { url } from 'inspector';

class Button extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      // <form>
          <button className="main-btn w-100 h-25" onClick={() => this.props.onClick}>{this.props.btnName}</button>
      // </form>
    );
  }

}

export default Button;
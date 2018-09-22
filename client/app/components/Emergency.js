
import React, { Component } from "react";
import axios from 'axios';

class Emergency extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: Number
  };

  onChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };
  onSubmit = event => {
    event.preventDefault();   
    console.log(this.state); this.setState({
        firstName: "",
        lastName: "",
        phoneNumber: Number
    })

    var body = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber
    }

    // var body = {
    //     firstName: 'renata',
    //     lastName: 'wattier',
    //     phoneNumber: '4444'
    // }

    axios.post("/add-emergency", body)
    .then(res => {
        console.log(res)
            
    }).catch(err => {
        console.log(err);
    })

};

    componentDidMount(){
        axios.get('/all-emergency-contacts').then(res=>{
            console.log(res)
        })
    }

  render() {
    const { firstName, lastName, phoneNumber } = this.state;

    return (
      <div>
        <form className="main-form">
          {/* First name: */}
          <br />
          <input
            onChange={e => this.onChange("firstName", e.target.value)}
            type="text"
            name="firstname"
            value={firstName}
            className="main-text-box"
            placeholder="First Name"
          />
          <br />
          {/* Last name: */}
          <br />
          <input
            onChange={e => this.onChange("lastName", e.target.value)}
            type="text"
            name="lastname"
            value={lastName}
            className="main-text-box"
            placeholder="Last Name"
          />
          <br />
          
          {/* Phone Number: */}
          <br />
          <input
            onChange={e => this.onChange("phoneNumber", e.target.value)}
            type="number"
            value={phoneNumber}
            className="main-text-box"
            placeholder="Phone Number"
          />
          <br />
          <br />
          <input onClick={this.onSubmit} type="submit" value="Submit" className="main-btn"/>
        </form>
      </div>
    );
  }
}

export default Emergency;

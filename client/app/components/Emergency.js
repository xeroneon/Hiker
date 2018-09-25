
import React, { Component } from "react";
import axios from 'axios';
import {
  getFromStorage,
  setInStorage
} from "../utils/storage";
import { Redirect } from 'react-router';
import Nav from "./Nav/Nav"

class Emergency extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: Number,
    token: getFromStorage("Hiker"),
    btnName: "Sign Out",
    route: "signout",
    redirect: false
  };

  checkin=() => {
    var body = {
      body: "sends after timmer is up",
      to: "+14022022526",  
      from: "+18508528647" 
      }
        
    var myTimer = setInterval(()=>{
        this.setState({
        time: this.state.time+1

      })
      console.log(this.state.time)
      if(this.state.time === 10) {
        axios.post ('/send-text-message', body).then((response) => {
          console.log(response)
        })
        clearInterval(myTimer)
        alert('time is up')
      }
    },1000)

  }


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
      phoneNumber: this.state.phoneNumber,
      token: this.state.token
    }

    // var body = {
    //     firstName: 'renata',
    //     lastName: 'wattier',
    //     phoneNumber: '4444'
    // }

    axios.post("/add-emergency", body)
      .then(res => {
        console.log(res)
        this.setState({
          redirect: true
        })
      }).catch(err => {
        console.log(err);
      })

  };

  componentDidMount() {
    axios.get('/all-emergency-contacts').then(res => {
      console.log(res)
    })

    if (!this.state.token) {
      this.setState({
        signedIn: true,
        btnName: "Sign In",
        route: "signin"
      })
    } else {
      this.setState({
        signedIn: true,
        btnName: "Sign Out",
        route: "signout"
      })
    }
  }

  render() {
    const { firstName, lastName, phoneNumber } = this.state;

    if (this.state.redirect) {
      return <Redirect to='/Home' />;
  }

    return (
      <div>
        <Nav btnName={this.state.btnName} route={this.state.route} onClick={this.handleClick} />
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
          <input onClick={this.onSubmit} type="submit" value="Submit" className="main-btn" />
        </form>
        <h1>{this.state.time}</h1>
        <button onClick={this.checkin}>Check in</button>
      </div>
    );
  }
}

export default Emergency;

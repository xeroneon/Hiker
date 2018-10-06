import React, { Component } from "react";
import axios from 'axios';
import {
  getFromStorage,
  setInStorage
} from "../../utils/storage";
import { Redirect } from 'react-router';
import Nav from "../Nav/Nav";

class Emergency extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    redirect: false,
    success: "",
    error: "",
    token: getFromStorage("Hiker")
  };


  onChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    var body = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      token: getFromStorage("Hiker")
    }

    axios.post("/add-emergency", body)
      .then(res => {
        if(res.data.success) {
          this.setState({
            success: "Contact Added successfully",
            firstName: "",
            lastName: "",
            phoneNumber: Number
          })

          setTimeout(function() {
            this.setState({
              success: ""
            })
          }.bind(this), 3000)
        } else  {
          this.setState({
            error: "Server Error, try again"
          })

          setTimeout(function() {
            this.setState({
              error: ""
            })
          }.bind(this), 3000)
        }

      }).catch(err => {
        console.log(err);
      })

  };

  onFinish = event => {
    event.preventDefault();

    this.setState({
      redirect: true
    })
  }

  render() {
    const { firstName, lastName, phoneNumber } = this.state;
    if (this.state.redirect) {
      return <Redirect to='/Home' />;
    }

    if(!this.state.token) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Nav onClick={this.handleClick} token={this.state.token}/>

        <h2 className="text-white title">Emergency Contacts</h2>
        <h3 className="text-danger">{this.state.error}</h3>
        <h3 className="text-success">{this.state.success}</h3>



        <form className="main-form">
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
          <button onClick={this.onSubmit} className="main-btn">+ Add</button>
          <br />
          <br />
          <button onClick={this.onFinish} className="main-btn" >Finish</button>
        </form>
      </div>
    );
  }
}




export default Emergency;
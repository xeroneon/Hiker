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
    phoneNumber: Number,
    btnName: "Sign Out",
    route: "signout",
    redirect: false,
    success: "",
    error: ""
  };


  onChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    this.setState({
      firstName: "",
      lastName: "",
      phoneNumber: Number,
    })

    var body = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      token: getFromStorage("Hiker")
    }

    axios.post("/add-emergency", body)
      .then(res => {
        console.log(res)
        if(res.message) {
          this.setState({
            success: "Contact Added successfully"
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

  componentDidMount() {
    axios.get('/all-emergency-contacts').then(res => {
      console.log(res)
    })
  }

  render() {
    const { firstName, lastName, phoneNumber } = this.state;
    if (this.state.redirect) {
      return <Redirect to='/Home' />;
  }

    return (
      <div>
        <Nav btnName={this.state.btnName} route={this.state.route} onClick={this.handleClick} />

        <h2 className="text-white">Emergency Contacts</h2>
        <h3 className="text-danger">{this.state.error}</h3>
        <h3 className="text-success">{this.state.success}</h3>



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
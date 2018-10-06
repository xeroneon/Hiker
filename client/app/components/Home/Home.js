import React, { Component } from 'react';
import Map from '../Map/Map';
import 'whatwg-fetch';
import {
  getFromStorage,
  setInStorage
} from "../../utils/storage";
import { Redirect } from 'react-router';
import Nav from "../Nav/Nav";
import axios from 'axios';



class Home extends Component {

  state = {
    token: getFromStorage("Hiker"),
  }

  handleClick() {
    if (this.state.token) {
      localStorage.removeItem("Hiker");
    }
  }

  componentWillMount = () => {
    axios.get(`/api/get-user?token=${this.state.token}`)
      .then(res => {
        if(res.data.success && res.data.user.role === 99) {
          this.setState({
            auth: true
          })
        }
      })
  }

  componentDidMount() {
    let body = {token: this.state.token};
    axios.post("/api/checkstatus", body)
    .then(res => {
        if (res.data.checkedIn) {
            this.setState({ checkedIn: true })
        }
        console.log(res);
    })
  }

  render() {

    const token = getFromStorage("Hiker");

    if (!token) {
      return <Redirect to='/' />;
    }

    if(this.state.checkIn) {
      return <Redirect to='/checkout' />
    }
    document.body.style = "";
    return (
      <div>
        <Nav onClick={this.handleClick} token={this.state.token} admin={this.state.auth}/>

        <Map />

      </div>

    );
  }

}

export default Home;

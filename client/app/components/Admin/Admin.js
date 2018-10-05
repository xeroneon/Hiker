import React, { Component } from "react";
import Map from '../Map/Clustermap';
import {
  getFromStorage,
  setInStorage
} from "../../utils/storage";
import { Redirect } from 'react-router';
import Nav from "../Nav/Nav";
import axios from "axios";

class Admin extends Component {

  state = {
    token: getFromStorage("Hiker")
  }

  // const userAdmin = getFromStorage("userAdmin")
  // console.log(userAdmin)

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

  render() {

    if (this.state.auth) {
  
  
      return (

        <div className="admin">
          <Nav token={this.state.token} admin={this.state.auth}/>
          <Map />
        
        </div>
      
      )
    }
  
    else {
      return ("You do not have permission to access this page")
    }
  }



}

export default Admin
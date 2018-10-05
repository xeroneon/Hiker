import React, { Component } from "react";
import Map from '../Map/Clustermap';
import {
  getFromStorage,
  setInStorage
} from "../../utils/storage";
import { Redirect } from 'react-router';
import Nav from "../Nav/Nav";
import axios from "axios";
import moment from "moment";

class Admin extends Component {

  state = {
    token: getFromStorage("Hiker")
  }

  // const userAdmin = getFromStorage("userAdmin")
  // console.log(userAdmin)

  componentDidMount = () => {
    axios.get(`/api/get-user?token=${this.state.token}`)
      .then(res => {
        if (res.data.success && res.data.user.role === 99) {
          this.setState({
            auth: true
          })
        }
      })

    axios.get(`/api/get-all-users`)
      .then(res => {
        this.setState({
          data: res.data.data
        })

        console.log(res.data.data);
      })
  }

  render() {

    if (this.state.auth) {


      return (

        <div className="admin">
          <Nav token={this.state.token} admin={this.state.auth} />
          <Map />
          <div className="container users-container">
            <h1 className="text-white">Users Checked In</h1>
            <div className="row">

              {this.state.data && this.state.data.map(data => {
                return (
                  <div className="col-sm-3" key={data._id}>
                    <div className="users card">
                      <div className="card-body">
                        <h3 className="card-title">Name: <br/>{data.firstName} {data.lastName}</h3>
                        <br/>
                        <h3 className="card-title">Trail: <br/>{data.trails[data.trails.length - 1].name}</h3>
                        <br/>
                        <h3 className="card-title">Complete Time:<br/>{moment(data.trails[data.trails.length - 1].completetime).format("MMMM Do, h:mm a")}</h3>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

      )
    }

    else {
      return ("You do not have permission to access this page")
    }
  }



}

export default Admin
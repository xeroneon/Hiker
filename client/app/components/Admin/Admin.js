import React, { Component } from "react";
import { getFromStorage, setInStorage } from "../../utils/storage";
import { Redirect } from "react-router";
import Nav from "../Nav/Nav";
import axios from "axios";
import moment from "moment";
import { Map, Marker, Popup } from "react-leaflet";
import TrailsAPI from "../../utils/API";
const position = [33.5, -112];

class Admin extends Component {
  state = {
    token: getFromStorage("Hiker"),
    allUserTrails: []
  };

  // const userAdmin = getFromStorage("userAdmin")
  // console.log(userAdmin)

  componentDidMount = () => {
    axios.get(`/api/get-user?token=${this.state.token}`).then(res => {
      if (res.data.success && res.data.user.role === 99) {
        this.setState({
          auth: true
        });
      }
    });
    TrailsAPI.getTrailsInArea({ lat: position[0], lon: position[1] }).then(
      data => {
        const allTrails = data.data.trails;
        axios.get(`/api/get-all-users`).then(res => {
          this.setState({
            data: res.data.data
          });
          const users = res.data.data;

          let allUserTrails = [];

          users.map(user => {
            allUserTrails = allUserTrails.concat(
              user.trails.map(trail => {
                const t = allTrails.find(t => t.name === trail.name);
                return {
                  ...trail,
                  position: [t.latitude, t.longitude],
                  firstName: user.firstName,
                  lastName: user.lastName
                };
              })
            );
          });

          this.setState({ allUserTrails });

          console.log(res.data.data);
        });
      }
    );
  };

  render() {
    if (this.state.auth) {
      return (
        <div className="admin">
          <Nav token={this.state.token} admin={this.state.auth} />
          <div className="azMap">
            <div id="map-wrapper">
              <Map
                center={position}
                style={{ height: "100%", width: "100%" }}
                zoom={5}
              >
                {this.state.allUserTrails &&
                  this.state.allUserTrails.map(trail => {
                    return (
                      <Marker position={trail.position}>
                        <Popup>
                          User {trail.firstName} {trail.lastName} has checked in{" "}
                          {trail.name}
                        </Popup>
                      </Marker>
                    );
                  })}
              </Map>
            </div>
          </div>
          <div className="container users-container">
            <h1 className="text-white">Users Checked In</h1>
            <div className="row">
              {this.state.data &&
                this.state.data.map(data => {
                  return (
                    <div className="col-sm-3" key={data._id}>
                      <div className="users card">
                        <div className="card-body">
                          <h3 className="card-title">
                            Name: <br />
                            {data.firstName} {data.lastName}
                          </h3>
                          <br />
                          <h3 className="card-title">
                            Trail: <br />
                            {data.trails[data.trails.length - 1].name}
                          </h3>
                          <br />
                          <h3 className="card-title">
                            Complete Time:
                            <br />
                            {moment(
                              data.trails[data.trails.length - 1].completetime
                            ).format("MMMM Do, h:mm a")}
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      );
    } else {
      return "You do not have permission to access this page";
    }
  }
}

export default Admin;

import React, { Component } from "react";
import L from "leaflet";
import { getFromStorage, setInStorage } from "../../utils/storage";
import { Redirect } from "react-router";
import Nav from "../Nav/Nav";
import axios from "axios";
import moment from "moment";
import { Map, Marker, Popup } from "react-leaflet";
import TrailsAPI from "../../utils/API";


class Clustermap extends Component {
  state = {
    token: getFromStorage("Hiker"),
    allUserTrails: []
  };
  componentDidMount() {
    let mapstate = {
      lat: 33.5,
      lon: -112
    };
    let map = L.map("map").setView(mapstate, 13);

    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoianJuZWxzMTAiLCJhIjoiY2prenI0cGpyMHg5bDN3bGU3bnd2eWZlMCJ9.3APPzTqzXC9bF-V3Up6z3w",
      {
        maxZoom: 18,
        id: "mapbox.outdoors"
      }
    ).addTo(map);
  }


  render() {
    return (
      <div className="azMap">
        <div id="map-wrapper">
          <div id="map" /></div>

          <div className="newTrail">
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
          </div>
        </div>
      // </div>
    );
  }
}

export default Clustermap;

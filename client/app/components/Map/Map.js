import React, { Component } from 'react';
import TrailsAPI from "../../utils/API";
import L from 'leaflet';
import Basemap from "./Basemap";
import TrailData from "./Trails";
import Locate from './Locate';


const divStyle = {
  height: "700px",
  width: "700px",
};



class Map extends Component {

  constructor(props) {
    super(props);

    this.state = {
      something: ''
    }
  }

  componentDidMount() {
    let map = L.map("map").fitWorld();
    map.locate({ setView: true, maxZoom: 10 });
  
    Locate(map);

    let state = {
      lat: 33.5,
      lon: -112
    };
    TrailsAPI.getTrailsInArea(state).then(function (data) {
      // trailData = data;
      trailsInArea(data)
    })
    let trailInfo = {
      map: map,
      data: []
    }

    function onLocation() {
      state.lat = map.getCenter().lat;
      state.lon = map.getCenter().lng
      console.log(state)
      TrailsAPI.getTrailsInArea(state).then(function (data) {
        // trailData = data;
        trailsInArea(data)
      })
    }
    map.on('dragend', function (e) {
      onLocation(e)
    })

    Basemap.addTo(map)

    function trailsInArea(data) {
      // console.log(data)
      trailInfo.data = data.data;
      TrailData(trailInfo).addTo(map)

      $("body").on("click", "#check-in", function (e) {
        e.preventDefault();
        console.log("clicked")
        return
      })
    }
  }





  render() {
    return (
      <>
        <div className="azMap h-100 w-100">
          <div id="map-wrapper">
            <div id="map" style={divStyle}>

              <div id="button-wrapper">  legend
                </div>
            </div>




          </div>
          <div className="newTrail">
          </div>
        </div>
      </>
    );
  }
}


export default Map;
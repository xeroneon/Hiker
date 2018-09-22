import React, { Component } from 'react';
import TrailsAPI from "../../utils/API";
import L from 'leaflet';
import Basemap from "./Basemap";
import TrailData from "./Trails";
import Locate from './Locate';


// const divStyle = {
//   height: "",
//   width: "700px",
// };



class Map extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     something: ''
  //   }
  // }

  componentDidMount() {
    let map = L.map("map").fitWorld();
    let state = {
      lat: 33.5,
      lon: -112
    };
    let trailInfo = {
      map: map,
      data: []
    }


    map.locate({ setView: true, maxZoom: 10 });

    // Creates button and when clicked, locates the user and zooms in to their location
    Locate(map);

    // add Basemap component to map.
    Basemap.addTo(map)

    // on initial page load,
    // TrailsAPI.getTrailsInArea pulls 100 trails around the user. Then runs the function
    // trailsInArea with the data.
    TrailsAPI.getTrailsInArea(state).then(function (data) {
      // trailData = data;
      trailsInArea(data)
    })

    // finds the latlon of the center of map and runs TrailsAPI.
    function onLocation() {
      state.lat = map.getCenter().lat;
      state.lon = map.getCenter().lng
      console.log(state)
      TrailsAPI.getTrailsInArea(state).then(function (data) {
        // trailData = data;
        trailsInArea(data)
      })
    }

    // when user drags the map, it runs the function onLocation.  
    map.on('dragend', function (e) {
      onLocation(e)
    })

    // creates markers and popups for all the points. 
    // and adds a clickable function for it. 
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
      <div className="azMap">
        <div id="map-wrapper">
          <div id="map">

            <div id="button-wrapper">  legend
                </div>
          </div>




        </div>
        <div className="newTrail">
        </div>
      </div>

    );
  }
}


export default Map;
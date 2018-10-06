import React, { Component } from 'react';
import TrailsAPI from "../../utils/API";
import L from 'leaflet';
import Basemap from "./Basemap";
import Trails from "./Trails";
import Locate from './Locate';
import TrailView from './TrailView';
import Popup from './Popup';
// const divStyle = {
//   height: "",
//   width: "700px",
// };



class Clustermap extends Component {
  // constructor() {
  //   this.stateOfMarker = this.stateOfMarker.bind(this)
  // }
  invalidateSize(map) {
    console.log(this.trail)
    if (map) {
      setTimeout(() => { map.invalidateSize(true) }, 100);
      Basemap.addTo(map)
    }
  };

  state = {
    displayTrailInfo: true,
    trailInfo: String,
    markers: []
  }
  toggleTrailInfo = (trailInfo) => {
    this.setState({
      trailInfo: trailInfo
    })
    console.log(this.state)
  }
  componentDidMount() {
    let map = L.map("map").fitWorld();
    let toggletrailInfo = this.toggleTrailInfo;

    let state = {
      lat: 33.5,
      lon: -112
    };
    let trailInfo = {
      map: map,
      data: []
    }
    this.invalidateSize(map)
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
      // console.log(data)
      trailsInArea(data)
    })

    
    // function stateOfMarker(data) {
    //   this.setState((prevState, props) => ({
    //     marker: [...prevState.marker, ...data.data]
    //   }));
    // }
    // finds the latlon of the center of map and runs TrailsAPI.
    function onLocation() {
      state.lat = map.getCenter().lat;
      state.lon = map.getCenter().lng
      console.log(state)
      TrailsAPI.getTrailsInArea(state).then(function (data) {
        // let trailData = data;
        // console.log(data)
        // stateOfMarker(data)
        trailsInArea(data)
      })
      // console.log(data)
    }

    // when user drags the map, it runs the function onLocation.  
    map.on('dragend', function (e) {
      onLocation(e)
    })
    // creates markers and popups for all the points. 
    // and adds a clickable function for it. 
    function trailsInArea(data) {
      // map.removeLayer(Trails);
      
      trailInfo.data = data.data;
      Trails(trailInfo, toggletrailInfo)
    }

  }


  render() {
    let shouldDisplayTrailView;
    if (this.state.displayTrailInfo) {
      shouldDisplayTrailView = TrailView(this.state.trailInfo)
    }

    return (
      <div className="azMap">
        <div id="map-wrapper">
          <div id="map">
          </div>
          <div className="newTrail">
            {shouldDisplayTrailView}
          </div>
        </div>
      </div>

    );
  }
}


export default Clustermap;
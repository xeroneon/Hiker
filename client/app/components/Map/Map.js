import React, { Component } from 'react';
import TrailsAPI from "../../utils/API";
import L from 'leaflet';
// import TrailIcon from "./Icons";
import MapView from "./MapView";

const divStyle = {
  height: "700px",
  width: "700px",
};



let testState = {}

class Map extends Component {
  
  componentDidMount() {
    console.log()
    console.log(state)
    let map = L.map("map").fitWorld();
    map.locate({ setView: true, maxZoom: 10 });
    
    let state = {
      lat: 33.5,
      lon: -112
    };
    console.log(state)
    function onLocationFound(e) {
      map.on('dragend', function (e) {
        state.lat= map.getCenter().lat;
        state.lon = map.getCenter().lng
        console.log(state)
        TrailsAPI.getTrailsInArea(state).then(function(data){
          // trailData = data;
          trailsInArea(data)
        })
      })
      console.log(map.getCenter())
      L.circle(e.latlng).addTo(map);
    }
    
    coord()
    
    function coord(e) {
      
              map.on('locationfound', onLocationFound);
            }
            // }
            
            L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoianJuZWxzMTAiLCJhIjoiY2prenI0cGpyMHg5bDN3bGU3bnd2eWZlMCJ9.3APPzTqzXC9bF-V3Up6z3w", {
              maxZoom: 18,
              id: "mapbox.outdoors"
    }).addTo(map);
    let trailInfo;
    // TrailsAPI.getTrailsInArea(Map)
    function trailsInArea (data){
      console.log(data)
      trailInfo = data.data;
      // MapCoordinates(e)
        console.log(trailInfo);
        let lat;
        let lon;
        let trailName;
        let trailImage;
        let trailLength;
        let trailSummary;
        let marker;
        let testArray = [];
        let geojsonFeature = {
          testArray
        };


        function displayTrails(e) {
          for (let i = 0; i < trailInfo.trails.length; i++) {
            let userBlock = $("<div>");
            // console.log(trailInfo.trails[i])
            lat = trailInfo.trails[i].latitude;
            lon = trailInfo.trails[i].longitude;
            marker = L.marker([lat, lon]).addTo(map);
            trailName = trailInfo.trails[i].name;
            trailImage = trailInfo.trails[i].imgMedium;
            trailLength = trailInfo.trails[i].length;
            trailSummary = trailInfo.trails[i].summary;
            marker.bindPopup(`<div class="jumbotron trail-pop" id="trail-pic" style="background-image: url('${trailImage}')">
        <div class="info-container h-100">
        <div class="trail-stuff">
        <h1 class="display-4 trail-name">${trailName}</h1>
        <p class="trail-length m-0">${trailLength} miles</p>
        <hr class="my-2">
        <p class="trail-summary">${trailSummary}</p>
        </div>
        <div class="lead">
        <div class="btn btn-primary btn-lg" id="check-in" href="https://www.google.com/" role="button">Check In</div>
        </div>
        </div>
        </div>
        `);

            // userBlock.attr("data", trail.trails[i]);
            // userBlock.addClss("trails");
            // userBlock.html("<h1 class='display-4 trail-name'>"+trailName+"</h1>")
            // popup.set()
            // console.log(lat + "," + lon)
            // marker.bindPopup(popup)
          }
          // popup.openOn(map)

          // function onMapClick(e) {
          //     console.log(e.target)
          //     popup.openOn(map)
          //     // alert("You clicked the map at " + e.latlng);
          // }
          // map.on('click',onMapClick)
        }
        displayTrails();
        // marker.on('click', popup.openOn(map));
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
          <div id="map" style={divStyle}>
          </div>
          <div className="newTrail">
          </div>
        </div>
      </>
    );
  }

}

export default Map;
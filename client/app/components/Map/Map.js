import React, { Component } from 'react';
import TrailsAPI from "../../utils/API";
import L from 'leaflet';
import Basemap from "./Basemap";
import TrailData from "./Trails";
// import TrailMarker from "../../../public/assets/img/";


// const divStyle = {
//   height: "",
//   width: "700px",
// };

// const customControl = L.Control.extend({

//   // options: {
//   //   position: 'topright'
//   // },

//   onAdd: function (map) {
//     var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom auto-button');
//     container.style.backgroundColor = 'white';
//     container.style.backgroundImage = "src(../../../public/assets/img/locate.png)";
//     container.style.backgroundSize = "30px 30px";
//     container.style.width = '30px';
//     container.style.height = '30px';
//     // autoLocate.style.width = '100%', 'text-center';
//     // container(autoLocate);
//     container.onclick = function () {
//       console.log('buttonClicked');
//     }

//     return container;
//   }
// });


class Map extends Component {

  componentDidMount() {
    let map = L.map("map").fitWorld();
    map.locate({ setView: true, maxZoom: 10 });

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

    function onLocation(e) {
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

    // $('.auto-button').on('click', function (e) {
    //   // function onLocationFound(e) {
    //     var radius = e.accuracy / 2;

    //     L.marker(e.latlng).addTo(map)
    //       .bindPopup("You are within " + radius + " meters from this point").openPopup();

    //     L.circle(e.latlng, radius).addTo(map);
    //   // }

    //   map.on('locationfound', onLocationFound);
    // })

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
    // map.addControl(new customControl());
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
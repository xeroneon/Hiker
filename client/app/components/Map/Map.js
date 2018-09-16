// import React, { Component } from 'react';

// const divStyle = {
//     height: "50vh",
//     width: "100vw",
//     zIndex: 2
// };

// class Map extends Component {

//     render() {
//         return (
//             <>
//             <div className="azMap h-100 w-100">
//                 <div id="map" style={divStyle}>
//                 </div>
//                 <div className="newTrail">
//                 </div>
//             </div>
//             </>
//         );
//     }

// }

// export default Map;

import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from '../../src'

export default class MainMap extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}
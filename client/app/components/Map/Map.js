
const React = window.React
const { Map: LeafletMap, TileLayer, Marker, Popup } = window.ReactLeaflet
const position = [51.505, -0.09]
const Example = () => (
  <LeafletMap center={position} zoom={13}>
    <TileLayer
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        <span>
          A pretty CSS3 popup. <br /> Easily customizable.
        </span>
      </Popup>
    </Marker>
  </LeafletMap>
)
// window.ReactDOM.render(<Example />, document.getElementById('container'))

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

export default Example;
import React, { Component } from 'react';

const divStyle = {
    height: "50vh",
    width: "100vw",
    zIndex: 2
};

class Map extends Component {

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
import React, { Component } from 'react';

const divStyle = {
    height: "700px",
    width: "700px",
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
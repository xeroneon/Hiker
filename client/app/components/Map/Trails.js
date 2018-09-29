// import React from 'react';
import Icon from './Icons';
import TrailView from './TrailView';

let lat;
let lon;
let trailName;
let trailImage;
let trailLength;
let trailSummary;
const displayTrails = (props, handleClick) => {
    let marker = {};
    // props.map.removeLayer(marker);
    // const greenIcon = L.icon({
    //     iconUrl: Icon.options.iconUrl
    // })
    for (let i = 0; i < props.data.trails.length; i++) {
        // console.log(props.data.trails[i].latitude)


        lat = props.data.trails[i].latitude;
        // console.log(lat)
        lon = props.data.trails[i].longitude;

        trailName = props.data.trails[i].name;
        trailImage = props.data.trails[i].imgMedium;
        trailLength = props.data.trails[i].length;
        trailSummary = props.data.trails[i].summary;
        marker = L.marker([lat, lon], [trailName])


        const myPopup = { trailName: trailName, trailLength: trailLength, trailImage: trailImage, trailSummary: trailSummary }

        marker = L.marker([lat, lon], myPopup);
        marker.addTo(props.map);
        
        marker.on('click', function (e) {
            console.log(e.target.options)
            handleClick(e.target.options)
            TrailView(e.target.options)
            // PopContent(e.target.options)

        })

    }

}



export default displayTrails;






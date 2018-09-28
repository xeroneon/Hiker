// import React from 'react';
import Icon from './Icons';
import TrailView from './TrailView';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
// console.log(Icon.options.iconUrl)
console.log(Map)
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
        // console.log(marker.options)
        // var myPopup = L.DomUtil.create('div', 'infoWindow');
        // myPopup.innerHTML = `<div class="jumbotron trail-pop" id="trail-pic" style="background-image: url('${trailImage}')">
        // <div class="info-container h-100">
        // <div class="trail-stuff">
        // <h1 class="display-4 trail-name">${trailName}</h1>
        // <p class="trail-length m-0">${trailLength} miles</p>
        // <hr class="my-2">
        // <p class="trail-summary">${trailSummary}</p>
        // </div>
        // <div class="lead">
        // <div class="btn btn-primary btn-lg" id="check-in" href="https://www.google.com/" role="button">Check In</div>
        // </div>
        // </div>
        // </div>
        // `;

        const myPopup = { trailName: trailName, trailLength: trailLength, trailImage: trailImage, trailSummary: trailSummary }
        // // let myIcon = L.divIcon({className: 'my-div-icon'});
        // // L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
        marker = L.marker([lat, lon], myPopup);
        marker.addTo(props.map);
        // marker.on('click', function (e) {
        //     console.log(e.target.options.trailSummary)
        // //    return <TrailView>{e.target.options.trailName}</TrailView>
        // // render
        // })

        // marker.bindPopup(myPopup).addTo(props.map);
        marker.on('click', function (e) {
            console.log(e.target.options)
            
            // let image = e.target.options.trailImage;
            // let name = e.target.options.trailName;
            // let length = e.target.options.trailLength;
            // let summary = e.target.options.trailSummary;
            // let traildata = L.DomUtil.create('div', 'infoWindow');
            // traildata.innerHTML = `<div class="jumbotron trail-pop" id="trail-pic" style="background-image: url('${trailImage}')">
            // <div class="info-container h-100">
            // <div class="trail-stuff">
            // <h1 class="display-4 trail-name">${name}</h1>
            // <div class="btn btn-primary btn-lg" id="check-in" href="https://www.google.com/" role="button">Check In</div>
            // </div>
            // </div>
            // </div>
            // `;
            // $(".newTrail").empty();
            // $(".newTrail").append(traildata)
            handleClick(e.target.options)
            TrailView(e.target.options)
        })
    }
   
}


export default displayTrails;






import React from 'react';
// import TrailInfo from './Trails';
const TrailDisplay = props => {
    console.log("props" + props)
    let marker;
    marker = L.marker([props.lat, props.lon])
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
}

export default TrailDisplay;
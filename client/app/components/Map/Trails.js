import React, { Component } from 'react';
import Icon from './Icons';
import TrailView from './TrailView';
import hiking from './Icons'




const displayTrails = (props, handleClick) => {
    let lat;
    let lon;
    let trailName;
    let trailImage;
    let trailLength;
    let trailSummary;
    let marker = {};
    let cluster = [];
    let markerLayer = L.layerGroup();
    if (markerLayer) {
        console.log('it is undefined')
        // markerLayer.clearLayers(cluster)


        // props.map.removeLayer(marker);
        var greenIcon = L.icon({
            iconUrl: 'assets/img/leaf-green.png',
            // shadowUrl: 'leaf-shadow.png',
        
            iconSize:     [38, 95], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
        });


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
            // marker.addTo(props.map);
            cluster.push(marker)
            markerLayer.addLayer(marker)
            marker.on('click', function (e) {

                console.log(e.target.options)
                handleClick(e.target.options)
                TrailView(e.target.options)
                // PopContent(e.target.options)

            })

        }
        console.log(markerLayer)
        markerLayer.addTo(props.map)
        props.map.on('dragend', function (e) {
            
            markerLayer.clearLayers();
          })


    }
    else {
        console.log('lets clear some markers')
    }

}



export default displayTrails;






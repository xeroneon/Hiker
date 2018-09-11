let map = L.map("map").setView([33.5, -112], 10);

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoianJuZWxzMTAiLCJhIjoiY2prenI0cGpyMHg5bDN3bGU3bnd2eWZlMCJ9.3APPzTqzXC9bF-V3Up6z3w", {
    maxZoom: 18,
    id: "mapbox.outdoors"
}).addTo(map);



const url = "https://www.hikingproject.com/data/get-trails?lat=33.474309&lon=-112.004510&maxDistance=30&maxResults=100&key=200349739-ccc55901ced292735c9e92bba0a856c0"
let trailInfo;
$.ajax({

    method: 'get',
    url: url,
    success: function (result) {
        // trailInfo = result;
    }
}).then(function (data) {
    trailInfo = data;
    console.log(trailInfo);
    let hikerIcon = L.icon({
        iconUrl: './assets/img/hiker.png',
        // shadowUrl: '../images/leaf-shadow.png',
        iconSize: [25, 25], // size of the icon
        // shadowSize: [25, 25], // size of the shadow
        iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
        // shadowAnchor: [0, 0],  // the same for the shadow
        popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
    });
    let lat;
    let lon;
    let trailName;
    let trailImage;
    let trailLength;
    let trailSummary;
    let marker;
    let cntplace;

    let testArray = [];
    let geojsonFeature = {
        testArray
    };
    let myLines = [];

    // for (i = 0; i < trailInfo.trails.length; i++) {
    //     lat = trailInfo.trails[i].latitude;
    //     lon = trailInfo.trails[i].longitude;
    //     trailName = trailInfo.trails[i].name;
    //     trailImage = trailInfo.trails[i].imgMedium;
    //     trailLength = trailInfo.trails[i].length;
    //     trailSummary = trailInfo.trails[i].summary;
    //     cntplace = {
    //         "type": "Point", "id": trailName, "name": trailName, "length": trailLength, "summary": trailSummary, "image": trailImage, "coordinates": [lon, lat]
    //     }
    //     myLines.push(cntplace);
    // };


    // console.log(myLines);

    // // L.geoJson(myLines).addTo(map);

    // L.geoJson(myLines, {
    //     pointToLayer: function (feature, latlng) {
    //     // marker = L.marker([lat, lon], { icon: hikerIcon }).addTo(map);
    //     var marker = L.circleMarker(latlng, myLines);
    //         marker.bindPopup(
    //                                          '<br/><button type="button" class="btn btn-primary sidebar-open-button" href="http://www.google.com/">Click for more</button>');
    //         // results.push(feature.properties);
    //         return marker;
    //     }

    // }).addTo(map);

    // $("div").on("click", '.sidebar-open-button', function () {
    //     console.log("clicked")
    // });



    function displayTrails(e) {
        for (let i = 0; i < trailInfo.trails.length; i++) {
            let userBlock = $("<div>");
            // console.log(trailInfo.trails[i])
            lat = trailInfo.trails[i].latitude;
            lon = trailInfo.trails[i].longitude;
            marker = L.marker([lat, lon], { icon: hikerIcon }).addTo(map);
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
    $("body").on("click","#check-in", function (e) {
        e.preventDefault();
        console.log("clicked")
        return
    })
})
import axios from 'axios';

// const MapCenter = props => {
    // return axios.get("https://www.hikingproject.com/data/get-trails?lat="+props.lat+"&lon="+props.lon+"&maxDistance=30&maxResults=100&key=200349739-ccc55901ced292735c9e92bba0a856c0");
// }
// export default MapCenter

export default {
    getTrailsInArea: function (props) {
        return axios.get("https://www.hikingproject.com/data/get-trails?lat="+props.lat+"&lon="+props.lon+"&maxDistance=30&maxResults=100&key=200349739-ccc55901ced292735c9e92bba0a856c0");
    },
    // const getBasemap = (
    //     L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoianJuZWxzMTAiLCJhIjoiY2prenI0cGpyMHg5bDN3bGU3bnd2eWZlMCJ9.3APPzTqzXC9bF-V3Up6z3w", {
    //         maxZoom: 18,
    //         id: "mapbox.outdoors"
    //     }).addTo(map);
    // ),
    // getBaseBreedsList: function() {
    //   return axios.get("https://dog.ceo/api/breeds/list");
    // }
};
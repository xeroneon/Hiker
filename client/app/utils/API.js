import axios from 'axios';

// const MapCenter = props => {
// return axios.get("https://www.hikingproject.com/data/get-trails?lat="+props.lat+"&lon="+props.lon+"&maxDistance=30&maxResults=100&key=200349739-ccc55901ced292735c9e92bba0a856c0");
// }
// export default MapCenter

export default {
    getTrailsInArea: function (props) {
        return axios.get("https://www.hikingproject.com/data/get-trails?lat=" + props.lat + "&lon=" + props.lon + "&maxDistance=30&maxResults=20&key=200349739-ccc55901ced292735c9e92bba0a856c0");
    }
    // getBaseBreedsList: function() {
    //   return axios.get("https://dog.ceo/api/breeds/list");
    // }
};
// import Trails from './../../../public/assets/img/locate.png'
import Icon from './Icons';

const greenIcon = L.icon({
    iconUrl: Icon.options.iconUrl
})
const Locate = map => {
    // console.log(map)
    let lat;
    let lng;
    const customControl = L.Control.extend({


        onAdd: function (map) {
            const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom auto-button');
            container.style.backgroundColor = 'white';
            container.style.backgroundImage = `url()`;
            container.style.backgroundSize = "30px 30px";
            container.style.width = '30px';
            container.style.height = '30px';
            // autoLocate.style.width = '100%', 'text-center';
            // container(autoLocate);
            // container.onclick = function () {
            //     console.log('buttonClicked');
            //     // map.on('locationfound', e =>  {
            //     // var radius = e.accuracy / 2;
            //     console.log("worked");

            //     // L.marker([lat, lng]).addTo(map)
            //     // .bindPopup("You are within " + radius + " meters from this point").openPopup();
            //     // L.circle(latlng).addTo(map);
            //     // });
            //     console.log({ icon: greenIcon })
            // }


            return container;
        }
    });
    map.addControl(new customControl());

    function onLocationFound(e) {
        console.log(e.latlng)
        lat = e.latlng.lat;
        lng = e.latlng.lng
        // map.locate({ setView: true});
        // map.setZoom(10);

    }
    map.on('locationfound', onLocationFound);
    $('.auto-button').on('click', function () {
        map.locate({ setView: true, maxZoom: 12 });
        
        
        map.on('locationfound', e => {
            map.setZoom(10);
            // var radius = e.accuracy / 2;

            L.marker(e.latlng).addTo(map)
            // .bindPopup("You are within " + radius + " meters from this point").openPopup();
            // ,{ icon: greenIcon }
            L.circle(e.latlng).addTo(map);
        });


    })
    // $("body").on('click', '.leaflet-marker-icon', function (e){
    //     console.log(e)
    // })
}

export default Locate;
const Locate = map => {
    console.log(map)
    let latlng;
    const customControl = L.Control.extend({

        // options: {
        //   position: 'topright'
        // },

        onAdd: function (map) {
            const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom auto-button');
            container.style.backgroundColor = 'white';
            container.style.backgroundImage = "src(../../../public/assets/img/locate.png)";
            container.style.backgroundSize = "30px 30px";
            container.style.width = '30px';
            container.style.height = '30px';
            // autoLocate.style.width = '100%', 'text-center';
            // container(autoLocate);
            container.onclick = function () {
                console.log('buttonClicked');
                // map.on('locationfound', e =>  {
                // var radius = e.accuracy / 2;
                console.log("worked");

                L.marker(latlng).addTo(map)
                // .bindPopup("You are within " + radius + " meters from this point").openPopup();

                L.circle(latlng).addTo(map);
                // });
            }


            return container;
        }
    });
    map.addControl(new customControl());

    function onLocationFound(e) {
        console.log(e.latlng)
        latlng = e.latlng
        
    }
    map.on('locationfound', onLocationFound);
    $('.auto-button').on('click', function () {
        map.locate({ setView: true, maxZoom: 18 });

        map.on('locationfound', e => {
            // var radius = e.accuracy / 2;

            L.marker(e.latlng).addTo(map)
            // .bindPopup("You are within " + radius + " meters from this point").openPopup();

            L.circle(e.latlng).addTo(map);
        });


    })
}

export default Locate;
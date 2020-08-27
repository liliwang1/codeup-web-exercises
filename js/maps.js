mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-98.5098047, 29.4642251],
    zoom: 9
});
console.log(map);
// var zoomlevel = 11;
// var zoomlevelArray = array.from(document.getElementsByTagName('button'))
// zoomlevelArray.forEach(zoomlevel => {
//     var zoomID = zoomlevel.getAttribute("class");
//     zoomlevel = Number(zoomID);
// })
// document.getElementById('zoom1').addEventListener('click', zoomChange(5));
// document.getElementById('zoom2').addEventListener('click', zoomChange(10));
// document.getElementById('zoom3').addEventListener('click', zoomChange(15));
// function zoomChange(a) {
//     map.zoomTo(a, {duration: 9000})
// }
document.getElementById('zoom1').addEventListener('click', function() {
    map.zoomTo(5, { duration: 9000 });
});
document.getElementById('zoom2').addEventListener('click', function() {
    map.zoomTo(10, { duration: 9000 });
});
document.getElementById('zoom3').addEventListener('click', function() {
    map.zoomTo(15, { duration: 9000 });
});
document.getElementById('clear').addEventListener('click', clearMarkers)
function clearMarkers() {
    for (var i = 0; i < 3; i++) {
        document.getElementsByClassName('marker')[i].style.display = 'none';
    }
}
// var alamomarker = new mapboxgl.Marker()
//     .setLngLat([-98.4916, 29.4260])
//     .addTo(map);
//
// var alamoPopup = new mapboxgl.Popup()
//     .setHTML("<p>Remember The Alamo!</p>")
//     .addTo(map)
//
// alamomarker.setPopup(alamoPopup)

// var sichuanGardenMarker = new mapboxgl.Marker().setLngLat([-98.527475, 29.543655]).addTo(map);
// var sichuanGardenPopup = new mapboxgl.Popup().setHTML('<p>SiChuan Garden</p>').addTo(map)
// sichuanGardenMarker.setPopup(sichuanGardenPopup)

// var sichuanGarden = [-98.527475, 29.543655];
// var popup = new mapboxgl.Popup({ offset: 25 }).setText(
//     'SiChuan Garden'
// );
//
// // create DOM element for the marker
// var el = document.createElement('div');
// el.id = 'marker';
//
// // create the marker
// new mapboxgl.Marker(el)
//     .setLngLat(sichuanGarden)
//     .setPopup(popup) // sets a popup on this marker
//     .addTo(map);

var geojson = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-98.527475, 29.543655]
        },
        properties: {
            title: '',
            description: 'Sichuan Garden'
        }
    },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-98.5098047, 29.4642251]
            },
            properties: {
                title: '',
                description: 'Chris Madrids'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-98.479449, 29.570312]
            },
            properties: {
                title: '',
                description: 'Alamo Cafe'
            }
        }]
};

geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
        .addTo(map);
});

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);




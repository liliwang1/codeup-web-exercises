mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-98.4916, 29.4252],
    zoom: 10
});

var alamomarker = new mapboxgl.Marker()
    .setLngLat([-98.4916, 29.4260])
    .addTo(map);

var alamoPopup = new mapboxgl.Popup()
    .setHTML("<p>Remember The Alamo!</p>")
    .addTo(map)

alamomarker.setPopup(alamoPopup)

var effel = new mapboxgl.Marker().setLngLat([2.2945, 48.8584]).addTo(map);


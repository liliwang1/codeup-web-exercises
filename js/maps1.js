mapboxgl.accessToken = MAPBOX_TOKEN;
var map1 = new mapboxgl.Map({
    container: 'map1',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-98.5098047, 29.4642251],
    zoom: 10
});

map1.on('load', function() {
    map1.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Sichuan Garden</strong><p><a href="http://" target="_blank" title="Opens in a new window">Sichuan Garden</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
                        'icon': 'bar'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-98.527475, 29.543655]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Chris Madrids</strong><p><a href="http://chrismadrids.com" target="_blank" title="Opens in a new window">Chris Madrids</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
                        'icon': 'bar'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-98.5098047, 29.4642251]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Alamo Cafe</strong><p><a href="http://alamocafe.com" target="_blank" title="Opens in a new window">Alamo Cafe</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p><img src="../image/alamocafe.png" alt="alamocafe" style="height: 10px; width: 12px">',// why not working?
                        'icon': 'bar'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-98.479449, 29.570312]
                    }
                },
            ]
        }
    });
    map1.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'icon-image': '{icon}-15',
            'icon-allow-overlap': true
        }
    });
    map1.on('click', 'places', function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map1);
    });

// Change the cursor to a pointer when the mouse is over the places layer.
    map1.on('mouseenter', 'places', function() {
        map1.getCanvas().style.cursor = 'pointer';
    });

// Change it back to a pointer when it leaves.
    map1.on('mouseleave', 'places', function() {
        map1.getCanvas().style.cursor = '';
    });
});
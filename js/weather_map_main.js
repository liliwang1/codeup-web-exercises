(function () {
    "use strict"
    $().ready(function () {
        mapboxgl.accessToken = MAPBOX_TOKEN;
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-98.5098047, 29.4642251],
            zoom: 5
        });

        var marker = new mapboxgl.Marker({
            draggable: true,
            color: 'pink',
            // scale: 1
        })
            .setLngLat([-98.4936, 29.4241])
            .addTo(map);

        $('#citySearch').click(function (e) {
            e.preventDefault();
            var citySearch = $('#cityInput').val();
            updateWeatherByLocation(citySearch);
            $('#cityInput').val('');
        })

        function toggleTheme(main, date1) {
            var hourNow = date1.getHours();
            console.log(hourNow);
            if (hourNow < 6 || hourNow > 18) {
                document.documentElement.style.setProperty('--background-img', 'url("../image/darkness.png")');
                if (main === 'Clouds') {
                    $('#icon').html('<i class="fas fa-cloud-moon" style="font-size:1.8em"></i>');
                } else if (main === 'Clear') {
                    $('#icon').html('<i class="fas fa-moon" style="font-size:1.8em"></i>');
                } else if (main === 'Rain' || 'Thunderstorm') {
                    $('#icon').html('<i class="fas fa-cloud-moon-rain" style="font-size:1.8em"></i>');
                } else {
                    $('#icon').html('<i class="fas fa-star" style="font-size:1.8em"></i>');
                }
            } else if (main === 'Clouds') {
                // document.documentElement.style.setProperty('--background-color', '#d8d3cd');
                document.documentElement.style.setProperty('--background-img', 'url("../image/cloudy-day.png")');
                $('#icon').html('<i class="fas fa-cloud" style="font-size:1.8em"></i>');
            } else if (main === 'Clear') {
                // document.documentElement.style.setProperty('--background-color', '#ffcb74');
                document.documentElement.style.setProperty('--background-img', 'url("../image/let-there-be-sun.png")');
                $('#icon').html('<i class="fas fa-sun" style="font-size:1.8em"></i>');
            } else if (main === 'Rain') {
                // document.documentElement.style.setProperty('--background-color', '#93b5e1');
                document.documentElement.style.setProperty('--background-img', 'url("../image/ripples.png")');
                $('#icon').html('<i class="fas fa-cloud-rain" style="font-size:1.8em"></i>');
            } else if (main === 'Thunderstorm') {
                // document.documentElement.style.setProperty('--background-color', '#93b5e1');
                document.documentElement.style.setProperty('--background-img', 'url("../image/ripples.png")');
                $('#icon').html('<i class="fas fa-cloud-showers-heavy" style="font-size:1.8em"></i>');
            } else {
                // document.documentElement.style.setProperty('--background-color', '#93b5e1');
                document.documentElement.style.setProperty('--background-img', 'url("../image/ripples.png")');
                $('#icon').html('<i class="fas fa-cloud-sun" style="font-size:1.8em"></i>');
            }
        }

        function renderCurrent(data, dLocal, weekday) {
            let html = `
                    <div class="mb-0">
                        <h3 class="text-center mb-0">${data.name}</h3>
                        <div class="text-center">${data.sys.country}</div>
                    </div>
                    <div class="h6 mb-0 font-weight-bold">
                        <a href="" style="color:#555;text-decoration: underline" id="popover">
                        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">${data.main.temp} ℉  </a>
                    </div><hr>
                    <div class="font-italic py-2 py-md-0">Feels like:  ${data.main.feels_like} ℉</div>
                    <div class="font-weight-bold pb-2 pb-md-0">${data.weather[0].main}</div>
                    <div class="h6 text-center pb-2 pb-md-0">Description:  <span class="font-weight-bold">${data.weather[0].description}</span>
                    </div><hr>
                    <div class="text-center">
                        <div class="text-wrap py-3 pt-md-2">Humidity:  ${data.main.humidity}%</div>
                        <div class="text-wrap pb-3">Visibility:  ${data.visibility} m</div>
                        <div class="text-wrap pb-3">Wind speed:  ${data.wind.speed} m/hr</div>
                    </div>
                    `;
            $('#current').html(html);
            $('#popover').click(function (e) {
                e.preventDefault();
                $('div#popover-box').html(`max-temp: ${data.main.temp_min} ℉<br>min-temp: ${data.main.temp_max} ℉`).toggleClass('invisible');
            });
            $('#date').html(`<span>${data.name}, ${data.sys.country}  
                                      <span class=" ml-3 font-italic text-secondary">${dLocal.toLocaleString("en-CA").split(", ").reverse().join(" ")}, ${weekday}</span>
                                  </span>
                                 `);
        }

        function onSuccessCurrent(data, status) {
            console.log("Request status: " + status);
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var dLocal = new Date((data.dt + (data.timezone + 18000)) * 1000);
            console.log(data, data.weather[0].main, data.dt, dLocal);
            var weekday = days[dLocal.getDay()];
            renderCurrent(data, dLocal, weekday);
            toggleTheme(data.weather[0].main, dLocal);
            marker.setLngLat([data.coord.lon, data.coord.lat]);
            map.setCenter([data.coord.lon, data.coord.lat]);
        }

        function renderForecast(data) {
            var html = "";
            var list = data.list;
            console.log(data.list);
            for (let listItem of list) {
                if (listItem.dt_txt.includes("12:00:00")) {
                    console.log(listItem);
                    html += `
                            <li id="forecast-item" class="list-group-item d-flex flex-wrap align-items-center justify-content-between h6" data-toggle="collapse" data-target="#collapse-box">
                                <sapn class="text-nowrap">${listItem.dt_txt.split(' ')[0]}</sapn>
                                <img class="mx-auto" src="http://openweathermap.org/img/w/${listItem.weather[0].icon}.png">
                                <span class="font-italic text-wrap mx-auto w-25 text-secondary">${listItem.main.temp_max} ℉ / ${listItem.main.temp_min} ℉</span>
                                <span class="ml-auto w-25 text-wrap font-weight-bold">${listItem.weather[0].description}</span>
                            </li>
                            <p id="collapse-box" class="collapse text-wrap text-center">
                                <span class="text-wrap pr-3 font-italic text-secondary">Feels like: 
                                    <span class="text-dark">${listItem.main.feels_like} ℉</span>
                                </span>
                                <span class="text-wrap px-2 font-italic text-secondary">Humidity: 
                                    <span class="text-dark">${listItem.main.humidity} %</span>
                                </span>
                                <span class="text-wrap pl-3 font-italic text-secondary">Wind speed: 
                                    <span class="text-dark">${listItem.wind.speed} m/hr</span>
                                </span>
                            </p>
                            `;
                }
            }
            $('#forecast').html(html);
            $('#cityName').html(`of  ${data.city.name}`);
        }

        function onSuccessForecast(data, status) {
            console.log("Request status: " + status);
            console.log(data);
            renderForecast(data);
        }

        function updateWeatherByLocation(q) {
            $.ajax("http://api.openweathermap.org/data/2.5/weather?units=imperial", {
                data: {
                    APPID: OPEN_WEATHER_APPID,
                    q: q
                }
            }).done(onSuccessCurrent);

            $.ajax("http://api.openweathermap.org/data/2.5/forecast?units=imperial", {
                data: {
                    APPID: OPEN_WEATHER_APPID,
                    q: q,
                }
            }).done(onSuccessForecast);
        }

        updateWeatherByLocation('San Antonio');

        marker.on('dragend', updateWeatherByMarker);

        function updateWeatherByMarker() {
            map.setZoom(6);
            var lngLat = marker.getLngLat();

            $.ajax(`http://api.openweathermap.org/data/2.5/weather?lat=${lngLat.lat}&lon=${lngLat.lng}&units=imperial`, {
                data: {
                    APPID: OPEN_WEATHER_APPID,
                }
            }).done(onSuccessCurrent);

            $.ajax(`http://api.openweathermap.org/data/2.5/forecast?lat=${lngLat.lat}&lon=${lngLat.lng}&units=imperial`, {
                data: {
                    APPID: OPEN_WEATHER_APPID,
                }
            }).done(onSuccessForecast);
        }

        // var city = $('#dropdownCity').val();
        // $('#dropdownCity').on('change', updateWeather(city));

        var dateSA = new Date();
        var dSA = dateSA.toLocaleString("en-CA");
        $('#local-info').html(`<div>San Antonio: </div>
                                    <div>${dSA.slice(0, dSA.indexOf(','))}</div>
                                    <div>${dSA.slice(dSA.indexOf(' '), dSA.length)}</div>`); // not displayed on webpage
    });
})();
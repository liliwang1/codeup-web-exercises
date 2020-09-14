(function () {
    "use strict"
    $().ready(function () {
//------------------------------------------------- Initiate Map --------------------------------------------------//
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
            scale: 1.1
        })
            .setLngLat([-98.4936, 29.4241])
            .addTo(map);

        // add locator to Locate the user:
        // map.addControl(
        //     new mapboxgl.GeolocateControl({
        //         positionOptions: {
        //             enableHighAccuracy: true
        //         },
        //         trackUserLocation: true
        //     })
        // );

//---------------------------------------------------- Events -----------------------------------------------------//
//------------------------------------------------- Search event --------------------------------------------------//
        $('#citySearch').click(function (e) {
            e.preventDefault();
            var searchInput = $('#cityInput').val();
            updateWeatherByLocation(searchInput);
            $('#cityInput').val('');
        })
//------------------------------------------------ Dropdown event -------------------------------------------------//
        $('.city-toggle').click(function (e) {
            e.preventDefault();
            var city = $(this).text();
            updateWeatherByLocation(city);
        })

        $('.map-toggle').click(function (e) {
            e.preventDefault();
            var style = $(this).text().toLowerCase();
            if (style === 'light' || 'dark') {
                map.setStyle(`mapbox://styles/mapbox/${style}-v10`);
            } else {
                map.setStyle(`mapbox://styles/mapbox/${style}-v11`);
            }
        })

        $('.unit-toggle').click(function (e) {
            e.preventDefault();
            var unit = $(this).text().toLowerCase();
            console.log(unit);
            // updateWeatherByLocation(unit);
        }) // not yet finished
//-------------------------------------------------- Drag event ---------------------------------------------------//
        marker.on('dragend', updateWeatherByMarker);

//-------------------------------------------------- Functions ----------------------------------------------------//
        function toggleTheme(main, date1) {
            var hourNow = date1.getHours();
            // var monthNow = date1.getMonth(); // expand the month theme
            var chars = $('#date, #citySearch, nav>h1, #icon, #navbarDropdown, .card-header, .footer-info');
            if (hourNow < 6 || hourNow > 18) {
                document.documentElement.style.setProperty('--background-img', 'url("../image/darkness.png")');
                document.documentElement.style.setProperty('--background-nav', 'rgba(50,50,50,0.5)');
                chars.css('color', '#eee');
                if (main === 'Clouds') {
                    $('#icon').html('<i class="fas fa-cloud-moon"></i>');
                } else if (main === 'Clear') {
                    $('#icon').html('<i class="fas fa-moon"></i>');
                } else if (main === 'Rain' || 'Thunderstorm') {
                    $('#icon').html('<i class="fas fa-cloud-moon-rain"></i>');
                } else if (main === 'Snow') {
                    $('#icon').html('<i class="fas fa-snowflake"></i>');
                } else {
                    $('#icon').html('<i class="fas fa-star"></i>');
                }
            } else if (main === 'Clouds') {
                // document.documentElement.style.setProperty('--background-color', '#d8d3cd');
                document.documentElement.style.setProperty('--background-img', 'url("../image/cloudy-day.png")'); //background choices:color,static pic, gif.
                $('#icon').html('<i class="fas fa-cloud"></i>');
                document.documentElement.style.setProperty('--background-nav', 'rgba(200,200,200,0.5)');
                chars.css('color', '#222');
            } else if (main === 'Clear') {
                // document.documentElement.style.setProperty('--background-color', '#ffcb74');
                document.documentElement.style.setProperty('--background-img', 'url("../image/let-there-be-sun.png")');
                $('#icon').html('<i class="fas fa-sun"></i>');
                document.documentElement.style.setProperty('--background-nav', 'rgba(200,200,200,0.5)');
                chars.css('color', '#222');
            } else if (main === 'Rain') {
                // document.documentElement.style.setProperty('--background-color', '#93b5e1');
                document.documentElement.style.setProperty('--background-img', 'url("../image/ripples.png")');
                $('#icon').html('<i class="fas fa-cloud-rain"></i>');
                document.documentElement.style.setProperty('--background-nav', 'rgba(180,180,180,0.5)');
                chars.css('color', '#222');
            } else if (main === 'Thunderstorm') {
                // document.documentElement.style.setProperty('--background-color', '#93b5e1');
                document.documentElement.style.setProperty('--background-img', 'url("../image/ripples.png")');
                $('#icon').html('<i class="fas fa-cloud-showers-heavy"></i>');
                document.documentElement.style.setProperty('--background-nav', 'rgba(180,180,180,0.5)');
                chars.css('color', '#222');
            } else if (main === 'Snow') {
                // document.documentElement.style.setProperty('--background-color', '#93b5e1');
                document.documentElement.style.setProperty('--background-img', 'url("../image/blue-snow.png")');
                $('#icon').html('<i class="fas fa-snowflake"></i>');
                document.documentElement.style.setProperty('--background-nav', 'rgba(180,180,180,0.5)');
                chars.css('color', '#222');
            } else {
                // document.documentElement.style.setProperty('--background-color', '#93b5e1');
                document.documentElement.style.setProperty('--background-img', 'url("../image/ripples.png")');
                $('#icon').html('<i class="fas fa-cloud-sun"></i>');
                document.documentElement.style.setProperty('--background-nav', 'rgba(180,180,180,0.5)');
                chars.css('color', '#222');
            }
        }

        function onSuccessCurrent(data) {
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let dLocal = new Date((data.dt + (data.timezone + 18000)) * 1000);
            console.log(data, dLocal);
            let weekday = days[dLocal.getDay()];
            renderCurrent(data, dLocal, weekday);
            toggleTheme(data.weather[0].main, dLocal);
            marker.setLngLat([data.coord.lon, data.coord.lat]);
            map.setCenter([data.coord.lon, data.coord.lat]);
        }

        function renderCurrent(data, dLocal, weekday) {
            let html = `
                        <div class="mb-0">
                            <h3 class="text-center mb-0">${data.name}</h3>
                            <div class="text-center">${data.sys.country}</div>
                        </div>
                        <div class="h6 mb-0 font-weight-bold text-center">
                            <a href="#" style="color:#555;text-decoration: underline;font-size: 1.8em" id="popover">
                            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" style="height: 80px; width: 80px">
                            <div>${data.main.temp} ℉</div></a>
                        </div><hr>
                        <div class="h6 text-center pb-2 pb-md-0 font-weight-bold" style="font-size: 1.5em; color: #555">${data.weather[0].description}</div>
                        <div class="font-italic py-2 py-md-0">Feels like:  ${data.main.feels_like} ℉</div><hr>
                        <div class="text-center text-wrap text-muted">
                            <div class="py-3 pt-md-2">Humidity:  ${data.main.humidity}%</div>
                            <div class="pb-3">Pressure:  ${data.main.pressure} hPa</div>
                            <div class="pb-3">Visibility:  ${data.visibility} m</div>
                            <div class="pb-3">Wind speed:  ${data.wind.speed} mph</div>
                        </div>
                        `;
            $('#current').html(html);
            $('#popover').click(function (e) {
                e.preventDefault();
                $('div#popover-box').html(`${data.weather[0].main}<br>cloudiness: ${data.clouds.all} %`).toggleClass('invisible');
            });
            $('#date').html(`<span id="date-span" style="font-size: 1.1em">${data.name}, ${data.sys.country}  
                                      <span class="ml-3 font-italic">${weekday}, ${dLocal.toLocaleString("en-CA")}</span>
                                  </span>`);
        }

        function onSuccessForecast(data) {
            console.log(data);
            let timeZone = data.city.timezone + 18000;
            let list = data.list;
            let cityName = data.city.name;
            let info = list.map((e) => e.dt_txt).filter((e) => e.slice(11) === '15:00:00').map((e) => e.slice(0, 10));
            let highLowArr = [];
            for (let i = 0; i < info.length; i++) {
                let tempArr = list.filter((e) => e.dt_txt.split(' ')[0] === info[i]).map((e) => e.main.temp);
                highLowArr.push(highLowTemp(tempArr));
            }
            renderForecast(list, timeZone, cityName, highLowArr);
        }

        function renderForecast(list, timeZone, cityName, highLowArr) {
            let html = "";
            let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            let fiveDayArr = list.filter((e) => e.dt_txt.includes("15:00:00")).map((e, i) => {
                e.highTemp = highLowArr[i][0];
                e.lowTemp = highLowArr[i][1];
                return e;
            });
            for (let eachDay of fiveDayArr) {
                let dLocal = new Date((eachDay.dt + timeZone) * 1000);
                let weekday = days[dLocal.getDay()];
                html += `
                            <li id="forecast-item" class="list-group-item d-flex flex-wrap align-items-center justify-content-between h6" data-toggle="collapse" data-target="#collapse-box">
                                <span class="text-nowrap mr-auto">${eachDay.dt_txt.slice(5, 10)}</span>
                                <span class="text-nowrap mr-auto">${weekday}</span>
                                <img class="mx-auto" src="http://openweathermap.org/img/wn/${eachDay.weather[0].icon}.png">
                                <span class="font-italic text-nowrap text-center mx-auto w-25 text-secondary">${eachDay.highTemp} ℉ / ${eachDay.lowTemp} ℉</span>
                                <span class="ml-auto w-25 text-wrap text-center font-weight-bold">${eachDay.weather[0].description}</span>
                            </li>
                            <p id="collapse-box" class="collapse text-wrap text-center">
                                <span class="text-wrap pr-3 font-italic text-secondary">Feels like: 
                                    <span class="font-weight-bold">${eachDay.main.feels_like} ℉</span>
                                </span>
                                <span class="text-wrap px-2 font-italic text-secondary">Humidity: 
                                    <span class="font-weight-bold">${eachDay.main.humidity} %</span>
                                </span>
                                <span class="text-wrap pl-3 font-italic text-secondary">Wind speed: 
                                    <span class="font-weight-bold">${eachDay.wind.speed} mph</span>
                                </span>
                            </p>`;
            }
            $('#forecast').html(html);
            $('#cityName').html(`of  ${cityName}`);
        }

        function updateWeatherByLocation(q) {
            $.ajax("http://api.openweathermap.org/data/2.5/weather", {
                data: {
                    APPID: OPEN_WEATHER_APPID,
                    q: q,
                    units: 'imperial'
                }
            }).done(onSuccessCurrent);

            $.ajax("http://api.openweathermap.org/data/2.5/forecast?units=imperial", {
                data: {
                    APPID: OPEN_WEATHER_APPID,
                    q: q,
                }
            }).done(onSuccessForecast);
        }

        function updateWeatherByMarker() {
            map.setZoom(6);
            let lngLat = marker.getLngLat();

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

        function highLowTemp(arr) {
            let high = arr.reduce(function (acc, cur) {
                if (acc >= cur) return acc;
                else return cur;
            }, 0)
            let low = arr.reduce(function (acc, cur) {
                if (acc <= cur) return acc;
                else return cur;
            })
            return [high, low];
        }

        updateWeatherByLocation('San Antonio');
//-------------------------------------------------- Local time ---------------------------------------------------//
        var dateSA = new Date();
        var dSA = dateSA.toLocaleString("en-CA");
        $('#local-info').html(`<div>San Antonio: </div>
                                    <div>${dSA.slice(0, dSA.indexOf(','))}</div>
                                    <div>${dSA.slice(dSA.indexOf(' '), dSA.length)}</div>`); // not displayed on webpage
    });
})();
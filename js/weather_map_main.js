(function () {
    "use strict"
    $().ready(function () {
        var d = new Date();
        var h = d.getHours();
        $('#date').html(`<span>${d.toLocaleString()} ${h}</span>`)
        // if (h > 6 || h < 20) {}
        function updateWeather(q) {
        $.ajax("http://api.openweathermap.org/data/2.5/weather?units=imperial", {
            data: {
                APPID: OPEN_WEATHER_APPID,
                q: q
            }
        }).done(onSuccessCurrent);

        function renderCurrent(data) {
            let html;
            html = `
                <h3 class="mb-0">${data.name}</h3>
                <div class="h6 mb-0"><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">  ${data.main.temp} F</div><hr>
                <div>Feels like:  ${data.main.feels_like} F</div>
                <div>${data.weather[0].main}</div>
                <div class="h6">Description:  ${data.weather[0].description}</div><hr>
                <div class="">humidity:  ${data.main.humidity}%</div>
                <div class="">visibility:  ${data.visibility} m</div>
                <div>wind speed:  ${data.wind.speed} m/hr</div>
                `;
            $('#current').html(html);
        }

        function onSuccessCurrent(data, status, jqXhr) {
            console.log("Request status: " + status);
            console.log(data);
            renderCurrent(data);
        }

        $.ajax("http://api.openweathermap.org/data/2.5/forecast?units=imperial", {
            data: {
                APPID: OPEN_WEATHER_APPID,
                q: q,
                // units: imperial
            }
        }).done(onSuccessForecast);
        function renderForecast(data) {
            var html = "";
            var list = data.list;
            console.log(data.list);
            for (let listItem of list) {
                if (listItem.dt_txt.includes("12:00:00")) {
                    console.log(listItem);
                    html += `
                        <li class="list-group-item d-flex align-items-center h6"><sapn>${listItem.dt_txt.split(' ')[0]}</sapn><img class="mx-4" src="http://openweathermap.org/img/w/${listItem.weather[0].icon}.png"><span class="">${listItem.main.temp_max} F /  ${listItem.main.temp_min} F</span><span class="ml-auto">${listItem.weather[0].description}</span>
                        </li>
                                `;
                }
            }
            $('#forecast').html(html);
            $('#cityName').html(`of  ${data.city.name}`);
        }
        function onSuccessForecast(data, status, jqXhr) {
            console.log("Request status: " + status);
            console.log(data);
            renderForecast(data);
        }

        $('#btn').click(function () {
        })

        }
        updateWeather('San Antonio, US');
        // var city = $('#dropdownCity').val();
        // $('#dropdownCity').on('change', updateWeather(city));

        $('#citySearch').click(function (e) {
            e.preventDefault();
            var citySearch = $('#cityInput').val();
            updateWeather(citySearch);
        })
    });
})();
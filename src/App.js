import React, { useState } from "react";

import './App.css';
import axios from "axios";



const [city, setCity] = useState("");
const [weather, setWeather] = useState({});

function App() {
  
function displayWeather (response){
  setWeather({ temperature:response.data.main.temp,
    wind: response.data.wind.speed,
    humidity:response.data.main.humidity,
    icon:`http://openweathermap.org/img/wn${response.data.weather[0].icon}@2x.png`,
    precipitation:response.data.minutely.precipitation,
  })
}
function formatDate(date){

  var date = now.getDate();
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day=days[now.getDay()];
    let hours = now.getHours();
    if(hours<10){ hours`${hours}`;}
    let minutes=now.getMinutes();
    if (minutes<10){minutes`${minutes}`;}
    let time=`${hours}:${minutes}`;
    return `${date.day()} ${date.time()}`;
  }

function handleSubmit (event){
  event.preventDefault();
  let apiKey = "4a7c01390293f156a41b247c2f0f0679";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(displayWeather);
}
function updateCity(event){
  setCity(event.target.value);
}

 
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <form className="search-form" id="search-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  autofocus="on"
                  id="city-input"
                  className="form-control shadow-sm" onChange={updateCity}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn btn-primary shadow-sm"
                />
              </div>
            </div>
          </form>
          <h1 id="city">{city}</h1>
          <ul>
            <li id="date"> {formatDate(response.data.dt*1000)}</li>
            <li>{weather.description}</li>
          </ul>

        <div class="row">
          <div class="col-6">
            <div class="clearfix">
              <img src={weather.imgUrl} className="weather-icon" />
              <div class="float-left">
                <span className="temperature" id="temperature">
                  {Math.round(weather.temperature)} 
                </span>
                <span class="units">
                  <a href="#" id="celsius-link">
                    °C
                  </a>{" "}
                  |
                  <a href="#" id="fahrenheit-link">
                    °F
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation:{weather.precipitation}% </li>
              <li>Humidity:{weatherData.humidity}</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-2'>
            <div className='forecast-day'>Mon</div>
            <div className='forecast-icon'> </div>
            <div className='forecast-temperature'> 21 </div>
          </div>
          <div className='col-sm-2'>
            <div className='forecast-day'>Mon</div>
            <div className='forecast-icon'> </div>
            <div className='forecast-temperature'> 21 </div>
          </div>
          <div className='col-sm-2'>
            <div className='forecast-day'>Mon</div>
            <div className='forecast-icon'> </div>
            <div className='forecast-temperature'> 21 </div>
          </div>
          <div className='col-sm-2'>
            <div className='forecast-day'>Mon</div>
            <div className='forecast-icon'> </div>
            <div className='forecast-temperature'> 21 </div>
          </div>
        </div>
      </div>
    </div>
        </div>
  );
  }
      

export default App;

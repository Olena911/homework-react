
import './App.css';

function App() {
  var weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    precipitation: 0,
    humidity: 80,
    wind: 10
  };
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <form className="search-form" id="search-form">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  autofocus="on"
                  id="city-input"
                  className="form-control shadow-sm"
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
          <h1 id="city">{weatherData.city}</h1>
          <ul>
            <li id="date"> {weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>

        <div class="row">
          <div class="col-6">
            <div class="clearfix">
              <img src={weatherData.imgUrl} className="weather-icon" />
              <div class="float-left">
                <span className="temperature" id="temperature">
                  {weatherData.temperature}
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
              <li>Precipitation:{weatherData.precipitation}% </li>
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

import React from 'react';
import './Weather/WeatherApp.css';  // Corrected file extension
import drizzle_icon from "./Assets/drizzle.png";
import search_icon from "./Assets/search.png";
import cloud_icon from "./Assets/cloud.png";
import clear_icon from "./Assets/clear.png";
import rain_icon from "./Assets/rain.png";
import snow_icon from "./Assets/snow.png";
import wind_icon from "./Assets/wind.png";
import humidity_icon from "./Assets/humidity.png";

const WeatherApp = () => {
    return (
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityinput" placeholder="search" />
                <div className="search-icon">
                    <img src={search_icon} alt="search icon" />
                </div>
            </div>
            <div className="weather-image">
                <img src = {cloud_icon} alt ="" />
            </div>
            <div className="weather-temp">24 degree celcius</div>
            <div className="weather-loc">London</div>
            <div className="data-container"></div>
            <div className="element">
                <img src="" alt="" className="icon"/>
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src="" alt="" className="icon"/>
                <div className="data">
                    <div className="humidity-percent">18 km/hr</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
            
        </div>
    );
}

export default WeatherApp;

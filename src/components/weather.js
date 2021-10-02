import React from 'react';
import './weather.css';
import moment from 'moment';


const showWeather = ({showWeatherData}) => (
    

    <header style={{fontSize:"26px"}} >

        <h1 className="header" >{showWeatherData.name}</h1>

        <p><strong>Day: {moment().format('dddd')}</strong></p>

        <p><strong>Date: {moment().format('LL')}</strong></p>

        <p><strong>Time: {new Date().toLocaleTimeString()}</strong></p>

        <p><strong>-----------------------------------------</strong></p>

        <p><strong>Temprature: {showWeatherData.main.temp} &deg;C </strong></p>
        
        <p><strong>Description: {showWeatherData.weather[0].main}</strong></p>

        <p><strong>Humidity: {showWeatherData.main.humidity} %</strong></p>

        <p><strong>Air Pressure: {showWeatherData.main.pressure} hPa </strong></p>

        <p><strong>Sunrise: {new Date(showWeatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</strong></p>

        <p><strong>Sunset: {new Date(showWeatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</strong></p>

        </header>
)

export default showWeather;
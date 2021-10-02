import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';

export default function App() {
const API_URL = 'https://api.openweathermap.org/data/2.5'
const API_KEY = 'fb12acc42540b684c711506c738d22d7'
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(usersPosition) 
      {
        setLat(usersPosition.coords.latitude);
        setLong(usersPosition.coords.longitude);
      });

      await fetch(`${API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`)
      .then(res => res.json())  
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();  
  }, [lat,long])
  
  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (<Weather showWeatherData={data}/>) : 
      (
        <div>Refresh the window please</div>
      )}
      
    </div>
  );
}



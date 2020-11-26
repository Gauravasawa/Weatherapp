import React, { useState } from 'react'
import './Weatherapp.css'

const api={

    key: "9202786466995361e04f443674abb648",
    base:"https://api.openweathermap.org/data/2.5/"
};



    let today = new Date().toLocaleDateString();
     today = new Date().toDateString();


function Weatherapp() {

const [query, setQuery] = useState('');
const [weather, setWeather] = useState({});

const search = evt => {
    if (evt.key === "Enter") {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                console.log(result);
            });
    }
}



return ( 
    <div className = {(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app day' : 'app') : 'app'}>
    <main>
    <div className = "search-box" >
    <input type = "text"
    className = "search-bar"
    placeholder = "Search..."
    onChange = {e => setQuery(e.target.value)}
    value = {query}
    onKeyPress = {search}
    /> 
    </div> 
    {(typeof weather.main != "undefined") ? ( 
            <div>
            <div className = "location-box">
            <div className = "location">{weather.name},{weather.sys.country}</div> 
            <div className = "date"> {`${today}`}</div> 
            </div> 
            <div className = "weather-box" >
            <div className = "temp"> 
            {Math.round(weather.main.temp)}°c 
            </div> 
            <div className = "weather" > 
            {weather.weather[0].main}</div> 
            </div> 
            </div>
        ) : ('')} 

  </main>
  </div>
);
}

export default Weatherapp;

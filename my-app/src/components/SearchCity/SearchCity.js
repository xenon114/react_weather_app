import React, { useRef } from 'react';
import { useState } from 'react/cjs/react.development';
import Button from '../UI/Button';
import './SearchCity.css';

const SearchCity = () =>
{
     const [cityName,setCityName] = useState('');
     const [showInfo,setShowInfo] = useState(false);
     const [weatherData,setWeatherData] = useState([]);
     const cityNameChangeHandler = (event) => {
        setCityName(event.target.value);
      };
    async function searchWeatherHandler()
    {
        console.log(cityName);

        const response =  await fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=2b12b7d19b16f61b721fcdf652a2685c');
        const data = await response.json();
        setShowInfo(true);
       const transData = {
           
              
              main: data.weather['0']['main'],
              description: data.weather['0']['description'],
              wind: data.wind.speed,
              deg: data.wind.deg
         };
          setWeatherData(transData);
    }
    return (
        <React.Fragment>
            <div class="card" style={{"margin":"3rem"}}>
               <div class="card-body">
                  <div className="row">
                     <div className="col-md-12">
                   <span style={{"marginRight":"10px"}}>Enter City Name: 
                   <input type="text" id="city_name" onChange={cityNameChangeHandler}></input></span>
                   <Button onPress={searchWeatherHandler}>Search</Button>
                     </div>
                  </div>
                </div>
            </div>
            {showInfo && 
            <div class="card" style={{"margin":"3rem"}}>
            <div class="card-body">
                <div className="row">
                    <div className="col-md-12">
                      
                      <p><span>Overall Condition = </span><span>{weatherData.main}</span></p>
                      <p><span>Description = </span><span>{weatherData.description}</span></p>
                      <p><span>wind Speed = </span><span>{weatherData.wind}</span></p>
                      <p><span>Wind Degree = </span><span>{weatherData.deg}</span></p>
                     
                    </div>
                </div>
            </div>
            </div> }
          
        </React.Fragment>
       
    );
}

export default SearchCity;
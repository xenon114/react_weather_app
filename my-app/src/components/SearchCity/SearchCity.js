import React from 'react';
import Button from '../UI/Button';
import './SearchCity.css';

const SearchCity = () =>
{

    const searchWeatherHandler = () =>
    {
        
    }
    return (
        <div class="card" style={{"margin":"5rem"}}>
        <div class="card-body">
           
           <div className="row search_city_header">
               <div className="col-md-12">
                   Search City To get its Data
               </div>
           </div>

           <div className="row">
               <div className="col-md-12">
                   <span style={{"marginRight":"10px"}}>Enter City Name: <input type="text" ></input></span>
                   <Button onPress={searchWeatherHandler}>Search</Button>
               </div>
           </div>

        </div>

        </div>
    );
}

export default SearchCity;
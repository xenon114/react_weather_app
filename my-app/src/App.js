import React from 'react';
import './App.css';
import './theme.css';

import Header from './components/Layout/Header';
import SideBar from './components/Layout/SideBar';
import Dashboard from './components/Dashboard/Dashboard';
import SearchCity from './components/SearchCity/SearchCity';
import { useState } from 'react/cjs/react.development';

function App() {

  const [showDashboard,setDasboardView] = useState(true);
  const [showSearchCity,setSearchCity] = useState(false);
  const [showCityList,setCityList] = useState(false);

const viewaDashboardHandler = () =>
{
  setDasboardView(true);
  setSearchCity(false);
}
const viewaSearchCitydHandler = () =>
{
  setSearchCity(true);
  setDasboardView(false)
}
const viewaCitylistHandler = () =>
{
  setCityList(true);
}

  return (
    <React.Fragment>
      <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous"></link>
      </head>
    
     <div className="wrapper">
       <div className="container-fluid">
         <Header></Header>
         <div className="row">
           <SideBar 
           onPressDash={viewaDashboardHandler} 
           onPressSearch={viewaSearchCitydHandler} 
           onPressList={viewaCitylistHandler}>
           </SideBar>
         
              <div className="col-md-10">
                {showDashboard && <Dashboard></Dashboard>} 
                {showSearchCity && <SearchCity></SearchCity>} 
              </div>
         </div>
       </div>
     </div>
    </React.Fragment>
  );
}

export default App;

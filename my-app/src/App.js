import React from 'react';
import logo from './logo.svg';
import './App.css';
import './theme.css';

import Header from './components/Layout/Header';

function App() {
  return (
    <React.Fragment>
      <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous"></link>
      </head>
    
     <div className="wrapper">
       <div className="container-fluid">
         <Header></Header>
       </div>
     </div>
    </React.Fragment>
  );
}

export default App;

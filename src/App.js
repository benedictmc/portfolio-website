import React, { Component } from 'react';
import NavBar from './components/navbar/Navbar'
import Home from './components/home/Home'
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';


const TRACKING_ID = "UA-206793123-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (

    <div className="App">

      {/* <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;400&display=swap" rel="stylesheet"> */} 

      <style>@import url('https://fonts.googleapis.com/css2?family=Asap:wght@100;400&display=swap');</style>
      
      <NavBar/>
      <div className="whole-page">
        <Home/>
      </div>
    </div>
  );
}

export default App;

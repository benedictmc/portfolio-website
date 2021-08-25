import React, { Component } from 'react';
import NavBar from './components/navbar/Navbar'
import Home from './components/home/Home'
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <div className="App">

      <style>@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400&display=swap');</style>
      <NavBar/>
      <div className="whole-page">
        <Home/>
      </div>
    </div>
  );
}

export default App;

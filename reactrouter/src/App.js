import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from './pages/Home.js';
import Blogs from './pages/Blogs.js';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      {/* HEADER */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React-Router</h1>
      </header>

      {/* NAVBAR */}
      <Navbar activeButton  setActiveButton/>

      {/* CONTENT  ROUTES */}
      <div id='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Blogs />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>

     
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home.js';
import Blogs from './pages/Blogs.js';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
      </Routes>

      <Navbar />
      
      </header>
    </div>
  );
}

export default App;

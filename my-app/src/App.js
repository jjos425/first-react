import './App.css';
import Home from './home';
import About from './about';
import Experience from './experience';
import Contact from './contact';
import {Routes, Route} from 'react-router-dom';
import Navbar from './navbar';
import React from 'react';
// Using routing method to create multiple pages
function App() {
  return (
    <div className="App">
        <h1>Jerome Jose</h1>
        <nav className ="App-nav">
          <Navbar />
        </nav>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;

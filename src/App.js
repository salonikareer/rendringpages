import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Page1 from './page1';
import Page2 from './page2';
import './App.css';

const App = () => (
  <Router>
    <div className='container'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
    </Routes>
    </div>
  </Router>
);

export default App;

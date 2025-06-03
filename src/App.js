import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import Main from './components/chapters/Main';
import Events from './components/chapters/Events';
import Portfolio from './components/chapters/Portfolio';
import Services from './components/chapters/Services'
import Contacts from './components/chapters/Contacts';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

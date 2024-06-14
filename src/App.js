// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import TheoryPage from './pages/TheoryPage';
import DesignPage from './pages/DesignPage';
import InternetArtPage from './pages/InternetArtPage';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/theory" element={<TheoryPage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/internet-art" element={<InternetArtPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

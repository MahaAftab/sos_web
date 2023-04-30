import React from 'react';
import './App.css';
import Card from './components/card';
import ConvertedVideoPage from './components/ConvertedVideoPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Card />} />
      <Route path="/converted-page" element={<ConvertedVideoPage />} />
    </Routes>
  </Router>
  </>
  );
}

export default App;

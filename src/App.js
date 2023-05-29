import React from 'react';
import './App.css';
import Card from './components/card';
import ConvertedVideoPage from './components/ConvertedVideoPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  window['apiLocation'] = 'http://localhost:4200'; //if the server is not on the same pc then use new generated ngrok key here

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

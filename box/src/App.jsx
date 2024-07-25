import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import PlaceObjectPage from './PlaceObjectPage';
import PickObjectPage from './PickObjectPage';
import ObjectDetailsPage from './ObjectDetailsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/place-object" element={<PlaceObjectPage />} />
        <Route path="/pick-object" element={<PickObjectPage />} />
        <Route path="/object-details/:id" element={<ObjectDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

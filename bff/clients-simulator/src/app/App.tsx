import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/home/HomePage';
import MobileSimulatorPage from '../pages/mobileSimulator/MobileSimulatorPage';
import WebSimulatorPage from '../pages/webSimulator/WebSimulatorPage';
import Header from '../components/Header'

const App: React.FC = () => (
  <React.Fragment>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="simulator/web" element={<WebSimulatorPage />} />
      <Route path="simulator/mobile" element={<MobileSimulatorPage />} />
    </Routes>
  </React.Fragment>
);

export default App;

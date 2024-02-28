import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome';
import Layout from './pages/Layout';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="about" element={<About />} />
            <Route path="menu" element={<Menu />} />
            <Route path="reservations" element={<Reservations />} />
          </Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

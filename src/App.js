import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome';
import Layout from './pages/Layout';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import Testimonials from './pages/Testimonials';


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="about" element={<About />} />
            <Route path="menu" element={<Menu />} />
            <Route path="reservations" element={<Reservations />} />
            <Route path="testimonials" element={<Testimonials />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;

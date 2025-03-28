import React from "react";
import IoTData from "./components/IoTData";
import AddImagingData from "./components/AddImagingData";
import ImagingData from "./components/ImagingData";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/NavBar.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Header with Navbar */}
        <Navbar />

        {/* Main content */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/imaging-data/add/" element={<AddImagingData />} />
          <Route path="/imaging-data/list/" element={<ImagingData />} />
          <Route path="/iot-data/list/" element={<IoTData />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/register/" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

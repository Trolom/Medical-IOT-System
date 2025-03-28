import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="container">
        <h1 className="title">Medical IoT System</h1>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/imaging-data/add/">Add Newest Data</Link></li>
            <li><Link to="/imaging-data/list/">Imaging Data Table</Link></li>
            <li><Link to="/iot-data/list/">IoT Data</Link></li>
            <li><Link to="/contact/">Contact</Link></li>
            <li><Link to="/login/">Login</Link></li>
            <li><Link to="/register/">Register</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

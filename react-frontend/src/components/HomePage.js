import React from "react"; 
import myImage from './image.png'

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="image-section">
      <img src={myImage} alt="Hospital" className="home-image"/>
      </div>
      <div className="text-section">
        <h1>Welcome to the <span>CR OnDate IoT System</span></h1>
        <p>
          This app helps you keep track of your tumor data. You can monitor the
          tumor's growth, biopsy results, and other details about the moment of identification.
          Additionally, it integrates IoT data, allowing you to check sensor
          readings that are collected in real time to help you be in check with your status.
        </p>
        <p>
          You can also upload the latest tumor data to keep your records updated
          and monitor your health closely!
        </p>
      </div>
    </div>
  );
};

export default HomePage;

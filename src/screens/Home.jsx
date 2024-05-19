// src/screens/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h3 className="home-title">Welcome to my assignment</h3>
      <p className="home-subtitle">Made by - Harsh Sharma, IIT Kharagpur</p>
      <ul className="home-list">
        <li className="home-list-item">
          <Link to="/products" className="home-link">Product list page</Link>
        </li>
        <li className="home-list-item">
          <Link to="/dashboard" className="home-link">Product dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;

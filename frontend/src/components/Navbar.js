import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="nav-container">
        <div className="nav-head">
          <h1>AYURMITHRA</h1><span>Eco Wellness Resort</span>
        </div>
        <div className="nav-items">
          <ul className="nav-list">
            <li className="nav-list-item">ABOUT US</li>
            <li className="nav-list-item">FACILITIES</li>
            <li className="nav-list-item">BOOKING</li>
            <li className="nav-list-item">OCNTACT US</li>
          </ul>
        </div>
    </div>
  );
}

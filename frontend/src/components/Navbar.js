import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="nav-container">
        <div className="nav-head">
          <h1>AYURMITHRA</h1>
          <span>Eco Wellness Resort</span>
        </div>
        <div className="nav-items">
          <ul className="nav-list">
            <li className="nav-list-item"><b>ABOUT US</b></li>
            <li className="nav-list-item"><b>FACILITIES</b></li>
            <li className="nav-list-item"><b>BOOKING</b></li>
            <li className="nav-list-item"><b>CONTACT US</b></li>
          </ul>
        </div>
    </div>
  );
}

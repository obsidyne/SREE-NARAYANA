import React from 'react';
import './Navbar.css';

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
   };
  return (
    <div className="nav-container">
        <div className="nav-head">
          <h1>AYURMITHRA</h1>
          <span>Eco Wellness Resort</span>
        </div>
        <div className="nav-items">
          <ul className="nav-list">
            <li
              className="nav-list-item"
              onClick={() => scrollToSection('about-us')}
            >
              <b>ABOUT US</b>
            </li>
            <li
              className="nav-list-item"
              onClick={() => scrollToSection('facilities')}
            >
              <b>FACILITIES</b>
            </li>
            <li
              className="nav-list-item"
              onClick={() => scrollToSection('booking')}
            >
              <b>BOOKING</b>
            </li>
            <li
              className="nav-list-item"
              onClick={() => scrollToSection('contact-us')}
            >
              <b>CONTACT US</b>
            </li>
          </ul>
        </div>
    </div>
  );
}
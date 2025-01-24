import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <div className="nav-container">
      {/* Header Section - Visible only on desktop */}
      <div className="nav-head">
        <h1>AYURMITHRA</h1>
        <span>Eco Wellness Resort</span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="nav-items">
        <ul className="nav-list">
          <li onClick={() => scrollToSection('about-us')}>ABOUT US</li>
          <li onClick={() => scrollToSection('facilities')}>FACILITIES</li>
          <li onClick={() => scrollToSection('booking')}>BOOKING</li>
          <li onClick={() => scrollToSection('contact-us')}>CONTACT US</li>
        </ul>
      </div>

      {/* Hamburger Menu for Mobile View */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="nav-list-mobile">
          <li onClick={() => scrollToSection('about-us')}>ABOUT US</li>
          <li onClick={() => scrollToSection('facilities')}>FACILITIES</li>
          <li onClick={() => scrollToSection('booking')}>BOOKING</li>
          <li onClick={() => scrollToSection('contact-us')}>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
}

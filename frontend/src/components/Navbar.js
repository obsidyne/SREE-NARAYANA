import React , { useState }from 'react'
import './Navbar.css'

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
    setIsMobileMenuOpen(false); // Close mobile menu on selection
  };

  return (
    <div className="nav-container">
      {/* Header Section */}
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

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="nav-list-mobile">
            <li onClick={() => scrollToSection('about-us')}>ABOUT US</li>
            <li onClick={() => scrollToSection('facilities')}>FACILITIES</li>
            <li onClick={() => scrollToSection('booking')}>BOOKING</li>
            <li onClick={() => scrollToSection('contact-us')}>CONTACT US</li>
          </ul>
        </div>
      )}
    </div>
  )
}

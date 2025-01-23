import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <div className="nav-container">
      {/* Header Section (Shown only on larger screens) */}
      <div className="nav-head">
        <h1>AYURMITHRA</h1>
        <span>Eco Wellness Resort</span>
      </div>

      {/* Hamburger Icon (Always visible on mobile) */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </div>

      {/* Dropdown Menu (Shown when Hamburger is clicked) */}
      <div className={`nav-items ${menuOpen ? "show" : ""}`}>
        <ul className="nav-list">
          <li onClick={() => scrollToSection("about-us")}>ABOUT US</li>
          <li onClick={() => scrollToSection("facilities")}>FACILITIES</li>
          <li onClick={() => scrollToSection("booking")}>BOOKING</li>
          <li onClick={() => scrollToSection("contact-us")}>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
}

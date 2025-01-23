import React from 'react';
// import './Ayurmithra.css'
import './Ayurmithra.css';

export default function Ayurmithra() {
  return (
    <div className="container" id="about-us">
        <div className="titlecontainer">
        <h1 className="title">AYURMITHRA</h1>
        <hr className="divider" />
        </div>
      
      <p className="description">
        The Sree Narayana Health Care Society was established to make significant contributions to medical care and tourism. 
        Our latest venture, the Ayur Mithra Eco Wellness Resort, offers an eco-friendly wellness experience, combining a natural 
        environment with modern comforts. By blending tradition with modernization, we are advancing health care and tourism, 
        making meaningful innovations in medical care, education, and wellness.
      </p>
      <div className="btn">
         <button className="book-now">BOOK NOW</button>
      </div>
     
    </div>
  );
}

import React from 'react'
import './Main.css'
import arrow from '../assets/arrow.jpeg'
import Navbar from './Navbar';

export default function Main() {
  return (
    <div className='container1'>
        <div className="top">
          <Navbar></Navbar>
        </div>
        <div className="center1">
            <div className="title1">AYURVEDIC REJUVENATION</div>
            <div className="box1">
                SREE NARAYANA ECO WELLNESS RESORT</div>
        </div>
        <div className="bottom">
           <div className="btn1"> <a href="#">EXPLORE </a><img className='arrow' src={arrow} alt="" /></div>
        </div>
    </div>
  )
}

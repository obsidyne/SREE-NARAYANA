import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <footer className='containerf'>
       
        <div className="left">
            <div className="box">
                <div className="rectangle"></div>
                CONTACT US
            </div>
            <div className="content">
                Sree Narayana Health Care Society
                R Sankar Nagar, Karimpinpuzha PO
                Pangode, Puthur, Kollam -691513, Kerala
            </div>
        </div>
{/*  */}
        <div className="middle">
                <div className="phone">
                    
                <div className="box">
                    <div className="rectangle"></div>
                   PHONE
                </div>
                <div className="content">
                0474 2415020, 2419867, 2417063 (O)
                </div>
                </div>
                {/*  */}
                <div className="mail">
                    <div className="box">
                    <div className="rectangle"></div>
                    MAIL
                </div>
                <div className="content">mithrawell16@gmail.com</div>

                </div>
        </div>

        <div className="right">
            <div className="mobile">
            <div className="box">
                <div className="rectangle"></div>
                MOBILE
            </div>
            <div className="content">
            +91 9447034485, +91 8848583869
            </div>
            </div>
        </div>
      
    </footer>
  )
}

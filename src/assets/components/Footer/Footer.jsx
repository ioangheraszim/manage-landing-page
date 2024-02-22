import React from 'react'
import "./Footer.scss"
import instagram from "../../images/icon-instagram.svg"
import facebook from "../../images/icon-facebook.svg"
import twitter from "../../images/icon-twitter.svg"
import pinterest from "../../images/icon-pinterest.svg"
import youtube from "../../images/icon-youtube.svg"
import logo from "../../images/logo.svg"
function Footer() {
  return (
    <footer className='footer-wrapper'>
      <div className='container'>
        <div className=''>
          <div className='logo'>
            <img src={logo} alt="" />
          </div>
          <div className='socal-icons'>
            <img src={facebook} alt={facebook} />
            <img src={youtube} alt="" />
            <img src={twitter} alt="" />
            <img src={pinterest} alt="" />
            <img src={instagram}  alt="" />
          </div>
        </div>
        <div>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">About Us</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><a href="">Careers</a></li>
            <li><a href="">Community</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <div>
            <input type="text" />
            <button>Go</button>
          </div>
          <p>Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
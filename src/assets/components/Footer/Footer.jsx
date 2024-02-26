import React from "react";
import "./Footer.scss";
import instagram from "../../images/icon-instagram.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import youtube from "../../images/icon-youtube.svg";
import logo from "../../images/logo.svg";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="logo-more">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="socal-icons">
            <a href=""><img src={facebook} alt={facebook} /></a>
            <a href=""><img src={youtube} alt={youtube} /></a>
            <a href=""><img src={twitter} alt={twitter} /></a>
            <a href=""><img src={pinterest} alt={pinterest} /></a>
            <a href=""><img src={instagram} alt={instagram} /></a>
          </div>
        </div>
        <div className="lists">
          <ul className="">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="news-form">
          <input className="input-letter" type="text" placeholder="Updates in your inbox..." />
          <button className="go-btn">Go</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

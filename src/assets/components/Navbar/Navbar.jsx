import React from 'react'
import logoIcon from "../../images/logo.svg"
import closeIcon from "../../images/icon-close.svg"
import iconHamburger from "../../images/icon-hamburger.svg"
import "./Navbar.scss"
function Navbar() {
  return (
    <nav className='navbar'>
      <img src={logoIcon} alt="" />
      <ul className='navbar-items active'>
        <li><a href="">Pricing</a></li>
        <li><a href="">Product</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Careers</a></li>
        <li><a href="">Community</a></li>
      </ul>
      <button className='btn-start'>Get Started</button>
      <button className='toggle-menu'>
        <img src={iconHamburger} alt={iconHamburger} />
      </button>
    </nav>
  )
}

export default Navbar
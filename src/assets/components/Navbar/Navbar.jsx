import React, { useState } from 'react'
import logoIcon from "../../images/logo.svg"
import closeIcon from "../../images/icon-close.svg"
import iconHamburger from "../../images/icon-hamburger.svg"
import "./Navbar.scss"
function Navbar() {

  const [toggle, setToggle] = useState(false)

  function toggleNavbar() {
    setToggle(!toggle)
  }
  return (
    <nav className='navbar'>
      <div>
        <a href="#"><img src={logoIcon} alt={logoIcon} /></a>
      </div>
      <ul className={`navbar-items ${toggle ? "active" : ""}`}>
        <li><a href="">Pricing</a></li>
        <li><a href="">Product</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Careers</a></li>
        <li><a href="">Community</a></li>
      </ul>
      <button className='btn-start'>Get Started</button>
      <button onClick={toggleNavbar} className='toggle-menu'>
        <img src={toggle ? closeIcon : iconHamburger } alt={iconHamburger} />
      </button>
    </nav>
  )
}

export default Navbar
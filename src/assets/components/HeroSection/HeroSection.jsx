import React from 'react'
import heroImg from '../../images/illustration-intro.svg'
import './HeroSection.scss'

function HeroSection() {
  return (
    <section className='container wrapper'>
      <div className='illustration'>
        <img src={heroImg} alt="" />
      </div>
      <div className='hero-text'>
        <h1>Bring everyone together to build better products.</h1>
        <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
        <button>Get Started</button>
      </div>
    </section>
  )
}

export default HeroSection
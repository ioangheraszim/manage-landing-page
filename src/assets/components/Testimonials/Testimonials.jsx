import React, { useState } from "react";
import "./Testimonials.scss";
import testimonialdata from "../../data/testimonialdata";
import ali from "../../images/avatar-ali.png";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialdata.length);
  };

  return (
    <section className="slider-wrapper">
      <h2>What the've said</h2>
      <div className="slider-container">
        {testimonialdata.map((slide, index) => (
          <div
            key={index}
            className={`slider ${index === currentIndex ? "active" : ""}`}
          >
            <div className="the-image">
              <img src={slide.image} alt={slide.name} />
            </div>
            <p className="name">{slide.name}</p>
            <p className="comment">"{slide.comment}"</p>
          </div>
        ))}
      </div>
      <button className="btn-start">Get Started</button>
    </section>
  );
}

export default Testimonials;

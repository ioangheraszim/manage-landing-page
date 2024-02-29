import React, { useEffect, useState } from "react";
import "./Testimonials.scss";
import testimonialdata from "../../data/testimonialdata";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(testimonialdata.length - 1);

  const showSlide = (index) => {
    setCurrentIndex(index)
  }

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialdata.length);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleNextSlide();
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex]);

  return (
    
    <section className="slider-wrapper">
      <h2>What the've said</h2>
        <div className="slider-container">
          {testimonialdata.map((testimonial, index) => (
            <div 
              key={index}
              className={`slider ${index === currentIndex ? "active" : ""}`}
              style={{transform:`translateX(-${currentIndex * 100}%)`}}
            >
              <div className="the-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <p className="name">{testimonial.name}</p>
              <p className="comment">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      <button className="btn-start">Get Started</button>
    </section>
  );
}

export default Testimonials;

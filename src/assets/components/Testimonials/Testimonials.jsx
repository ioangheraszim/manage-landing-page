import React from "react";
import "./Testimonials.scss";
import ali from "../../images/avatar-ali.png"

function Testimonials() {
  return (
    <section className="container">
      <h2>What the've said</h2>
      <div className="slider-container">
      <img src={ali} alt={ali} />
          <p className="name">Ali Bravo</p>
          <p className="comment">
            "We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is much
            more focused.
          </p>
      </div>
      <button className="btn-start">Get Started</button>
    </section>
  );
}

export default Testimonials;

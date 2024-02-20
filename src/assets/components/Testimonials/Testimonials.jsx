import React from "react";
import "./Testimonials.scss";
import ali from "../../images/avatar-ali.png";

function Testimonials() {
  return (
    <section className="slider-wrapper">
      <h2>What the've said</h2>
      <div className="slider-card">
        <div className="slider">
          <div className="the-image">
            <img src={ali} alt={ali} />
          </div>
          <p className="name">Ali Bravo</p>
          <p className="comment">
            "We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is much
            more focused."
          </p>
        </div>
        <div className="slider">
          <div className="the-image">
            <img src={ali} alt={ali} />
          </div>
          <p className="name">Ali Bravo</p>
          <p className="comment">
            "We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is much
            more focused."
          </p>
        </div>
        <div className="slider">
          <div className="the-image">
            <img src={ali} alt={ali} />
          </div>
          <p className="name">Ali Bravo</p>
          <p className="comment">
            "We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is much
            more focused."
          </p>
        </div>

      </div>
      <button className="btn-start">Get Started</button>
    </section>
  );
}

export default Testimonials;

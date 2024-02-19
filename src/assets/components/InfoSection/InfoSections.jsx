import React from "react";
import "./InfoSection.scss";
function InfoSections() {
  return (
    <section className="container container-qa">
      <div className="question">
        <h2>What's different about Manage?</h2>
        <p>
          Manage provides all the functionality your tem needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="answers">
        <div className="answer">
          <div className="title">
            <p className="number">01</p>
            <p className="name">Track company-wide progress</p>
          </div>
          <p className="the-answer">
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>
        <div className="answer">
          <div className="title">
            <p className="number">02</p>
            <p className="name">Advanced built-in reports</p>
          </div>
          <p className="the-answer">
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </div>
        <div className="answer">
          <div className="title">
            <p className="number">03</p>
            <p className="name">Everything you need in one place</p>
          </div>
          <p className="the-answer">
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage afters an all-in-one
            team productivity solution.
          </p>
        </div>
      </div>
    </section>
  );
}

export default InfoSections;

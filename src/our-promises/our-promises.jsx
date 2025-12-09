import React from "react";
import { OurPromisesStyle } from "./our-promises-style";

const OurPromisesComponent = () => {
  return (
    <OurPromisesStyle>
      <div className="promises-container">
        <h1 className="promises-title">Our Promises</h1>
        
        <div className="promises-grid">
          <div className="promise-card">
            <div className="promise-icon">💻</div>
            <h3 className="promise-title">Quality Education</h3>
            <p className="promise-description">
              We provide top-notch education with industry-relevant curriculum and experienced instructors.
            </p>
          </div>

          <div className="promise-card">
            <div className="promise-icon">🎯</div>
            <h3 className="promise-title">Placement Support</h3>
            <p className="promise-description">
              Comprehensive placement assistance with interview preparation and career guidance.
            </p>
          </div>

          <div className="promise-card">
            <div className="promise-icon">🚀</div>
            <h3 className="promise-title">Skill Development</h3>
            <p className="promise-description">
              Focus on practical skills and hands-on experience to make you industry-ready.
            </p>
          </div>

          <div className="promise-card">
            <div className="promise-icon">🤝</div>
            <h3 className="promise-title">Continuous Support</h3>
            <p className="promise-description">
              Ongoing support and mentorship throughout your learning journey and beyond.
            </p>
          </div>
        </div>
      </div>
    </OurPromisesStyle>
  );
};

export default OurPromisesComponent;
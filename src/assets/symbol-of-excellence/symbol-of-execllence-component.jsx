import React from "react";
import { SymbolOfExcellenceStyle } from "./symbol-of-excellence-style";

const SymbolOfExcellenceComponent = () => {
  return (
    <SymbolOfExcellenceStyle>
      <div className="symbol-container">
        <h1 className="main-title">
          A Symbol of Excellence in Placement Training
        </h1>

        <p className="subtitle">
          Aptitude Guru Hem was born from the aspiration to create a learning 
          environment that inspires greatness. Our founder, driven by personal 
          experiences and a desire to make a difference, established the company 
          with a mission to empower students with the right skills and mindset for success.
        </p>

        <div className="vision-mission-container">
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              Our vision is to empower individuals from diverse backgrounds to 
              become accomplished professionals. At Aptitude Guru Hem, we believe 
              that knowledge has the power to transcend boundaries.
            </p>
          </div>

          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              Our mission is to revolutionize education by providing comprehensive 
              training in aptitude, coding, and web/mobile development. We foster 
              a culture of inclusivity and personal growth.
            </p>
          </div>
        </div>

        <div className="highlight-banner">
          <h2>Learners Today, Leaders Tomorrow</h2>
          <p>
            With our continuous research and development, we provide you with an 
            excellent Aptitude training.
          </p>
        </div>

        <h1 className="course-title">Our Courses</h1>
      </div>
    </SymbolOfExcellenceStyle>
  );
};

export default SymbolOfExcellenceComponent;
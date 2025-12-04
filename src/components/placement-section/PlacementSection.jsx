import React from "react";
import "./PlacementSection.css";

const PlacementSection = () => {
  return (
    <div className="aptitude-guru-website">
      <header className="hero-section">
        <h1 className="main-title">Aptitude Guru Hem</h1>
        <p className="hero-subtitle">A Symbol of Excellence in Placement Training</p>
      </header>

      <section className="about-section">
        <p className="about-text">
          Aptitude Guru Hem was born from the aspiration to create a learning 
          environment that inspires greatness. Our founder, driven by personal 
          experiences and a desire to make a difference, established the company 
          with a mission to empower students with the right skills and mindset for success.
        </p>
      </section>

      <section className="vision-mission">
        <div className="vm-card">
          <h2>Our Vision</h2>
          <p>
            Our vision is to empower individuals from diverse backgrounds to 
            become accomplished professionals. At Aptitude Guru Hem, we believe 
            that knowledge has the power to transcend boundaries.
          </p>
        </div>
        <div className="vm-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to revolutionize education by providing comprehensive 
            training in aptitude, coding, and web/mobile development. We foster 
            a culture of inclusivity and personal growth.
          </p>
        </div>
      </section>

      <section className="courses-section">
        <h2 className="section-title">Our Courses</h2>
        <div className="courses-grid">
          <div className="course-card">
            <h3>Aptitude Training</h3>
            <p>Quantitative, Logical & Verbal Reasoning</p>
          </div>
          <div className="course-card">
            <h3>Coding Bootcamp</h3>
            <p>Programming Languages & Problem Solving</p>
          </div>
          <div className="course-card">
            <h3>Web Development</h3>
            <p>Frontend & Backend Technologies</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Learners Today, Leaders Tomorrow</h2>
        <p>With our continuous research and development, we provide you with excellent training.</p>
        <button className="cta-button">Start Learning Today</button>
      </section>
    </div>
  );
};

export default PlacementSection;
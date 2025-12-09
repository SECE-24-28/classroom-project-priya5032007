import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-subtitle">JOIN OUR CLUB</p>
            <h1 className="hero-title">
              Yoga For Your<br />
              Healthy Life
            </h1>
            <p className="hero-description">
              Join our club and discover the true benefits of yoga. Enhance flexibility,
              reduce stress, and embrace a healthier, balanced lifestyle with guided
              sessions made for everyone.
            </p>
            <button className="cta-button">Start Your Journey</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="yoga-circle">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Yoga pose" 
              className="yoga-image"
            />
          </div>
        </div>
      </div>
      <div className="floating-elements">
        <div className="float-1">✨</div>
        <div className="float-2">🌸</div>
        <div className="float-3">💫</div>
      </div>
    </section>
  );
};

export default Hero;
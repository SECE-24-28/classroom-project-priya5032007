import React from "react";
import { PositionStyle } from "./position-style";

const PositionComponent = () => {
  return (
    <PositionStyle>
      <div className="position-container">
        <h1 className="position-title">Get In Touch</h1>
        <p className="position-subtitle">
          Ready to start your learning journey? Contact us today!
        </p>
        
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div className="contact-text">info@aptitudeguruhem.com</div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📱</div>
            <div className="contact-text">+91 9876543210</div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-text">Coimbatore, Tamil Nadu</div>
          </div>
        </div>
      </div>
    </PositionStyle>
  );
};

export default PositionComponent;
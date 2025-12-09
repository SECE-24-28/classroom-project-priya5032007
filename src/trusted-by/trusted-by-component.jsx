import React from "react";
import { TrustedByStyle } from "./trusted-by-style";

const TrustedbyComponent = () => {
  return (
    <TrustedByStyle>
      <div className="trusted-container">
        <h1 className="trusted-title">Impact at a Glance</h1>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🏫</div>
            <div className="stat-number">100+</div>
            <div className="stat-label">Colleges</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">👨‍🎓</div>
            <div className="stat-number">1,00,000</div>
            <div className="stat-label">Students</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-number">1000+</div>
            <div className="stat-label">Study Materials</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">👨‍🏫</div>
            <div className="stat-number">150</div>
            <div className="stat-label">Professional Trainers</div>
          </div>
        </div>
      </div>
    </TrustedByStyle>
  );
};

export default TrustedbyComponent;
import React from "react";
import { LeadersTomorrowStyle } from "./leaders-tomorrow-style";

const LeadersTomorrowComponent = () => {
  return (
    <LeadersTomorrowStyle>
      <div className="leaders-container">
        <h1 className="leaders-title">Learners Today, Leaders Tomorrow</h1>
        <p className="leaders-subtitle">
          With our continuous research and development, we provide you with excellent training.
        </p>
        <button className="cta-button">Start Learning Today</button>
      </div>
    </LeadersTomorrowStyle>
  );
};

export default LeadersTomorrowComponent;
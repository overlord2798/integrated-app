import React from 'react';
import './TextInputWithLabel.css'; // Import the CSS file for the component

const TextInputWithLabel = ({ leftLabel, topLabel }) => {
  return (
    <div className="input-container">
      <label className="left-label">{leftLabel}</label>
      <div className="top-label-container">
        <label className="top-label">{topLabel}</label>
        <input type="text" className="text-input" />
      </div>
    </div>
  );
};

export default TextInputWithLabel;
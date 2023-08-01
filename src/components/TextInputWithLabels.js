import React from 'react';
import './TextInputWithLabels.css'; // Import the CSS file for the component

const TextInputWithLabels = ({ label }) => {
  return (
    <div className="text-input-container">
      <p className="label">{label}</p>
      <input type="text" className="text-input" />
    </div>
  );
};

export default TextInputWithLabels;


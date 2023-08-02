import React from 'react';
import './LeftSection.css';

const LeftSection = () => {
  return (
    <div className="left-section">
      <div className="left-section-inner">
        
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#community">Community</a>
          <a href="#search">Search</a>
          <a href="#courses">Courses</a>
        </div>
        {/* Additional content or components for the left section */}
      </div>
    </div>
  );
};

export default LeftSection;

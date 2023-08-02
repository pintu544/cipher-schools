import React from 'react';
import './ToggleButton.css'; // Import the CSS for styling

const ToggleButton = ({ isDarkMode, onToggle }) => {
  return (
    <button className={`toggle-button ${isDarkMode ? 'dark' : 'light'}`} onClick={onToggle}>
      {isDarkMode ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ToggleButton;

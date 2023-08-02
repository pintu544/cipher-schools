import React, { useState } from 'react';
import ProfileCard from './components/LeftSection/ProfileCard';
import Navbar from './components/LeftSection/Navbar';
import FollowSection from './components/LeftSection/FollowSection';
import Posts from './components/MiddleSection/Posts';
import Announcements from './components/MiddleSection/Announcements';
import JoinedUsers from './components/RightSection/JoinedUsers';
import PopularCommunities from './components/RightSection/PopularCommunities';
import ToggleButton from './components/Toggle/ToggleButton';
import LeftSection from './components/LeftSection/LeftSection';
import { Logo, CommunityPosts, Notifications, UserIcon } from './components/Header/header';
import './App.css'; // Import the main CSS for styling

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showPosts, setShowPosts] = useState(true);

  const handleShowPosts = () => {
    setShowPosts(true);
  };

  const handleShowAnnouncements = () => {
    setShowPosts(false);
  };
  const handleThemeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Header */}
      
      <div className="upper-section">
        {/* Header */}
        <header className="header">
          <div className="header-container">
          <div className="header-left">
          <Logo />
            </div>
            
            <CommunityPosts />
            <div className="header-right">
              <Notifications />
              <UserIcon />
            </div>
          </div>
        </header>
        </div>
        <div className="toggle-buttons">
        <button
          className={`toggle-button ${showPosts ? 'active' : ''}`}
          onClick={handleShowPosts}
          disabled={showPosts}
        >
          Show Posts
        </button>
        <button
          className={`toggle-button ${!showPosts ? 'active' : ''}`}
          onClick={handleShowAnnouncements}
          disabled={!showPosts}
        >
          Show Announcements
        </button>
      </div>
        <div className="top-navbar">
          {/* Your other content in the top navbar */}
          <ToggleButton isDarkMode={isDarkMode} onToggle={handleThemeToggle} />
        </div>
      

      {/* Content Sections */}
      <div className="left-section">
        <ProfileCard />
        {/* <Navbar /> */}
        <LeftSection />
        <FollowSection />
      </div>
  

      <div className="middle-section">
        {showPosts ? <Posts /> : <Announcements />}
      </div>
      

      <div className="right-section">
        <JoinedUsers />
        <PopularCommunities />
      </div>
     
      {/* Add other sections (Middle and Right Sections) here */}
    </div>
    
  );
};

export default App;

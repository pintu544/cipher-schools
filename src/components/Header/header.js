import React from 'react';
import './Header.css';
const Logo = () => {
  return <div className="logo"><img src="../img/download.png" alt="logo" width="50" height="60"/></div>;
};

const CommunityPosts = () => {
  // Your community posts content and logic here
  return <div className="community-posts">Community Posts</div>;
};

const Notifications = () => {
  // Your notifications content and logic here
  return <div className="notifications">Notifications</div>;
};

const UserIcon = () => {
  // Your user icon content and logic here
  return <div className="user-icon">User Icon</div>;
};

export { Logo, CommunityPosts, Notifications, UserIcon };

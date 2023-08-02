import React from 'react';
import './ProfileCard.css'; // Import the CSS for styling

const ProfileCard = () => {
  // Replace these dummy user details with actual user data
  const user = {
    name: 'John Doe',
    username: '@johndoe',
    followers: 2000,
    following: 150,
    avatarUrl: 'https://example.com/avatar.jpg', // Replace with the URL of the user's avatar
  };

  return (
    <div className="profile-card">
      <div className="avatar">
        <img src={user.avatarUrl} alt={user.name} />
      </div>
      <div className="user-details">
        <h2>{user.name}</h2>
        <p>{user.username}</p>
      </div>
      <div className="follower-count">
        <p>Followers: {user.followers}</p>
        <p>Following: {user.following}</p>
      </div>
    </div>
  );
};

export default ProfileCard;

import React from 'react';
import './FollowSection.css'; // Import the CSS for styling

const FollowSection = () => {
  // Replace these dummy data with actual user data
  const followers = [
    { name: 'Follower1', avatarUrl: 'https://example.com/follower1.jpg' },
    { name: 'Follower2', avatarUrl: 'https://example.com/follower2.jpg' },
    { name: 'Follower3', avatarUrl: 'https://example.com/follower3.jpg' },
  ];

  const following = [
    { name: 'Following1', avatarUrl: 'https://example.com/following1.jpg' },
    { name: 'Following2', avatarUrl: 'https://example.com/following2.jpg' },
    { name: 'Following3', avatarUrl: 'https://example.com/following3.jpg' },
  ];

  return (
    <div className="follow-section">
      <div className="followers">
        <h3>Followers</h3>
        <ul>
          {followers.map((follower) => (
            <li key={follower.name}>
              <img src={follower.avatarUrl} alt={follower.name} />
            </li>
          ))}
        </ul>
      </div>
      <div className="following">
        <h3>Following</h3>
        <ul>
          {following.map((following) => (
            <li key={following.name}>
              <img src={following.avatarUrl} alt={following.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FollowSection;

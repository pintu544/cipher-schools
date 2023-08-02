import React, { useState } from 'react';
import './JoinedUsers.css'; // Import the CSS for styling

const JoinedUsers = () => {
  // Replace these dummy users with actual user data
  const [joinedUsers, setJoinedUsers] = useState([
    { id: 1, username: '@user1', avatarUrl: 'https://example.com/user1.jpg' },
    { id: 2, username: '@user2', avatarUrl: 'https://example.com/user2.jpg' },
    { id: 3, username: '@user3', avatarUrl: 'https://example.com/user3.jpg' },
    // Add more joined users as needed
  ]);

  return (
    <div className="joined-users">
      <h3>Joined Users</h3>
      <ul>
        {joinedUsers.map((user) => (
          <li key={user.id}>
            <img src={user.avatarUrl} alt={user.username} />
            <span>{user.username}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JoinedUsers;

import React, { useState } from 'react';
import './PopularCommunities.css'; // Import the CSS for styling

const PopularCommunities = () => {
  // Replace these dummy communities with actual community data
  const [popularCommunities, setPopularCommunities] = useState([
    { id: 1, name: 'Community 1', members: 1000 },
    { id: 2, name: 'Community 2', members: 800 },
    { id: 3, name: 'Community 3', members: 600 },
    // Add more popular communities as needed
  ]);

  return (
    <div className="popular-communities">
      <h3>Popular Communities</h3>
      <ul>
        {popularCommunities.map((community) => (
          <li key={community.id}>
            <span className="community-name">{community.name}</span>
            <span className="members-count">{community.members} Members</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularCommunities;

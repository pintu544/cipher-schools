import React, { useState } from 'react';
import './MiddleSection.css';

const MiddleSection = () => {
  // Replace these dummy posts and announcements with actual data
  const [posts, setPosts] = useState([
    { id: 1, content: 'This is the first post.' },
    { id: 2, content: 'This is the second post.' },
    // Add more posts as needed
  ]);

  const [announcements, setAnnouncements] = useState([
    { id: 1, content: 'This is the first announcement.' },
    { id: 2, content: 'This is the second announcement.' },
    // Add more announcements as needed
  ]);

  return (
    <div className="middle-section">
      <div className="posts">
        <h3>Posts</h3>
        {posts.map((post) => (
          <p key={post.id}>{post.content}</p>
        ))}
      </div>
      <div className="announcements">
        <h3>Announcements</h3>
        {announcements.map((announcement) => (
          <p key={announcement.id}>{announcement.content}</p>
        ))}
      </div>
    </div>
  );
};

export default MiddleSection;

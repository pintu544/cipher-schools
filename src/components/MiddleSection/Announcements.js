import React, { useState } from 'react';
import './Announcements.css'; // Import the CSS for styling

const Announcements = () => {
  // Replace these dummy announcements with actual announcement data
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      image: 'https://example.com/image1.jpg',
      title: 'Announcement Title 1',
      personName: 'John Doe',
      content: 'This is the first announcement.',
      likes: 8,
      comments: 3,
      shares: 1,
    },
    {
      id: 2,
      image: 'https://example.com/image2.jpg',
      title: 'Announcement Title 2',
      personName: 'Jane Smith',
      content: 'This is the second announcement.',
      likes: 12,
      comments: 6,
      shares: 2,
    },
    // Add more announcements as needed
  ]);

  return (
    <div className="announcements">
      <h3>Announcements</h3>
      {announcements.map((announcement) => (
        <div key={announcement.id} className="announcement">
          <img src={announcement.image} alt={announcement.title} className="announcement-image" />
          <h4 className="announcement-title">{announcement.title}</h4>
          <p className="announcement-person-name">Posted by {announcement.personName}</p>
          <p className="announcement-content">{announcement.content}</p>
          <div className="announcement-interactions">
            <button>{announcement.likes} Likes</button>
            <button>{announcement.comments} Comments</button>
            <button>{announcement.shares} Shares</button>
            <button>Follow</button>
            <button>Report</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Announcements;

import React, { useState } from 'react';
import './Posts.css'; // Import the CSS for styling

const Posts = () => {
  const pageSize = 5; // Number of posts to show per page
  const [currentPage, setCurrentPage] = useState(1);

  // Replace these dummy posts with actual post data
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: 'https://example.com/image1.jpg',
      title: 'Post Title 1',
      personName: 'John Doe',
      content: 'This is the first post.',
      likes: 10,
      comments: 5,
      shares: 2,
    },
    {
      id: 2,
      image: 'https://example.com/image2.jpg',
      title: 'Post Title 2',
      personName: 'Jane Smith',
      content: 'This is the second post.',
      likes: 15,
      comments: 7,
      shares: 3,
    },
    // Add more posts as needed
  ]);

  const totalPages = Math.ceil(posts.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const visiblePosts = posts.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="posts">
      <h3>Posts</h3>
      {visiblePosts.map((post) => (
        <div key={post.id} className="post">
          <img src={post.image} alt={post.title} className="post-image" />
          <h4 className="post-title">{post.title}</h4>
          <p className="post-person-name">Posted by {post.personName}</p>
          <p className="post-content">{post.content}</p>
          <div className="post-interactions">
            <button>{post.likes} Likes</button>
            <button>{post.comments} Comments</button>
            <button>{post.shares} Shares</button>
            <button>Follow</button>
            <button>Report</button>
          </div>
        </div>
      ))}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Posts;

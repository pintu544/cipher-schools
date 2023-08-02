import React from 'react';
import './Navbar.css'; // Import the CSS for styling

const Navbar = () => {
  // Replace these dummy navigation links with your actual links
  const navLinks = [
    { title: 'Home', link: '/home' },
    { title: 'About', link: '/about' },
    { title: 'Contact', link: '/contact' },
  ];

  return (
    <nav className="navbar">
      <ul>
        {navLinks.map((link) => (
          <li key={link.title}>
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

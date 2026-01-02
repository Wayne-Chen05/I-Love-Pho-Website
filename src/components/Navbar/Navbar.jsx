import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      {/* Top strip */}
      <div className="top-strip">
        <p>100% HALAAL | 20% off on uber !</p>
      </div>
      
      {/* Main navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-container">
            <div className="logo">I ❤️ PHO</div>
          </div>
          <ul className="nav-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#our-story">OUR STORY</a></li>
            <li><a href="#gallery">GALLARY</a></li>
            <li><a href="#menus">MENUS</a></li>
            <li><a href="#testimonials">TESTIMONIALS</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

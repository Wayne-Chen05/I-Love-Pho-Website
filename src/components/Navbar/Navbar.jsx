import React, { useState, useEffect } from "react";
import './Navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Main navigation */}
      <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
        <div className="nav-container">
          <div className="logo-container">
            <div className="logo">I LOVE PHO</div>
          </div>
          <ul className="nav-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#our-story">OUR STORY</a></li>
            <li><a href="#gallery">GALLERY</a></li>
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
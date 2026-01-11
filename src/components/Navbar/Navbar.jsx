import React, { useState, useEffect } from "react";
import './Navbar.css';

const Navbar = () => {
  const [textColor, setTextColor] = useState('white');

  useEffect(() => {
    const handleScroll = () => {
      // Determine text color based on section
      const scrollPosition = window.scrollY;
      const navbarHeight = 80;
      const checkPosition = scrollPosition + navbarHeight;
      
      const heroSection = document.getElementById('home');
      const aboutSection = document.getElementById('our-story');
      const gallerySection = document.getElementById('gallery');
      const menusSection = document.getElementById('menus');
      const testimonialsSection = document.getElementById('testimonials');
      const contactSection = document.getElementById('contact');
      
      let currentColor = 'white'; // Default
      
      // Check sections in order to find which one we're in
      if (contactSection && checkPosition >= contactSection.offsetTop) {
        currentColor = 'black';
      } else if (testimonialsSection && checkPosition >= testimonialsSection.offsetTop) {
        currentColor = 'white';
      } else if (menusSection && checkPosition >= menusSection.offsetTop) {
        currentColor = 'black';
      } else if (gallerySection && checkPosition >= gallerySection.offsetTop) {
        currentColor = 'white';
      } else if (aboutSection && checkPosition >= aboutSection.offsetTop) {
        currentColor = 'black';
      } else if (heroSection && checkPosition >= heroSection.offsetTop) {
        currentColor = 'white';
      }
      
      setTextColor(currentColor);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main navigation */}
      <nav className="navbar" style={{ color: textColor }}>
        <div className="nav-container">
          <div className="logo-container">
            <div className="logo" style={{ color: textColor }}>I LOVE PHO</div>
            <div className="logo-subtitle" style={{ color: textColor }}>Halal Vietnamese Cuisine</div>
          </div>
          <ul className="nav-links">
            <li><a href="#home" style={{ color: textColor }}>HOME</a></li>
            <li><a href="#our-story" style={{ color: textColor }}>OUR STORY</a></li>
            <li><a href="#gallery" style={{ color: textColor }}>GALLERY</a></li>
            <li><a href="#menus" style={{ color: textColor }}>MENUS</a></li>
            <li><a href="#testimonials" style={{ color: textColor }}>TESTIMONIALS</a></li>
            <li><a href="#contact" style={{ color: textColor }}>CONTACT US</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
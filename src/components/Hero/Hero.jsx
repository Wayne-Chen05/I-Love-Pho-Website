import React from "react";
import './Hero.css';
import heroImage from '../../assets/hero.jpg'; // Adjust the path to your image

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content">
        <a href="#contact">
          <button className="book-table-btn">Book a table</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
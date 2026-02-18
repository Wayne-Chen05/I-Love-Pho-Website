import React from "react";
import './AboutUs.css';
import springRolls from "../../assets/Prawn Fresh Spring Roll.webp"
import dumplings from "../../assets/Dumplings.webp"

const AboutUs = () => {
  return (
    <section id="our-story" className="about-us-section">
      <div className="about-container">
        <div className="about-images">
          <div className="image-wrapper">
            <img
              src={springRolls}
              alt="Fresh spring rolls"
              className="about-image"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="image-wrapper">
            <img
              src={dumplings}
              alt="Dumplings"
              className="about-image"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        
        <div className="about-content">
          <h2 className="about-title">ABOUT US</h2>
          <p className="about-text">
            Our founder, Vicky, grew up in a small village in Vietnam, where meals were simple but full of love and care. Cooking with her family taught her the warmth of sharing food and the joy it can bring. Carrying those memories with her, Vicky opened this restaurant to bring the taste of home to every table.
          </p>
          <a href="#contact">
            <button className="contact-btn">Contact Us</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;


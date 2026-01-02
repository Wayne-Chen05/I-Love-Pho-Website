import React from "react";
import './AboutUs.css';
import springRolls from "../../assets/fresh veg spring roll.png"
import prawns from "../../assets/prawns.png"

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
            />
          </div>
          {/*<div className="image-wrapper">
            <img 
              src={prawns}
              alt="Shrimp and noodle salad"
              className="about-image"
            />
          </div>*/}
        </div>
        
        <div className="about-content">
          <h2 className="about-title">ABOUT US</h2>
          <p className="about-text">
            Our founder, Vicky, grew up in a small village in Vietnam, where meals were simple but full of love and care. Cooking with her family taught her the warmth of sharing food and the joy it can bring. Carrying those memories with her, Vicky opened this restaurant to bring the taste of home to every table.
          </p>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;


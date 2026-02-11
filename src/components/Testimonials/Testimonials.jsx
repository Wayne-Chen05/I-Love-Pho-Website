import React from "react";
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Best vietnamese food I've ever had! Ordered the beef pho and prawn dim sum. The flavours just melded together perfectly!",
      author: "Ilhaam"
    },
    {
      text: "Truly a pleasant experience and wonderfully tasty food. I had the beef pho and when I asked for extra beef, they sure listened!",
      author: "Shani"
    },
    {
      text: "My wife and I went straight in for lunch on the day the Vietnamese restaurant opened. The servers were incredibly friendly, but most importantly, the food was excellent.",
      author: "Daniel"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="testimonials-title">WHAT PEOPLE ARE SAYING</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;


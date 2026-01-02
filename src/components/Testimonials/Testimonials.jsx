import React from "react";
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Best vietnamese food i've ever had! Ordered the beef pho and prawn dim sum. The flavours just melded together perfectly!",
      author: "Ilhaam"
    },
    {
      text: "The ambience was great and the food even better! Simple recipes done well, with top-notch ingredients. Will be back!",
      author: "Dani"
    },
    {
      text: "Eating here made me miss Vietnam so much. What a treat! I will be bringing all my friends here.!",
      author: "Carly"
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


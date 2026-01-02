import React, { useState } from "react";
import './BanhMiSlider.css';
import banhMi from "../../assets/banh mi.png"

const BanhMiSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: banhMi,
      title: "Traditional Banh Mi"
    },
    {
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80",
      title: "Pho Special"
    },
    {
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1920&q=80",
      title: "Fresh Spring Rolls"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="gallery" className="banhmi-slider-section">
      <div className="slider-container">
        <div 
          className="slider-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide.image} alt={slide.title} />
            </div>
          ))}
        </div>
        
        <button className="slider-arrow left-arrow" onClick={prevSlide}>
          ←
        </button>
        <button className="slider-arrow right-arrow" onClick={nextSlide}>
          →
        </button>
      </div>
    </section>
  );
};

export default BanhMiSlider;


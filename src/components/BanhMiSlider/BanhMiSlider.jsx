import React, { useState, useEffect, useRef } from "react";
import './BanhMiSlider.css';
import koreanChicken from "../../assets/Korean Fried Chicken Wings.jpg"
import combo from "../../assets/Combo.jpg"
import springRollBowl from "../../assets/Spring Roll Bowl.jpg"
import searedCheeseSushi from "../../assets/Seared Cheese Sushi.jpg"

const BanhMiSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderTrackRef = useRef(null);
  const isTransitioningRef = useRef(false);
  
  const slides = [
    {
      image: koreanChicken,
      title: "Korean Fried Chicken Wings"
    },
    {
      image: combo,
      title: "Combo"
    },
    {
      image: springRollBowl,
      title: "Spring Roll Bowl"
    },
    {
      image: searedCheeseSushi,
      title: "Seared Cheese Sushi"
    }
  ];

  const nextSlide = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const track = sliderTrackRef.current;
    if (!track) return;

    const handleTransitionEnd = () => {
      isTransitioningRef.current = false;
    };

    track.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      track.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);

  return (
    <section id="gallery" className="banhmi-slider-section">
      <div className="slider-container">
        <div 
          ref={sliderTrackRef}
          className="slider-track"
          style={{ 
            transform: `translateX(-${currentIndex * 25}%)`
          }}
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


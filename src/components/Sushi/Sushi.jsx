import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SUSHI, LUNCH_SPECIALS, SUSHI_PLATTERS, SECTION_BACKGROUNDS } from './sushiMenuData';
import './Sushi.css';

const SushiItem = ({ name, options }) => (
  <div className="sushi-item">
    <div className="sushi-item-content">
      <h3 className="sushi-item-name">{name}</h3>
      <div className="sushi-item-options">
        {options.map((option, index) => (
          <div key={index} className="sushi-option">
            <span className="sushi-option-name">{option.name}</span>
            <span className="sushi-option-price">{option.price}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MenuItem = ({ image, name, description, price }) => (
  <div className="menu-item">
    <div className="menu-item-image">
      {image ? (
        <img src={image} alt={name} className="menu-item-img" loading="lazy" decoding="async" />
      ) : null}
    </div>
    <div className="menu-item-content">
      <h3 className="menu-item-name">{name}</h3>
      <p className="menu-item-description">{description}</p>
    </div>
    <span className="menu-item-price">{price}</span>
  </div>
);

const SectionDivider = ({ title, backgroundImage }) => {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!backgroundImage) return;
    const el = ref.current;
    if (!el) return;
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoaded(true);
            io.disconnect();
          }
        });
      });
      io.observe(el);
      return () => io.disconnect();
    } else {
      setLoaded(true);
    }
  }, [backgroundImage]);

  return (
    <div
      ref={ref}
      className="menu-section-divider"
      style={loaded && backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <h2 className="menu-section-divider-title">{title}</h2>
    </div>
  );
};

const Sushi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sushi-page">
      <div className="sushi-container">
        <section className="menu-section">
          <SectionDivider title="Sushi" backgroundImage={SECTION_BACKGROUNDS.sushi} />
          <div className="sushi-grid">
            {SUSHI.map((item, index) => (
              <SushiItem
                key={index}
                name={item.name}
                options={item.options}
              />
            ))}
          </div>
        </section>

        <section className="menu-section">
          <SectionDivider title="Lunch Specials" backgroundImage={SECTION_BACKGROUNDS.lunchSpecials} />
          <div className="menu-grid menu-grid--single">
            {LUNCH_SPECIALS.map((item, index) => (
              <MenuItem
                key={index}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </section>

        <section className="menu-section">
          <SectionDivider title="Sushi Platters" backgroundImage={SECTION_BACKGROUNDS.sushiPlatters} />
          <div className="menu-grid menu-grid--single">
            {SUSHI_PLATTERS.map((item, index) => (
              <MenuItem
                key={index}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </section>

        <div className="menus-back-wrap">
          <Link to="/#menus" className="menus-back-btn" aria-label="Back to menus">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sushi;
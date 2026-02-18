import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { STARTERS, MAINS, DESSERTS, SECTION_BACKGROUNDS } from './cuisineMenuData';
import './Menus.css';

const MenuItem = ({ image, name, description, price, options }) => (
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
    {options ? (
      <div className="menu-item-options">
        {options.map((option, index) => (
          <div key={index} className="menu-option">
            <span className="menu-option-name">{option.name}</span>
            <span className="menu-option-price">{option.price}</span>
          </div>
        ))}
      </div>
    ) : (
      <span className="menu-item-price">{price}</span>
    )}
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

const Menus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="menus-page">
      <div className="menus-container">
        <section className="menu-section">
          <SectionDivider title="Starters" backgroundImage={SECTION_BACKGROUNDS.starters} />
          <div className="menu-grid">
            {STARTERS.map((item, index) => (
              <MenuItem
                key={index}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
                options={item.options}
              />
            ))}
          </div>
        </section>

        <section className="menu-section">
          <SectionDivider title="Mains" backgroundImage={SECTION_BACKGROUNDS.mains} />
          <div className="menu-grid">
            {MAINS.map((item, index) => (
              <MenuItem
                key={index}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
                options={item.options}
              />
            ))}
          </div>
        </section>

        <section className="menu-section">
          <SectionDivider title="Desserts" backgroundImage={SECTION_BACKGROUNDS.desserts} />
          <div className="menu-grid menu-grid--single">
            {DESSERTS.map((item, index) => (
              <MenuItem
                key={index}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
                options={item.options}
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

export default Menus;
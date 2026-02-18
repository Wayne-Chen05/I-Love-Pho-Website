import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { COFFEE_MENU, TEA_MENU, COOLDRINKS, SECTION_BACKGROUNDS } from './drinksMenuData';
import './Drinks.css';

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

const CooldrinkItem = ({ name, price }) => (
  <div className="cooldrink-item">
    <span className="cooldrink-item-name">{name}</span>
    <span className="cooldrink-item-price">{price}</span>
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

const Drinks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="drinks-page">
      <div className="drinks-container">
        <section className="menu-section">
          <SectionDivider title="Coffee Menu" backgroundImage={SECTION_BACKGROUNDS.coffee} />
          <div className="menu-grid menu-grid--single">
            {COFFEE_MENU.map((item, index) => (
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
          <SectionDivider title="Tea Menu" backgroundImage={SECTION_BACKGROUNDS.tea} />
          <div className="menu-grid menu-grid--single">
            {TEA_MENU.map((item, index) => (
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
          <SectionDivider title="Cooldrinks" backgroundImage={SECTION_BACKGROUNDS.cooldrinks} />
          <div className="cooldrinks-grid">
            {COOLDRINKS.map((item, index) => (
              <CooldrinkItem
                key={index}
                name={item.name}
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

export default Drinks;
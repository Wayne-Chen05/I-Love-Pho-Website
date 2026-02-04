import React from "react";
import { useLocation } from "react-router-dom";
import './Navbar.css';

const MENU_PATHS = ['/menus/cuisine', '/menus/sushi', '/menus/drinks'];

const Navbar = () => {
  const location = useLocation();
  const isMenuPage = MENU_PATHS.includes(location.pathname);
  const navColor = isMenuPage ? 'black' : 'white';

  const linkProps = (hash) =>
    isMenuPage ? { href: `/#${hash}` } : { href: `#${hash}` };

  return (
    <nav
      className={`navbar ${isMenuPage ? 'navbar-menu-page' : ''}`}
      style={{ color: navColor }}
    >
      <div className="nav-container">
        <div className="logo-container">
          <a href={isMenuPage ? '/' : '#home'} style={{ color: navColor, textDecoration: 'none' }}>
            <div className="logo" style={{ color: navColor }}>I LOVE PHO</div>
            <div className="logo-subtitle" style={{ color: navColor }}>Halal Vietnamese Cuisine</div>
          </a>
        </div>
        <ul className="nav-links">
          <li><a {...linkProps('home')} style={{ color: navColor }}>HOME</a></li>
          <li><a {...linkProps('our-story')} style={{ color: navColor }}>OUR STORY</a></li>
          <li><a {...linkProps('gallery')} style={{ color: navColor }}>GALLERY</a></li>
          <li><a {...linkProps('menus')} style={{ color: navColor }}>MENUS</a></li>
          <li><a {...linkProps('testimonials')} style={{ color: navColor }}>TESTIMONIALS</a></li>
          <li><a {...linkProps('contact')} style={{ color: navColor }}>CONTACT US</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

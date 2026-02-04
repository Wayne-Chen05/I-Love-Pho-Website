import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import BanhMiSlider from './components/BanhMiSlider/BanhMiSlider.jsx';
import FlavorsOfVietnam from './components/FlavorsOfVietnam/FlavorsOfVietnam.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import ContactSection from './components/ContactSection/ContactSection.jsx';
import Menus from './components/Menus/Menus.jsx';
import Sushi from './components/Sushi/Sushi.jsx';
import Drinks from './components/Drinks/Drinks.jsx';
import './App.css';

// Home page component
function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <BanhMiSlider />
      <FlavorsOfVietnam />
      <Testimonials />
      <ContactSection />
    </>
  );
}

// Scroll to hash when landing on home with a hash (e.g. /#menus from menu pages)
function HashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (pathname !== '/' || !hash) return;
    const id = hash.slice(1);
    // Wait for home page sections to mount before scrolling
    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <HashScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menus/cuisine" element={<Menus />} />
        <Route path="/menus/sushi" element={<Sushi />} />
        <Route path="/menus/drinks" element={<Drinks />} />
      </Routes>
    </Router>
  );
}

export default App;
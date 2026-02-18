import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';

const Hero = lazy(() => import('./components/Hero/Hero.jsx'));
const AboutUs = lazy(() => import('./components/AboutUs/AboutUs.jsx'));
const BanhMiSlider = lazy(() => import('./components/BanhMiSlider/BanhMiSlider.jsx'));
const FlavorsOfVietnam = lazy(() => import('./components/FlavorsOfVietnam/FlavorsOfVietnam.jsx'));
const Testimonials = lazy(() => import('./components/Testimonials/Testimonials.jsx'));
const ContactSection = lazy(() => import('./components/ContactSection/ContactSection.jsx'));
const Menus = lazy(() => import('./components/Menus/Menus.jsx'));
const Sushi = lazy(() => import('./components/Sushi/Sushi.jsx'));
const Drinks = lazy(() => import('./components/Drinks/Drinks.jsx'));
import './App.css';

// Home page component
function HomePage() {
  return (
    <Suspense fallback={<div aria-busy="true">Loading...</div>}>
      <>
        <Hero />
        <AboutUs />
        <BanhMiSlider />
        <FlavorsOfVietnam />
        <Testimonials />
        <ContactSection />
      </>
    </Suspense>
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
        <Route path="/menus/cuisine" element={
          <Suspense fallback={<div aria-busy="true">Loading menu...</div>}>
            <Menus />
          </Suspense>
        } />
        <Route path="/menus/sushi" element={
          <Suspense fallback={<div aria-busy="true">Loading sushi...</div>}>
            <Sushi />
          </Suspense>
        } />
        <Route path="/menus/drinks" element={
          <Suspense fallback={<div aria-busy="true">Loading drinks...</div>}>
            <Drinks />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
}

export default App;
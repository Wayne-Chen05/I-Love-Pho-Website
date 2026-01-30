import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
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
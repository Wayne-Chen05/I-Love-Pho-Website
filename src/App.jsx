import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import BanhMiSlider from './components/BanhMiSlider/BanhMiSlider.jsx'
import FlavorsOfVietnam from './components/FlavorsOfVietnam/FlavorsOfVietnam.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import ContactSection from './components/ContactSection/ContactSection.jsx'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <BanhMiSlider/>
      <FlavorsOfVietnam/>
      <Testimonials/>
      <ContactSection/>
    </>
  )
}

export default App

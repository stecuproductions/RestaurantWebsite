import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Whyus from "./components/Whyus";
import SpecialOffer from './components/SpecialOffer';
import Specialities from './components/Specialties';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import './App.css'

function App() {
  return (
    <div className='flex flex-col gap-8'>
      <Navbar />
      <HeroSection />
      <Whyus />
      <SpecialOffer />
      <Specialities />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App

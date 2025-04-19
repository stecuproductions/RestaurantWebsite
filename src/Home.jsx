import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Whyus from "./components/Whyus";
import SpecialOffer from './components/SpecialOffer';
import Specialities from './components/Specialties';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function Home() {
  return (
    <div className='bg'>
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

export default Home;

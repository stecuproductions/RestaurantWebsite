import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Whyus from "./components/Whyus";
import SpecialOffer from './components/SpecialOffer';
import Specialities from './components/Specialties';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import BookTable from './components/BookTable';

function Home() {
  return (
    <div className='bg'>
      <Navbar />
      <HeroSection />
      <Whyus />
      <SpecialOffer />
      <Specialities />
      <BookTable />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home;

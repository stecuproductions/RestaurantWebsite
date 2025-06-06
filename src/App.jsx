import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import Footer from './components/Footer';
import './App.css'
import Menu from './Menu';
export default function App() {
  return (
    <div className=' bg-[url(/WhyusBackground.png)]  bg-repeat bg-contain'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu/>} />
      </Routes>
      <Footer />
    </div>

  )
}


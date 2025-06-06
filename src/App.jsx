import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import Footer from './components/Footer';
import './App.css'
import Menu from './Menu';
import { Suspense, lazy } from 'react';

// Fallback loading component
const LoadingFallback = () => (
  <div className="flex justify-center items-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary-color"></div>
  </div>
);

export default function App() {
  return (
    <div className='bg-[url(/WhyusBackground.png)] bg-repeat bg-contain min-h-screen'>
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/Menu" element={<Menu />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}


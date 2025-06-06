import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../Ui/Button';
import {MapPin} from "lucide-react";
const navbarList = [
  { name: 'O Nas', link: '/' },
  { name: 'Menu', link: '/Menu' },
  { name: 'Kontakt', link: '/#kontakt' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleNavbar = () => setIsExpanded(!isExpanded);

  return (
    <nav className='absolute top-0 left-0 w-full bg-transparent flex flex-col text-white justify-between leading-tight z-10 items-center px-4 md:px-8 lg:px-16 py-4'>
      <motion.div initial= {{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}}  className='flex justify-between items-center w-full '>
        <h1 className='font-header  z-10 text-2xl md:text-2xl lg:text-3xl font-semibold text-secondary-color max-w-prose'>
          TWÓJ SMAK
        </h1>

        {/* Desktop menu */}
        <div className='hidden md:flex gap-6 items-center'>
          {navbarList.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className='font-body text-xl text-white hover:text-secondary-color uppercase font-medium transition duration-300'
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className=' gap-4 items-center hidden md:flex'>
        < a href="https://maps.app.goo.gl/CLJjLvkg7tsVyjfV8"  target="_blank" rel="noopener noreferrer">
            <MapPin size={36} className='text-secondary-color ' />
        </a>
          <Button
            variant='primary'>
              <a href="#zarezerwuj">Zarezerwuj Stolik</a>
          </Button>

        </div>

        <GiHamburgerMenu
          className='md:hidden h-full fill-secondary-color  z-10 text-2xl'
          onClick={toggleNavbar}
        />
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isExpanded && (
            <motion.div
            key="mobile-menu"
            className="md:hidden flex flex-col gap-4 self-start items-start w-full z-10 pt-4 pb-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
            {navbarList.map((item, index) => (
                <motion.a
                key={item.name}
                href={item.link}
                variants={itemVariants}
                className="font-body text-xl text-white hover:text-secondary-color"
                >
                {item.name}
                </motion.a>
            ))}

            <motion.div variants={itemVariants} className="w-full flex flex-row justify-between items-center">
              <Button variant='primary' >Zarezerwuj Stolik</Button>            
              <a href="https://maps.app.goo.gl/CLJjLvkg7tsVyjfV8"  target="_blank" rel="noopener noreferrer">
                <MapPin size={36} className='text-secondary-color ' />
              </a>

            </motion.div>
          </motion.div>
            
        )}
        </AnimatePresence>
        {isExpanded && (
          <div
            className="fixed inset-0 z-1 bg-black opacity-80 "
            onClick={toggleNavbar}
          ></div>
        )}
    </nav>
  );
};

export default Navbar;

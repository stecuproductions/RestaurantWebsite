import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Ui/Button';
import SectionLabel from '../Ui/SectionHeader';

const container = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection = () => {
  return (
    <motion.section
      className=" h-dvh w-full bg-center bg-cover  bg-no-repeat flex items-center justify-center px-4 md:px-8 lg:px-16 py-4"
      style={{ backgroundImage: "url('/hero.png')" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Ciemna warstwa tła */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Treść */}
      <motion.div
        className="flex flex-col items-center text-center gap-4 z-1 max-w-[530px] "
        variants={container}
      >
        <motion.div variants={item}>
          <SectionLabel>KUCHNIA Z CHARAKTEREM</SectionLabel>
        </motion.div>

        <motion.h1
          className="font-header text-white text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight md:max-w-[500px] lg:max-w-none"
          variants={item}
        >
          SMAK, KTÓRY POZOSTAJE W PAMIĘCI
        </motion.h1>

        <motion.p
          className="text-base text-white leading-relaxed max-w-prose"
          variants={item}
        >
          Odkryj naszą wyjątkową ofertę dań, które zachwycą Twoje podniebienie.
        </motion.p>

        <motion.div className="mt-4 flex gap-4" variants={item}>
          <Button variant="primary" className="md:block">
            <a href="#zarezerwuj">Zarezerwuj Stolik</a>
          </Button>
          <Button variant="secondary" className="md:block">
            <a href="/menu">Zobacz Menu</a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;

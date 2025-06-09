import { motion } from "framer-motion";
import Button from "../Ui/Button";
import SectionHeader from "../Ui/SectionHeader";

const SpecialOffer = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col lg:flex-row lg:mt-[120px] px-4 md:px-8 lg:px-16 gap-8 lg:gap-16 text-white lg:max-h-[50dvh] rounded-lg shadow-lg"
    >
      {/* Obrazek z animacją slide-in z lewej */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:w-1/2"
      >
        <img
          src="/ramen.png"
          alt="Ramen Tantanmen"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Treść z delayem */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        className="flex flex-col justify gap-4 lg:gap-8"
      >
        <div>
          <SectionHeader>OFERTA SPECJALNA</SectionHeader>
          <h2 className="text-white font-header text-xl mt-4 md:text-2xl lg:text-3xl">
            RAMEN TANTAMEN
          </h2>
          <p className="text-base text-white leading-relaxed max-w-prose mt-4">
            Wyjątkowa kompozycja pikantnego bulionu z pastą sezamową, mielonym mięsem, jajkiem ramen i świeżym szczypiorkiem. Głęboki, intensywny smak z nutą ostrości – idealny na większy głód.
          </p>
          
          
        </div>

        {/* Cena i przycisk z animacją scale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <div>
            <span className="text-secondary-color text-xl font-bold">42 zł</span>
            <span className="line-through text-gray-500 ml-2">65 zł</span>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="#zarezerwuj"><Button>Zamów już dziś</Button></a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SpecialOffer;

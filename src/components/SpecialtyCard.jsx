import { motion } from "framer-motion";
import Button from "../Ui/Button";

const SpecialtyCard = ({ title, description, price, img }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col md:flex-row gap-8 w-full bg-transparent p-4 "
    >
      {/* Left side of card */}
      <div className="md:w-1/2">
        <img src={img} alt={title} className="w-full h-full object-cover rounded-xs" />
      </div>

      {/* Right side of card */}
      <div className="flex flex-col gap-4 justify-between w-full">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-white text-2xl font-semibold">{title}</h3>
            <p className="text-xl text-secondary-color">
              zł <span className="text-2xl font-bold">{price}</span>
            </p>
          </div>
          <p className="text-base text-white leading-relaxed">{description}</p>
        </div>
        <a href="/menu">
          <Button variant="primary" className="w-full">
            Czytaj Więcej
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

export default SpecialtyCard;

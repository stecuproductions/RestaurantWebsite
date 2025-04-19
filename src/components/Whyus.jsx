import WhyusCard from "./WhyusCard";
import { motion } from "framer-motion";
import FullSectionHeader from "./FullSectionHeader";

const container = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Whyus = () => {
  const cards = [
    {
      title: "DRINKI",
      description:
        "Codziennie serwujemy autorskie koktajle i klasyczne drinki, które zaskoczą Cię smakiem i prezentacją.",
      img: "/drink.png",
    },
    {
      title: "JEDZENIE",
      description:
        "Nasze dania główne to połączenie świeżych składników i pasji – sycące, aromatyczne i zawsze perfekcyjnie doprawione.",
      img: "/food.png",
    },
    {
      title: "DESERY",
      description:
        "Na słodki finał – domowe desery, które rozpieszczą każde podniebienie. Od klasyki po nowoczesne kompozycje.",
      img: "/dessert.png",
    },
  ];

  return (
    <motion.section
    className=" px-4 md:px-8 lg:px-16   flex flex-col items-center pt-8  gap-4"
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.05}} // ⬅️ ważne: próg widoczności
    >

      <motion.div
        className="flex flex-col text-center items-center justify-center gap-4  max-w-[550px] "
        variants={child}
      >
        <FullSectionHeader top="DLACZEGO WARTO NAS WYBRAĆ?" center="Tworzymy Najlepsze Doświadczenia Kulinarne" bottom="Nasza oferta to nie tylko jedzenie – to prawdziwa podróż kulinarna. Każdy kęs to eksplozja smaków, które przeniosą Cię w świat"/>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-24  w-full ">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={child}
            className={index === 1 ? "lg:pt-[120px]" : ""}
          >
            <WhyusCard
              title={card.title}
              description={card.description}
              img={card.img}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Whyus;

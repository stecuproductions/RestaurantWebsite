import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getFileMenu } from "./utils/MenuProvider";
import CategoryChoice from "./components/CategoryChoice";
import MenuCard from "./components/MenuCard";
import FullSectionHeader from "./components/FullSectionHeader";
import ScrollToTopButton from "./components/ScrollToTopButton";

const Menu = () => {
  const menu = getFileMenu();
  const categories = menu.map((item) => item.name);
  const [currentCategory, setCurrentCategory] = React.useState(categories[0]);
  const [filteredMenu, setFilteredMenu] = React.useState([]);

  // Add SEO meta information
  useEffect(() => {
    // Update document title for SEO
    document.title = `Menu - TWÓJ SMAK | Restauracja z pasją`;
    
    // Update meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content', 
        `Odkryj nasze menu - ${currentCategory} i inne specjały w restauracji TWÓJ SMAK. Dania przygotowane z najlepszych składników.`
      );
    }
  }, [currentCategory]);

  React.useEffect(() => {
    const newFiltered = menu.find(item => item.name === currentCategory)?.items || [];
    setFilteredMenu(newFiltered);
  }, [currentCategory, menu]);

  const handleCategorySelect = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div className="pt-28 pb-16 w-full px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-8 w-full items-center py-8 mb-12"
      >
        <FullSectionHeader 
          top="MENU RESTAURACJI" 
          center="TWÓJ SMAK" 
          bottom="Zanurz się w kulinarnej podróży pełnej wyjątkowych smaków i aromatów. Nasze menu łączy tradycję z nowoczesnością, by zapewnić Ci niezapomniane doznania."
        />
      </motion.div>

      {/* Accessible category navigation */}
      <section aria-labelledby="menu-categories">
        <h2 id="menu-categories" className="sr-only">Kategorie menu</h2>
        <CategoryChoice 
          categories={categories} 
          onCategorySelect={handleCategorySelect} 
          currentCategory={currentCategory} 
        />
      </section>

      {/* Menu items with animation */}
      <section aria-labelledby={`menu-${currentCategory}`}>
        <h2 id={`menu-${currentCategory}`} className="sr-only">{currentCategory}</h2>
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentCategory}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredMenu.map((item) => (
              <MenuCard key={item.id} menuItem={item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Restaurant information with structured data */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col gap-8 items-center text-center mt-16"
      >
        <div className="flex flex-col gap-2 items-center text-center justify-center w-fit self-center">
          <p className="text-base text-white leading-relaxed">
            Czekamy na <span className="text-secondary-color">CIEBIE</span>
          </p>
          <p className="text-base text-white leading-relaxed">
            Wtorek-Sobota <span className="text-secondary-color">14.00-1:00</span>
          </p>
          <p className="text-base text-white leading-relaxed">
            Niedziela <span className="text-secondary-color">14.00-21:00</span>
          </p>
          
          {/* Schema.org structured data for SEO */}
          <div itemScope itemType="https://schema.org/Restaurant" className="mt-4 sr-only">
            <span itemProp="name">TWÓJ SMAK</span>
            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="streetAddress">ul. Restauracyjna 123</span>
              <span itemProp="addressLocality">Warszawa</span>
              <span itemProp="postalCode">00-001</span>
              <span itemProp="addressCountry">Polska</span>
            </div>
            <span itemProp="telephone">+48 123 456 789</span>
            <span itemProp="servesCuisine">Kuchnia polska, Kuchnia europejska</span>
            <time itemProp="openingHours" dateTime="Tu-Sa 14:00-01:00">Wtorek-Sobota: 14:00-01:00</time>
            <time itemProp="openingHours" dateTime="Su 14:00-21:00">Niedziela: 14:00-21:00</time>
          </div>
        </div>
      </motion.div>

      {/* Add ScrollToTopButton */}
      <ScrollToTopButton />
    </div>
  );
}

export default Menu;

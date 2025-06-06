import React from "react";
import { motion } from "framer-motion";

const CategoryButton = ({ isActive, onClick, children }) => {
    return (
        <motion.button
            onClick={onClick}
            className={`py-2 px-4 rounded-xs border-2 transition duration-300 ease-in-out cursor-pointer ${
                isActive 
                ? "bg-secondary-color text-white border-secondary-color " 
                : "bg-transparent text-white border-secondary-color hover:bg-secondary-color"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {children}
        </motion.button>
    );
};

export default function CategoryChoice({ categories, onCategorySelect, currentCategory }) {
    return(
        <motion.div 
            className="flex flex-row flex-wrap gap-8 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
            {categories.map((category, index) => (
                <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                    <CategoryButton
                        isActive={currentCategory === category}
                        onClick={() => onCategorySelect(category)}
                    >
                        {category}
                    </CategoryButton>
                </motion.div>
            ))}
        </motion.div>
    )
}

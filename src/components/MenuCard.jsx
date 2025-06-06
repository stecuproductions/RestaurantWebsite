// filepath: c:\Users\stecu\OneDrive\Pulpit\Budowa portfolio\RestaurantProject\restaurant\src\components\MenuCard.jsx
import React from "react";

const MenuCard = ({ menuItem }) => {
  const { name, description, price, allergens, imageUrl } = menuItem;

  // Format price to have 2 decimal places and use comma as decimal separator (Polish format)
  const formattedPrice = price.toFixed(2).replace(".", ",");

  return (
    <div className="group relative border-b border-zinc-700/50 hover:border-secondary-color/50 py-8 transition-all duration-300">
      {/* Main container with elegant layout */}
      <div className="flex justify-between items-start">
        {/* Left side with dish details */}
        <div className="flex-1 pr-10">
          {/* Dish name with dotted line to price */}
          <div className="flex items-baseline">
            <h3 className="text-2xl font-serif font-medium text-white group-hover:text-secondary-color transition-colors">
              {name}
            </h3>
            <div className="flex-grow mx-5 border-b border-dotted border-zinc-600 group-hover:border-secondary-color/30 self-end mb-1 transition-colors"></div>
            <span className="text-xl font-medium text-white whitespace-nowrap">
              {formattedPrice} zł
            </span>
          </div>
          
          {/* Description */}
          <p className="text-zinc-400 mt-3 text-base italic font-light pr-6 leading-relaxed">
            {description}
          </p>
          
          {/* Allergens */}
          {allergens && allergens.length > 0 && (
            <div className="mt-3 text-xs text-zinc-500">
              <span className="text-secondary-color/80">Alergeny: </span>
              {allergens.join(", ")}
            </div>
          )}
        </div>
        
        {/* Optional tiny thumbnail that appears on hover */}
        <div className="w-16 h-16 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 shadow-lg">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = '/food.png';
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

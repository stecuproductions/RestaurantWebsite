// filepath: c:\Users\stecu\OneDrive\Pulpit\Budowa portfolio\RestaurantProject\restaurant\src\Menu.jsx
import React from "react";
import { getFileMenu } from "./utils/MenuProvider"
import CategoryChoice from "./components/CategoryChoice";
import MenuCard from "./components/MenuCard";

const Menu = () => {
  const menu = getFileMenu();
  const categories = menu.map((item) => item.name);
  const [currentCategory, setCurrentCategory] = React.useState(categories[0]);
  const [filteredMenu, setFilteredMenu] = React.useState([]);

  React.useEffect(() => {
    const newFiltered = menu.find(item => item.name === currentCategory)?.items || [];
    setFilteredMenu(newFiltered);
  }, [currentCategory, menu]);

  const handleCategorySelect = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div className="flex flex-col justify-center mt-12 p-16">
      <CategoryChoice categories={categories} onCategorySelect={handleCategorySelect} currentCategory={currentCategory} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {filteredMenu.map((item) => (
          <MenuCard key={item.id} menuItem={item} />
        ))} 
      </div>
    </div>
  );
}

export default Menu;

import menuData from "./menu.json";

export function getFileMenu() {
    try {
        // Ensure we return a valid array
        if (Array.isArray(menuData)) {
            return menuData;
        } else {
            console.error("Menu data is not an array:", menuData);
            return [];
        }
    } catch (error) {
        console.error("Error getting menu data:", error);
        return [];
    }
}
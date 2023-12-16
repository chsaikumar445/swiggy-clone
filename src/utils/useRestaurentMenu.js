import { useState, useEffect } from "react";
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../constants";

const useRestaurentMenu = (resId) => {
  const [resInfo, setRestaurentDetails] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getRestaurentMenu();
  }, []);

  const getRestaurentMenu = async () => {
    const data = await fetch(swiggy_menu_api_URL + resId);
    const json = await data.json();

    const restaurantData =
      json?.data?.cards
        ?.map((x) => x.card)
        ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
        ?.info || null;
    // console.log(restaurantData);
    restaurantData.img =
      (await IMG_CDN_URL) + restaurantData?.cloudinaryImageId;
    setRestaurentDetails(restaurantData);

    // Set menu item data
    const menuItemsData =
      json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || [];

    const uniqueMenuItems = [];
    menuItemsData.forEach((item) => {
      if (!uniqueMenuItems.find((x) => x.id === item.id)) {
        uniqueMenuItems.push(item);
      }
    });
    setMenuItems(uniqueMenuItems);
  };

  return [resInfo, menuItems];
};

export default useRestaurentMenu;

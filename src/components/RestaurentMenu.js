import { useParams, useSearchParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../constants";
import RestaurantCategory from "./RestaurantCategory";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id: resId } = useParams();

  const dummy = "Dummy Data";

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwoMessage,
    city,
    avgRating,
  } = resInfo?.cards[0]?.card?.card?.info;

  // console.log(resInfo?.cards[0]?.card?.card?.info, "info");

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="restaurant-menu">
      <div className="restaurent-info">
        <div className="image">
          <img src={CDN_URL + cloudinaryImageId} alt="img" />
        </div>
        <div className="restaurent-data">
          <h2>{name}</h2>
          <h3>{cuisines}</h3>
          <h4>{city}</h4>
          <h4>* {avgRating} stars</h4>
        </div>
        <div className="offer-card">
          <h3>50% off upto 100 Rs | Use code TRYNEW </h3>
          <h3>10% off | Use code WELCOME</h3>
        </div>
      </div>
      <div className="restarent-menu-categories">
        {categories.map((category, index) => {
          // controlled component
          return (
            <RestaurantCategory
              key={category?.card?.card.title}
              data={category?.card?.card}
              setShowIndex={() => setShowIndex(index)}
              dummy={dummy}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;

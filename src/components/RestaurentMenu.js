import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { ITEM_IMG_CDN_URL } from "../constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { id: resId } = useParams();

  const [resInfo, menuItems] = useRestaurentMenu(resId);
  const restaurentDetails = resInfo;
  // console.log(menuItems);

  return (
    <div className="restaurant-menu">
      <div className="restaurent-info">
        <div className="image">
          <img src={restaurentDetails?.img} alt="img" />
        </div>
        <div className="restaurent-data">
          <h2>{restaurentDetails?.name}</h2>
          <h3>{restaurentDetails?.cuisines.join(", ")}</h3>
          <h4>{restaurentDetails?.city}</h4>
          <h4>* {restaurentDetails?.avgRating} stars</h4>
        </div>
        <div className="offer-card">
          <h3>50% off upto 100 Rs | Use code TRYNEW </h3>
          <h3>10% off | Use code WELCOME</h3>
        </div>
      </div>
      <div className="restarent-menu-categories">
        {menuItems.map((item) => {
          {
            // console.log(item);
          }
          <RestaurantCategory data={item} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;

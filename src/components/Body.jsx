import { swiggy_api } from "../constants";
import RestaurentCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurents from "../utils/useRestaurents";

function filterData(search, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(search.toLowerCase())
  );

  return filteredData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, filteredRestaurants] = useRestaurents();
  const [searchResults, setSearchResults] = useState(null);

  const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);

  const setsearchresultsmethod = () => {
    const data = filterData(searchText, allRestaurants);
    setSearchResults(data);
  };

  // useOnlineStatus is custom hook
  const onlineStatus = useOnlineStatus();
  // console.log(onlineStatus);

  if (onlineStatus === false) {
    return <h1>Opps! you are offline :(</h1>;
  }

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container flex flex-wrap items-center justify-center p-6 m-4 text-white max-w-6xl  mx-auto mr-auto bg-[#333]">
        <input
          className="w-1/2 p-4 m-4 border-1 border-r-8 text-black"
          type="text"
          placeholder="search"
          onKeyDown={(e) => (e.key === "Enter" ? setsearchresultsmethod() : "")}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="w-auto h-13 p-4 bg-white text-black"
          onClick={setsearchresultsmethod}>
          Search
        </button>
      </div>
      <div className="restaurant-list flex flex-wrap justify-between items-center max-w-6xl  mx-auto mr-auto">
        {searchResults === null ? (
          ""
        ) : searchResults.length == 0 ? (
          <h1 className="text-5xl text-center m-auto">No Results Found</h1>
        ) : (
          ""
        )}
        {(searchResults === null ? filteredRestaurants : searchResults).map(
          (restaurantData) => {
            return (
              <Link
                key={restaurantData.info.id}
                to={"/restaurent/" + restaurantData?.info?.id}>
                {/* {console.log(restaurantData?.info)} */}
                {restaurantData?.info?.promoted ? (
                  <RestaurentCardPromoted {...restaurantData.info} />
                ) : (
                  <RestaurentCard {...restaurantData.info} />
                )}
              </Link>
            );
          }
        )}
      </div>
    </>
  );
};

export default Body;

import { useEffect, useState } from "react";
import { swiggy_api } from "../constants";

const useRestaurents = () => {
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [allRestaurants, setallRestaurants] = useState([]);

  useEffect(() => {
    getrestaurents();
  }, []);

  async function getrestaurents() {
    try {
      const data = await fetch(swiggy_api);
      const json = await data.json();
      //   console.log(json.data.cards[2].data.data);

      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      //   console.log(resData);
      const resData = await checkJsonData(json);
      //   console.log(resData);
      setfilteredRestaurants(resData);
      setallRestaurants(resData);
      //optional chaining
      // setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      // setallRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }

  return [allRestaurants, filteredRestaurants];
};

export default useRestaurents;

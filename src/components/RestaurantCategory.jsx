// import { useState } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data);
  const [toggleshowIndex, setToggleShowIndex] = useState(false);

  const handleClick = () => {
    setShowIndex();
    setToggleShowIndex();
    setToggleShowIndex(!toggleshowIndex);
  };
  return (
    <div>
      {/* Header */}
      <div className="max-w-5xl mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

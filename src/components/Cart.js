import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearBtn = () => {
    dispatch(clearCart());
  };

  const handleCheckoutBtn = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <h1 className="text-4xl text-center m-4">Cart Empty</h1>
      ) : (
        <div className=" w-6/12 m-auto">
          <h1 className="text-3xl text-center m-3">Cart Page</h1>

          <div>
            <ItemList items={cartItems} />
            <div className="flex justify-around">
              <button
                className="p-2 bg-black text-white rounded-md m-2"
                onClick={handleClearBtn}>
                Clear Cart
              </button>
              <button className="p-2 bg-black text-white rounded-md m-2">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

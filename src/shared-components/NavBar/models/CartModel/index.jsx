import { RemoveScroll } from "react-remove-scroll";
import { motion } from "framer-motion";
import SessionContext from "contexts/sessionContext";
import { useContext, useEffect, useState, useCallback } from "react";
import * as cartService from "services/cart";
import LoadingSpinner from "shared-components/LoadingSpinner";
import CartItem from "./CartItem";
import clsx from "clsx";

const CartModal = () => {
  // const { setCartOpen } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { username } = useContext(SessionContext);

  const fetchCart = useCallback(async () => {
    setIsLoading(true);
    const response = await cartService.getCart();
    setItems(await response.json());
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  let totalQuantity = 0;
  let subTotal = 0;
  for (let item of items) {
    totalQuantity += item.quantity;
    subTotal += item.quantity * item.price_per_unit;
  }
  return (
    <motion.div
      className="flex h-screen w-full max-w-xl flex-col bg-white"
      initial={{ translateX: "100%" }}
      animate={{ translateX: "0" }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-emerald-800 py-7 text-center font-playfair text-3xl text-white shadow-md">
        {username}'s Cart
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex-1 overflow-y-scroll pb-20">
            {items.map((item, idx) => (
              <div
                key={item.id}
                className={clsx(
                  "mx-5 mt-8 pt-8",
                  idx !== 0 && "border-t border-slate-200",
                )}
              >
                <CartItem item={item} fetchCart={fetchCart} />
              </div>
            ))}
          </div>
          <div className="flex flex-col border-t border-slate-200 px-4 pb-4">
            <div className="flex justify-between py-4 text-slate-400">
              <div>{totalQuantity} items</div>
              <div>
                subtotal
                <span className="ml-2 text-lg text-slate-500">${subTotal}</span>
              </div>
            </div>

            <button
              className="flex items-center justify-center rounded-full bg-emerald-700 py-3 text-lg text-white"
              onClick={() =>
                alert("this app is not a real plant selling site :)")
              }
            >
              Checkout
              <i className="fa-regular fa-arrow-right-to-line ml-2 text-2xl"></i>
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default CartModal;

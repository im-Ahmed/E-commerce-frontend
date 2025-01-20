import React, { useState } from "react";
import { createContext } from "react";
import all_product from "../components/assets/all_product";
export const ShopContext = createContext(null);
const getDefaulCart = () => {
  let cart = {};
  for (let index = 1; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartitems, setCartItems] = useState(getDefaulCart());
  const addToCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };
  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };
  const getCartTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartitems[item];
      }
    }
    return totalAmount;
  };
  const getCartItems = () => {
    let totalItems = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        totalItems += cartitems[item];
      }
    }
    return totalItems;
  };
  const contextValue = {
    getCartItems,
    getCartTotalAmount,
    all_product,
    cartitems,
    addToCart,
    removeFromCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;

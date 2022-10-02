import React, { createContext, useContext, useState } from "react";
const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);
export const CartContextProvide = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find(
      (currItem) => currItem["item_name"] === product["item_name"]
    );
    if (exist) {
      setCartItems(
        cartItems.map((currItem) =>
          currItem["item_name"] === product["item_name"]
            ? { ...exist, qty: exist.qty + 1 }
            : currItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find(
      (currItem) => currItem["item_name"] === product["item_name"]
    );
    if (exist.qty === 1) {
      setCartItems(
        cartItems.filter(
          (currItem) => currItem["item_name"] !== product["item_name"]
        )
      );
    } else {
      setCartItems(
        cartItems.map((currItem) =>
          currItem["item_name"] === product["item_name"]
            ? { ...exist, qty: exist.qty - 1 }
            : currItem
        )
      );
    }
  };
  const clearCartItem = () => {
    setCartItems([]);
  };
  const value = { cartItems, onAdd, onRemove, clearCartItem };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

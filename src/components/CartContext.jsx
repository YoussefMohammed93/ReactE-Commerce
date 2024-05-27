import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
    setCartCount(
      savedCartItems.reduce((count, item) => count + item.quantity, 0)
    );
  }, []);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    let updatedCartItems;
    if (existingItem) {
      updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCartItems = [...cartItems, { ...item, quantity: 1 }];
    }
    setCartItems(updatedCartItems);
    setCartCount(
      updatedCartItems.reduce((count, item) => count + item.quantity, 0)
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, cartCount, setCartItems, addToCart, setCartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

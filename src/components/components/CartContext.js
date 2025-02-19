import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (id, size) => {
    setCartItems(cartItems.filter((item) => !(item.id === id && item.size === size)));
  };

  const addToCart = (item) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find(product => product.id === item.id && product.size === item.size);

      if (existingItem) {
        // Update quantity if item already exists
        return prevCart.map(product =>
          product.id === item.id && product.size === item.size
            ? { ...product, quantity: product.quantity + item.quantity }
            : product
        );
      } else {
        return [...prevCart, item];
      }
    });
  };

  const handleQuantityProducts = (id, amount, size) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart , handleQuantityProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

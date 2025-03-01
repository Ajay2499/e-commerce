import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

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

  const updateCart = (responsedata) => {
    setCartItems(responsedata)
  }

  const sendCartToBackend = async (cartData) => {
    const token = localStorage.getItem("token");

    if (!token || cartData.length === 0) return;

    try {
       await axios.post(
        "https://localhost:44348/api/Cart/Checkout",
        cartData ,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Cart items successfully saved!");
    } catch (error) {
      console.error("Error sending cart:", error.response?.data);
      alert("Error sending cart: " + error.response?.data?.message);
    }
  };


  return (
    <CartContext.Provider value={{ cartItems, addToCart,sendCartToBackend,  updateCart, removeFromCart, handleQuantityProducts }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

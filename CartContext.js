// contexts/CartContext.js

import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (medicine) => {
    setCartItems(prevCartItems => [...prevCartItems, medicine]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> - Quantity: {item.quantity} 
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
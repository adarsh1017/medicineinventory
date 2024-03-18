// components/CartModal.js

import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartModal = ({ onClose }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <strong>Name:</strong> {item.name}<br />
              <strong>Quantity:</strong> {item.quantity}
            </li>
          ))}
        </ul>
        <button onClick={() => console.log("Order")}>Order</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CartModal;
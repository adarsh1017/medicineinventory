// components/CartButton.js

import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartModal from './CartModal';

const CartButton = () => {
  const { cartItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="cart-button" onClick={toggleModal}>
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-count">{cartItems.length}</span>
      </div>
      {isOpen && <CartModal onClose={toggleModal} />}
    </div>
  );
};

export default CartButton;
// components/MedicineList.js

import React, { useContext } from 'react';
import { MedicineContext } from '../contexts/MedicineContext';
import { CartContext } from '../contexts/CartContext';

const MedicineList = () => {
  const { medicines, updateMedicineQuantity } = useContext(MedicineContext);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (medicine) => {
    if (medicine.quantity > 0) {
      addToCart(medicine);
      updateMedicineQuantity(medicine.id, -1); // Decrease medicine quantity in inventory by 1
    }
  };

  return (
    <div>
      <h2>Medicine Inventory</h2>
      <ul>
        {medicines.map((medicine) => (
          <li key={medicine.id}>
            <strong>{medicine.name}</strong> - {medicine.description}, Price: {medicine.price}, Quantity: {medicine.quantity}
            {medicine.quantity === 0 ? (
              <span style={{ color: 'red' }}>Out of Stock</span>
            ) : (
              <button onClick={() => handleAddToCart(medicine)}>Add to Cart</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;
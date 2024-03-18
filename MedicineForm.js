// components/MedicineForm.js

import React, { useState, useContext } from 'react';
import { MedicineContext } from '../contexts/MedicineContext';

const MedicineForm = () => {
  const { addMedicine } = useContext(MedicineContext);
  const [medicine, setMedicine] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
  });

  const handleChange = (e) => {
    setMedicine({ ...medicine, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMedicine(medicine);
    setMedicine({
      name: '',
      description: '',
      price: '',
      quantity: '',
    });
  };

  return (
    <div>
      <h2>Add Medicine</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={medicine.name}
          placeholder="Medicine Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={medicine.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={medicine.price}
          placeholder="Price"
          onChange={handleChange}
        />
        <input
          type="number"
          name="quantity"
          value={medicine.quantity}
          placeholder="Quantity"
          onChange={handleChange}
        />
        <button type="submit">Add Medicine</button>
      </form>
    </div>
  );
};

export default MedicineForm;
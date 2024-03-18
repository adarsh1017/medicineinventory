// contexts/MedicineContext.js

import React, { createContext, useState, useEffect } from 'react';

export const MedicineContext = createContext();

export const MedicineProvider = (props) => {
  const [medicines, setMedicines] = useState(() => {
    const storedMedicines = localStorage.getItem('medicines');
    return storedMedicines ? JSON.parse(storedMedicines) : [
      { id: 1, name: 'Paracetamol', description: 'Fever and pain relief', price: 10, quantity: 50 },
      { id: 2, name: 'Aspirin', description: 'Pain relief', price: 8, quantity: 30 },
      { id: 3, name: 'Ibuprofen', description: 'Pain and inflammation relief', price: 12, quantity: 40 }
    ];
  });

  useEffect(() => {
    localStorage.setItem('medicines', JSON.stringify(medicines));
  }, [medicines]);

  const addMedicine = (medicineToAdd) => {
    if (!medicineToAdd.name || !medicineToAdd.description || !medicineToAdd.price || !medicineToAdd.quantity) {
      alert('Please fill all details.');
      return;
    }

    const existingMedicineIndex = medicines.findIndex(
      medicine => medicine.name === medicineToAdd.name &&
                  medicine.description === medicineToAdd.description &&
                  medicine.price === medicineToAdd.price
    );

    if (existingMedicineIndex !== -1) {
      const updatedMedicines = [...medicines];
      updatedMedicines[existingMedicineIndex].quantity += medicineToAdd.quantity;
      setMedicines(updatedMedicines);
    } else {
      setMedicines(prevMedicines => [...prevMedicines, medicineToAdd]);
    }
  };

  const updateMedicineQuantity = (id, quantityChange) => {
    setMedicines(prevMedicines => prevMedicines.map(medicine => {
      if (medicine.id === id) {
        return { ...medicine, quantity: Math.max(0, medicine.quantity + quantityChange) };
      }
      return medicine;
    }));
  };

  return (
    <MedicineContext.Provider value={{ medicines, addMedicine, updateMedicineQuantity }}>
      {props.children}
    </MedicineContext.Provider>
  );
};
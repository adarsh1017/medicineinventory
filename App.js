// App.js

import React from 'react';
import { MedicineProvider } from './contexts/MedicineContext';
import { CartProvider } from './contexts/CartContext';
import MedicineForm from './components/MedicineForm';
import MedicineList from './components/MedicineList';
import CartButton from './components/CartButton';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <MedicineProvider>
        <CartProvider>
          <h1>Medicine Inventory Management</h1>
          <MedicineForm />
          <MedicineList />
          <CartButton />
        </CartProvider>
      </MedicineProvider>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import ProductPage from './ProductPage';
import Cart from './Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = productId => {
    const productToAdd = products.find(product => product.id === productId);
    setCartItems([...cartItems, productToAdd]);
  };

  const products = [
    // Define your array of products here
  ];

  return (
    <div className="app">
      <ProductPage products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
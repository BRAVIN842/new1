// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Navbar from './Navbar';
import Category from './Category';
import Cart from './Cart';
import data from './data';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Category category="electronic" data={data.electronic} addToCart={addToCart} />}
          />
          <Route
            path="/fashion"
            element={<Category category="fashion" data={data.fashion} addToCart={addToCart} />}
          />
          <Route
            path="/motors"
            element={<Category category="motors" data={data.motors} addToCart={addToCart} />}
          />
          <Route
            path="/sports"
            element={<Category category="sports" data={data.sports} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

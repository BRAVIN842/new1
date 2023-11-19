// src/components/Cart.js
import React from 'react';

function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div>
              <img src={item.imgUrl} alt={item.name} />
            </div>
            <div>
              <p>{item.name}</p>
              <p>Ksh{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;

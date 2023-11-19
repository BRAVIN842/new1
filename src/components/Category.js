// src/components/Category.js
import React from 'react';

function Category({ category, data, addToCart }) {
  return (
    <div>
      <h2>{category}</h2>
      <ul>
        {Object.entries(data).map(([itemId, item]) => (
          <li key={itemId}>
            <div>
              <img src={item.imgUrl} alt={item.name} />
            </div>
            <div>
              <p>{item.name}</p>
              <p>Ksh{item.price}</p>
              <button onClick={() => addToCart({ id: itemId, ...item })}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;

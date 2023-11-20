// // src/components/Category.js
// import React from 'react';

// function Category({ category, data, addToCart }) {
//   return (
//     <div>
//       <h2>{category}</h2>
//       <ul>
//         {Object.entries(data).map(([itemId, item]) => (
//           <li key={itemId}>
//             <div>
//               <img src={item.imgUrl} alt={item.name} />
//             </div>
//             <div>
//               <p>{item.name}</p>
//               <p>Ksh{item.price}</p>
//               <button onClick={() => addToCart({ id: itemId, ...item })}>Add to Cart</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Category;

// src/components/Category.js
// import React from 'react';

// function Category({ category, data, addToCart }) {
//   return (
//     <div>
//       <h2>{category}</h2>
//       <ul>
//         {Object.entries(data).map(([itemName, itemDetails]) => (
//           <li key={itemName}>
//             <div>
//               <img src={itemDetails.imgUrl} alt={itemName} />
//             </div>
//             <div>
//               <p>{itemName}</p>
//               <p>Ksh{itemDetails.price}</p>
//               <button onClick={() => addToCart({ id: itemName, ...itemDetails })}>Add to Cart</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Category;

// src/components/Category.js
// import React from 'react';

// function Category({ category, data, addToCart }) {
//   return (
//     <div>
//       <h2>{category}</h2>
//       <ul>
//         {Object.entries(data).map(([itemName, itemDetails]) => (
//           <li key={itemName}>
//             <div>
//               <img src={itemDetails.imgUrl} alt={itemName} />
//             </div>
//             <div>
//               <p>{itemName}</p>
//               <p>Ksh{itemDetails.price}</p>
//               <button onClick={() => addToCart({ id: itemName, ...itemDetails })}>Add to Cart</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Category;

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
              <p>Name: {item.name}</p>
              <p>Price: Ksh{item.price}</p>
              <p>Details: {item.details}</p>
              <button onClick={() => addToCart({ id: itemId, ...item })}>Add to Cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;

import React from 'react';

const FoodList = ({ foodItems, markAsConsumed, markAsWasted }) => {
  return (
    <div>
      <h2>Food List</h2>
      <ul>
        {foodItems.map(item => (
          <li key={item.id} className={item.status}>
            {item.name} (Expires: {item.expiration})
            <button onClick={() => markAsConsumed(item.id)}>Consumed</button>
            <button onClick={() => markAsWasted(item.id)}>Wasted</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;

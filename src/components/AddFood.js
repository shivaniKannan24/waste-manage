import React, { useState } from 'react';

const AddFood = ({ addFoodItem }) => {
  const [foodName, setFoodName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!foodName || !expirationDate) return;
    const newFood = {
      id: Date.now(),
      name: foodName,
      expiration: expirationDate,
      status: 'fresh', // 'fresh', 'consumed', 'wasted'
    };
    addFoodItem(newFood);
    setFoodName('');
    setExpirationDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
        placeholder="Food name"
        required
      />
      <input
        type="date"
        value={expirationDate}
        onChange={(e) => setExpirationDate(e.target.value)}
        required
      />
      <button type="submit">Add Food</button>
    </form>
  );
};

export default AddFood;

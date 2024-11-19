import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import AddFood from './components/AddFood';
import FoodList from './components/FoodList';
import Notification from './components/Notification';

const App = () => {
  const [foodItems, setFoodItems] = useState([]);
  
  // Fetch food items from localStorage on app load
  useEffect(() => {
    const storedFoodItems = JSON.parse(localStorage.getItem('foodItems')) || [];
    setFoodItems(storedFoodItems);
  }, []);

  const addFoodItem = (food) => {
    setFoodItems(prevFoodItems => {
      const updatedFoodItems = [...prevFoodItems, food];
      localStorage.setItem('foodItems', JSON.stringify(updatedFoodItems));
      return updatedFoodItems;
    });
  };

  const markAsConsumed = (id) => {
    setFoodItems(prevFoodItems => {
      const updatedFoodItems = prevFoodItems.filter(item => item.id !== id);
      localStorage.setItem('foodItems', JSON.stringify(updatedFoodItems));
      return updatedFoodItems;
    });
  };

  const markAsWasted = (id) => {
    setFoodItems(prevFoodItems => {
      const updatedFoodItems = prevFoodItems.map(item =>
        item.id === id ? { ...item, status: 'wasted' } : item
      );
      localStorage.setItem('foodItems', JSON.stringify(updatedFoodItems));
      return updatedFoodItems;
    });
  };

  return (
    <div className="App">
      <h1>Food Waste Management</h1>
      <Notification foodItems={foodItems} />
      <AddFood addFoodItem={addFoodItem} />
      <FoodList
        foodItems={foodItems}
        markAsConsumed={markAsConsumed}
        markAsWasted={markAsWasted}
      />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from 'react';

const Notification = ({ foodItems }) => {
  const [inAppNotification, setInAppNotification] = useState('');
  
  // In-App notification for food expiration
  useEffect(() => {
    const today = new Date();
    let expirationNear = false;

    foodItems.forEach(item => {
      const expirationDate = new Date(item.expiration);
      const timeDiff = expirationDate - today;
      const oneDay = 24 * 60 * 60 * 1000; // 1 day in milliseconds

      // Trigger notification if expiration is within the next 1 day
      if (timeDiff <= oneDay && timeDiff > 0) {
        expirationNear = true;
      }
    });

    if (expirationNear) {
      setInAppNotification("Some food items are nearing expiration! Check your inventory.");
    } else {
      setInAppNotification(''); // Reset notification if no items are nearing expiration
    }
  }, [foodItems]);

  return (
    <div>
      {inAppNotification && (
        <div className="in-app-notification">
          {inAppNotification}
        </div>
      )}
    </div>
  );
};

export default Notification;

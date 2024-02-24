
import React from 'react';
import { Link } from 'react-router-dom';

function FoodDetails({ foodDetails, match }) {
  const foodId = match.params.id;
  const selectedFood = foodDetails.find(food => food.id === foodId);

  return (
    <>
      <h1>Food Details</h1>
      {selectedFood && (
        <div>
          <p>Food Type: {selectedFood.foodType}</p>
          <p>Quantity (kg): {selectedFood.quantity}</p>
          <p>Preferred Pickup Time: {selectedFood.pickupTime}</p>
          <p>Address: {selectedFood.address}</p>
          <p>{selectedFood.bestContactTime}</p>
          <Link to="/">Back to Food List</Link>
        </div>
      )}
    </>
  );
}

export default FoodDetails;

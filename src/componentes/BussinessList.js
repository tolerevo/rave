import React from 'react';
import Bussiness from './Bussiness.js';

function BussinessList() {
  const restaurants = [
    { Bussiness },
    { Bussiness },
    { Bussiness },
    { Bussiness }
  ];
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Bussiness restaurantObject={restaurant} />
      ))}
    </div>
  );
}

export default BussinessList;
import React from 'react';
import '../hojas-de-estilo/Bussiness.css';


const bussiness = {
  ImageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

function Bussiness() {
  return (
    <div className='contenedor-restaurante'>
      <img className='image' src={bussiness.ImageSrc} alt={bussiness.name} />
      <h1>{bussiness.name}</h1>
      <ul className=''>
        <li>{bussiness.address}<h2>{bussiness.category}</h2></li>
        <li>{bussiness.city}<h2> Rating{bussiness.rating}</h2> </li>
        <li>state {bussiness.state}<h2> Review{bussiness.reviewCount}</h2></li>
        <li>zipCode {bussiness.zipCode}</li>
      </ul>
    </div>
  );
}

export default Bussiness;
'use strict';
const availabilityValue = document.querySelector('.availability');
const carsBox = document.querySelector('.cars');
const sort = document.querySelector('.sortOptions');
/* */
let cars = [
  {
    id: 1,
    name: 'Toyota Corolla',
    brand: 'Toyota',
    manufacturedYear: 2019,
    doors: 4,
    price: 22000,
    available: 'yes',
    image: 'first car toyota.jpg',
  },
  {
    id: 2,
    name: 'Honda Civic',
    brand: 'Honda',
    manufacturedYear: 2020,
    doors: 4,
    price: 25000,
    available: 'yes',
    image: 'honda civic .webp',
  },
  {
    id: 3,
    name: 'Ford Mustang',
    brand: 'Ford',
    manufacturedYear: 2018,
    doors: 2,
    price: 35000,
    available: 'no',
    image: 'mustant 3.png',
  },
  {
    id: 4,
    name: 'BMW 3 Series',
    brand: 'BMW',
    manufacturedYear: 2021,
    doors: 4,
    price: 45000,
    available: 'yes',
    image: 'BMW 3 Series .png',
  },
  {
    id: 5,
    name: 'Chevrolet Camaro',
    brand: 'Chevrolet',
    manufacturedYear: 2017,
    doors: 2,
    price: 32000,
    available: 'no',
    image: 'Chavrolet 5.jpg',
  },
];

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
  {
    id: 6,
    name: 'Audi A4',
    brand: 'Audi',
    manufacturedYear: 2022,
    doors: 4,
    price: 42000,
    available: 'yes',
    image: 'audi a4 .jpg',
  },
  {
    id: 7,
    name: 'Mercedes-Benz E-Class',
    brand: 'Mercedes-Benz',
    manufacturedYear: 2020,
    doors: 4,
    price: 50000,
    available: 'yes',
    image: 'mercedes e klasa 7.jpg',
  },
  {
    id: 8,
    name: 'Lexus IS',
    brand: 'Lexus',
    manufacturedYear: 2019,
    doors: 4,
    price: 38000,
    available: 'no',
    image: 'lexus 8.webp',
  },
  {
    id: 9,
    name: 'Volkswagen Golf',
    brand: 'Volkswagen',
    manufacturedYear: 2021,
    doors: 4,
    price: 28000,
    available: 'yes',
    image: 'golf 9.jpg',
  },
  {
    id: 10,
    name: 'Subaru Outback',
    brand: 'Subaru',
    manufacturedYear: 2022,
    doors: 4,
    price: 32000,
    available: 'yes',
    image: 'subaru 10.png',
  },
];
function showCar(filter) {
  let carFilter = cars;
  const allCars = cars;

  if (filter === 'all') {
    carFilter = allCars;
  } else if (filter === 'availabel-no') {
    carFilter = cars.filter(car => car.available === 'no');
  } else if (filter === 'available-yes') {
    carFilter = cars.filter(car => car.available === 'yes');
  }

  carsBox.innerHTML = '';

  carFilter.forEach(car => {
    carsBox.innerHTML += `
      <div class="car" id="${car.id}">
        <div class="first-box">
          <h1 class="h1">${car.name}</h1>
          <img class="pictures" src="${car.image}" alt="${car.name}" />
        </div>
        <div class="second-box">
          <p><strong>Brand:</strong> ${car.brand}</p>
          <p><strong>Manufactured Year:</strong> ${car.manufacturedYear}</p>
          <p><strong>Doors:</strong> ${car.doors}</p>
          <p><strong>Price:</strong> <span class="price">$${
            car.price
          }</span></p>
        </div>
        <p class="${car.available === 'yes' ? 'yes-box' : 'no-box'}">
          <strong>Available:</strong> <span class="${
            car.available === 'yes' ? 'yes' : 'no'
          }">${car.available === 'yes' ? 'Yes' : 'No'}</span>
        </p>
        <button type="button" class="btn-delete">Delete</button>
      </div>
    `;
    carsBox.style.gridTemplateRows = `repeat(${car}, 300px)`;
  });
}
function sortCar(s) {
  if (s === 'az') {
    cars.sort((a, b) => a.id - b.id);
  } else if (s === 'za') {
    cars.sort((a, b) => b.id - a.id);
  } else if (s === 'low') {
    cars.sort((a, b) => a.price - b.price);
  } else if (s === 'high') {
    cars.sort((a, b) => b.price - a.price);
  }
  showCar();
}

// Prvi prikaz (svi automobili)
showCar('all');
sort.addEventListener('change', function (e) {
  sortCar(e.target.value);
});
// Promena filtera
availabilityValue.addEventListener('change', function (e) {
  showCar(e.target.value);
});
carsBox.addEventListener('click', function (e) {
  if (e.target.closest('.btn-delete')) {
    let element = e.target.closest('.car');
    let selectElement = document.getElementById(element.id);
    selectElement.classList.add('hidden');
  }
});

'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex = 0, mainIndex = 0, time, address }) {
    console.log(
      `Order receivrd! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  pizzaIngredient: function (ing1, ing2, ing3) {
    console.log(`Pizza with ${ing1}, ${ing2} and ${ing3}.`);
  },
};

// Destructuring Objects
/*
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
let obj = { a: 23, b: 7, c: 14 };
console.log(a, b);
({ a, b } = obj);
console.log(a, b);

// Nested objects
const { fri } = openingHours;
console.log(fri);
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// Destruction object using function
restaurant.orderDelivery({
  time: '2:30 pm',
  address: 'via del sole, 21',
  mainIndex: 1,
  starterIndex: 2,
});

restaurant.orderDelivery({
  time: '5:30 pm',
  address: 'via del sole, 22',
});
*/

// Destructuring Arrays
/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// Using destructuring for switching
[secondary, main] = [main, secondary];
console.log(main, secondary);

// Destructuring using function
console.log(
  restaurant.starterMenu,
  restaurant.mainMenu,
  restaurant.order(0, 2)
);

// destructuring nested arrays
const nested = [2, 4, [5, 6]];
// const [p, q, r] = nested;
const [p, , [q, r]] = nested;
console.log(p, q, r);

// Default values # can be used if you don't know the lenght of the array
const [e = 1, d = 1, f = 1] = [8, 9];
console.log(e, d, f);
*/

// The spread operator
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr); // To print it individually this output as console.log(1,2,7,8,9) output

// Copy array
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
// Joining two arrays
const menu = [...newMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables : strings, arrays, maps, sets. Not objects
let str = 'ASMAA';
console.log(...str);

let ingredients = [
  prompt(`First ingredient`),
  prompt(`Second ingredient`),
  prompt(`Third ingredient`),
];
console.log(ingredients);
restaurant.pizzaIngredient(...ingredients);

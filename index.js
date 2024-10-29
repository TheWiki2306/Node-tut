import getPosts from './postsController.js';
import { getPostsLength } from './postsController.js';

// const {generateRandomNumber, celciusToFahrenheit }= require('./utils');


// console.log(`Random number: ${generateRandomNumber()}`);

// console.log(`Celcius to Fahrenheit: ${celciusToFahrenheit(0)}`);

console.log(getPosts());
console.log(`Length is: ${getPostsLength()}`); 

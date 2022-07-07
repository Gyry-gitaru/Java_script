const userName = prompt('Please, enter your name');
const userSurname = prompt ('Please, enter your surname');
const userAge = parseInt(prompt('Please, enter year of your birthday'));
const YEAR = 2022; 

const result = YEAR - userAge;

console.log(`User Bio: ${userName} ${userSurname}, ${result} years old;`);

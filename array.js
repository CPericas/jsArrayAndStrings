/*
Task 1: Adding and Removing Elements

Create an array containing some initial elements.
Use the push method to add a new element to the end of the array.
Use the pop method to remove the last element from the array.
let fruits = ['apple', 'banana', 'orange'];

Task 2: Sorting Arrays

Create an array of numbers in random order.
Use the sort method to sort the array in ascending order.
let numbers = [3, 1, 5, 2, 4];

Task 3: Applying Array Methods

Create an array of numbers.
Use the map method to double each number in the array.
Use the filter method to filter out even numbers from the array.
Use the reduce method to calculate the sum of all numbers in the array.
let numbers = [3, 1, 5, 2, 4];
*/

//adding in "blueberry"
let fruits = ['apple', 'banana', 'orange'];
fruits.push('blueberry') 
console.log(fruits)

//taking out blueberry
fruits.pop()
console.log(fruits)

let numbers = [3, 1, 5, 2, 4];
numbers.sort()
console.log(numbers)

let doubled = numbers.map(num => num * 2);
console.log(doubled)

let odd = numbers.filter(num => num % 2 !== 0)
console.log(odd)

let total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total)
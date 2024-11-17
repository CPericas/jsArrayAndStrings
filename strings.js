/*
Task 1: Obtaining String Length - Create a string with some text content. - Use the `length` property to obtain the length of the string.

let message = "Hello, World!";

Task 2: Converting Cases - Create a string with mixed-case content. - Use the `toUpperCase` method to convert the string to uppercase. - Use the 
`toLowerCase` method to convert the string to lowercase.

let text = "Hello, World!";

Task 3: Extracting Substrings - Create a string with some text content. - Use the `substring` method to extract a substring from the original string.

let sentence = "The quick brown fox jumps over the lazy dog";

Task 4: Splitting Strings - Create a string containing multiple words separated by spaces. - Use the `split` method to split the string into an 
array of words based on the space delimiter.

let sentence = "The quick brown fox";
*/

let message = "Hello, World!";
console.log(message.length)

let upperCase = message.toUpperCase();
console.log(upperCase)
let lowerCase = message.toLowerCase();
console.log(lowerCase)

let sentence = "The quick brown fox jumps over the lazy dog";

substring = sentence.substring(0, 10)
console.log(substring)

let sentence2 = "The quick brown fox";
let wordArray = sentence2.split(" ")
console.log(wordArray)

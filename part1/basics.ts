// Lecture 1 Core types
// number and string
// Number = all numbers
// string = all strings
// Boolean = all booleans
// Date = all dates
// Array = all arrays
// Object = all objects
// Function = all functions
// Undefined = all undefined
// Null = all null

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = `Result is: `;
resultPhrase = '0';

add(number1, number2, printResult, resultPhrase);

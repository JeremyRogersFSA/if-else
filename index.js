// if the value is truthy, print true;
// if the value is falsy print the correstonding result:
// "the boolean value false is falsy"
// "the null value is falsy"
// "undefined is falsy"
// "The number 0 is falsy (the only falsy number)"
// "The empty string is falsy (the only falsy string)""

function isTruthy(inputValue) {
  if (inputValue) {
    return console.log(true);
  }
  if (inputValue === false)
    console.log(`The ${typeof inputValue} value ${inputValue} is falsy`);
  if (inputValue === null) console.log(`The null value is falsy`);
  if (inputValue === undefined) console.log(`${inputValue} is falsy`);
  if (inputValue === 0)
    console.log(`The number 0 is falsy (the only falsy number)`);
  if (inputValue === "")
    console.log("The empty string is falsy (the only falsy string)");
}

// isTruthy('I am a string')
// isTruthy(false)
// isTruthy(null)
// isTruthy(undefined)
// isTruthy(0)
// isTruthy('')

// Using if/else if/else statemetns JavaScript code in a script tag that takes the sum of two numbers and prints the corresponding result

// sum + ' is greater than 100'
// sum + ' is greater than 0'
// sum + ' is equal to 0'
// sum + ' is a negative number'
// sum + ' is less than -1000'

function NumberLine(number1, number2) {
  let sum = number1 + number2
  if (sum > 100) {
    console.log(sum + ' is greater than 100')
  } else if (sum > 0) {
    console.log(sum + ' is greater than 0')
  } else if (sum === 0) {
    console.log(sum + ' is equal to 0')
  } else if (sum < 0) {
    console.log(sum + ' is a negative number')
  } else if (sum < -1000) {
    console.log(sum + ' is less than -1000')
  }
}

// NumberLine(50, 51)
// NumberLine(99, -2)
// NumberLine(0, 101)
// NumberLine(500, -500)
// NumberLine(-1000, 0)
// NumberLine(-5, 0)

// using if/else if/else statements create javascript code that prints true if both parameters are greater or equal to 5.

// 5, 6 = true
// 10, 11 = true
// 0, 0 = false
// 1000, -1000 = false
// 6, 4 = false
// 5, 5 = true

const Greater_Than_Or_Equal_To_5 = (a, b) =>
  a >= 5 && b >= 5 ? console.log(true) : console.log(false)

// Greater_Than_Or_Equal_To_5(5, 6)
// Greater_Than_Or_Equal_To_5(10, 11)
// Greater_Than_Or_Equal_To_5(0, 0)
// Greater_Than_Or_Equal_To_5(1000, -1000)
// Greater_Than_Or_Equal_To_5(6, 4)
// Greater_Than_Or_Equal_To_5(5, 5)

// Using if/else if/else statements and strict equality operators, create javascript code that compares two sets of two values. Print true if at least one of the pairs is truthy.

function pairAndCompare(param1A, param1B, param2A, param2B) {
  if (param1A === param1B || param2A === param2B) {
    console.log(true)
  } else {
    console.log(false)
  }
}

// pairAndCompare('cat', 'cat', 6, '6') // true
// pairAndCompare('five', 5, 'dog', 'dawg') // false
// pairAndCompare(0, false, 'horse', 'horse') // true
// pairAndCompare('eight', 'eight', 'ate', 'ate') // true
// pairAndCompare(11, 'eleven', 'four', 'for') // false
// pairAndCompare('cake', 'cake', 'pie', 'pie') // true

/*
Exercise 1: Reduce all values to a total

Use .reduce to reduce all of the values to a single total.

An array 'values' has been provided for you.

A variable 'total' has been provided for you. You must use
this variable for the result of you .reduce array method.

Tip: Don't forget to set the initial value to 0

*/

values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumAllValues(values) {
  let sum = 0;
  for (const value of values) {
    sum = sum + value;
  }
  return sum;
}
const sum = sumAllValues(values);


const total = values.reduce((prevValue, currValue) => prevValue += currValue);
console.log('total', total);

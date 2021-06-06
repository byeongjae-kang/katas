//For this kata, we'll be adding only the numbers in the array which match the given condition.
//Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

const conditionalSum = function(values, condition) {
  let total = 0;
  for (let value of values) {
    if (condition === 'even' && value % 2 === 0) {
      total += value;
    }  else if (condition === 'odd' && value % 2 !== 0) {
      total += value;
    }
  }
  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum([], "abc"));
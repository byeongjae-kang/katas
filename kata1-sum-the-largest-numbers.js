//In this exercise, we will be given an array of 2 or more numbers.
//We will then have to find the two largest numbers in that array,
//and sum them together.

const sumLargestNumbers = function(data) {
  let x = data[0]; //x is the largest number.
  let y = data[0]; //y is the second largest number.
  for (let number of data) {
    if (number > x) {
      x = number;
    }
  }
  for (let number of data) {
    if (number < x && number > y) {
      y = number;
    }
  }
  
  return x + y;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
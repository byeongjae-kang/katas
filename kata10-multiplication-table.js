//In this exercise, we will be printing multiplication tables to the console.
//We will be given a number as our input data. This number is the highest value of our multiplication table. Our job is to generate a multiplication table for the values from 1 to the provided number.

const multiplicationTable = (maxValue) => {
  let table = '';
  for (let y = 1; y <= maxValue; y++) {
    for (let x = 1; x <= maxValue; x++) {
      table += (x * y) + ' ';
    }
    table += '\n';
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
/*In this activity, we are going to create a function that can calculate which coins we should use when we need to give change.
We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.
Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.
Valid denominations are as follows:
Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)*/

const calculateChange = function(total, cash) {
  const bills = [['twentyDollar', 2000], ['tenDollar', 1000], ['fiveDollar', 500], ['twoDollar', 200], ['oneDollar', 100], ['quarter', 25], ['dime', 10], ['nickel', 5], ['penny', 1]];
  let balance = cash - total;
  let changes = {};
  for (let i = 0; i < bills.length; i++) {
    if (balance > bills[i][1]) {
      changes[bills[i][0]] = Math.floor(balance / bills[i][1]);
      balance %= bills[i][1];
    }
  }
  return changes;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

//In this exercise, we will be converting a normal string into camelCase text.
//We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

const camelCase = function(input) {
  const stringLower = input.toLowerCase();
  let camelCased = '';
  for (let i = 0; i < input.length; i++) {
    if (stringLower[i - 1] === ' ') {
      camelCased += stringLower[i].toUpperCase();
    } else if (stringLower[i] !== " ") {
      camelCased += stringLower[i];
    }
  }
  return camelCased;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
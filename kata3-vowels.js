//In this exercise, we will be counting the number of vowels that appear in a given string. For this exercise, consider the following to be vowels: a, e, i, o, and u.
//Create a function named numberOfVowels that will receive a string and return the number of vowels in that string.

const numberOfVowels = function(data) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const newVowels = [];
  for (let character of data) {
    for (let vowel of vowels) {
      character === vowel ? newVowels.push(character) : newVowels;
    }
  }
  return newVowels.length;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels(1, 2, 3, 'i'));



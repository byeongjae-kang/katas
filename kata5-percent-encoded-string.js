//In this exercise, we will be given a normal string of words and turn it into a percent-encoded string by replacing all whitespace with %20.
//Create a function named urlEncode that will receive a string of words, and return that string with all of the whitespace characters converted to %20. If there is whitespace on the outside of the string, like in our second example above, you should only replace the whitespace within the string.
//
//Use some sort of looping. Do Not use String.prototype.replace

const urlEncode = function(text) {
  const url = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      if (text[0] === ' ' || text[text.length - 1] === ' ') {
        url.push(null);
      } else {
        url.push('%20');
      }
    } else {
      url.push(text[i]);
    }
  }
  return url.join('');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
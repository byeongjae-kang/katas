const prompt = require("prompt-sync")({
  history: require('prompt-sync-history')(),
});

const randomNumber = Math.floor((Math.random() * 100));
console.log("answer is: " + randomNumber);
const numbersGuessedWrong = [];
let answer;

while (randomNumber !== parseInt(answer)) {
  console.log('Guess a number: ');
  answer = prompt(`> `, 'NaN');
  
  
  if (isNaN(answer)) {
    console.log('Not a number! Try again!');
    numbersGuessedWrong.push(answer);
  } else if (numbersGuessedWrong.includes(answer)) {
    console.log('Already guessed!');
  } else if (randomNumber > answer) {
    console.log('Too Low!');
    numbersGuessedWrong.push(answer);
  } else if (randomNumber < answer) {
    console.log('Too High!');
    numbersGuessedWrong.push(answer);
  } else if (randomNumber === parseInt(answer)) {
    console.log(`You got it! You took ${numbersGuessedWrong.length} attempts!`);
    console.log(`Wrong guesses: ${numbersGuessedWrong}`);
  }
}

prompt.history.save();

'use strict';
/* -----------------------------------------------------------------------------

1. Complete the function named `giveCompliment`as follows:

   - It should take a single parameter: `name`.
   - Its function body should include a variable that holds an array,
     `compliments`, initialized with 10 strings. Each string should be a
     compliment, like `"great"`, `"awesome"` and so on.
   - It should randomly select a compliment from the array.
   - It should return the string "You are `compliment`, `name`!", where
     `compliment` is a randomly selected compliment and `name` is the name that
     was passed as an argument to the function.

2. Call the function three times, giving each function call the same argument:
   your name.
   Use `console.log` each time to display the return value of the
   `giveCompliment` function to the console.
-----------------------------------------------------------------------------*/
function giveCompliment(name) {
  const compliments = [
    'awesome',
    'smart',
    'great',
    'best',
    'wonderful',
    'grateful',
    'helpful',
    'courageous',
    'polite',
    'cool',
  ];
  return `You are ${
    compliments[Math.floor(Math.random() * compliments.length)]
  }, ${name}!`;

  // TODO complete this function
  /* To check the index of complimentList Array

  console.log(`You are ${complimentList[ Math.floor(Math.random()*complimentList.length)]} ${complimentList.indexOf(complimentList[ Math.floor(Math.random()*complimentList.length)])} ${name}`);
  */
}
// TODO substitute your own name for "HackYourFuture"
const myName = 'HackYouFuture';

console.log(giveCompliment(myName));
console.log(giveCompliment(myName));
console.log(giveCompliment(myName));

const yourName = 'Fikret YILMAZ';

console.log(giveCompliment(yourName));
console.log(giveCompliment(yourName));
console.log(giveCompliment(yourName));

// ! Do not change or remove the code below
module.exports = giveCompliment;

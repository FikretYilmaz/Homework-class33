/*------------------------------------------------------------------------------
For this exercise you should do the following:
  - Refactor the rollTheDices() function to throw five dices in one go, making 
    use of the dices array and Promise.all().
  - A successful (i.e. resolved) throw should output a message similar to: 
      Resolved! [ 'JACK', 'QUEEN', 'QUEEN', 'NINE', 'JACK' ]
  - An unsuccessful (i.e. rejected) throw should output a message similar to:
      Rejected! Dice 3 rolled off the table.

The provided rollDice() function logs the value of a dice as it rolls, 
time-stamped with the time of day (with millisecond accuracy) to the console. 
Once you have successfully completed this exercise you will notice that the 
intermediate messages are output in bursts of up to five at a time as the dices 
finish rolling asynchronously.

You may also notice that, in the case of a rejected promise, dices that have not
yet finished their roll continue to do so. 
Can you explain why? Please add your answer as a comment to the end of the 
exercise file.
------------------------------------------------------------------------------*/

// The line below makes the rollDice() function available to this file.
// Do not change or remove it.
const rollDice = require('../../helpers/pokerDiceRoller');

function rollTheDices() {
  const dices = [1, 2, 3, 4, 5];
  const promiseTuple = [];
  dices.forEach((dice) => {
    promiseTuple.push(rollDice(dice));
  });
  // TODO Refactor this function
  //I got help from Obada's code
  return Promise.all(promiseTuple);
}

rollTheDices()
  .then((results) => console.log('Resolved!', results))
  .catch((error) => console.log('Rejected!', error.message));

// ! Do not change or remove the code below
module.exports = rollTheDices;

//It is because of asynchronous execution(in pokerDiceRoller we have a setTimeout function which is async  func) and promise.all. Promise.all execute every code and give us a global catch for each dice but never stop executing async executing. But It is possible to change this behavior by handling possible rejections. If we add special catch to each promises we will console only the error and resolve the rest.
//this cde block is from mozilla.org:
//var p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('p1_delayed_resolution'), 1000);
// });

// var p2 = new Promise((resolve, reject) => {
//   reject(new Error('p2_immediate_rejection'));
// });

// Promise.all([
//   p1.catch(error => { return error }),
//   p2.catch(error => { return error }),
// ]).then(values => {
//   console.log(values[0]) // "p1_delayed_resolution"
//   console.error(values[1]) // "Error: p2_immediate_rejection"
// })

//Also in the pokerDiceRoller.js if we delete between the line 72-75 we don't see the rolling

/*------------------------------------------------------------------------------
In the previous exercise we used `Promise.all()` to throw five dices in one go.
In the current exercise we will be throwing five dices one at a time, waiting 
for a dice to settle before throwing the next one. Of course, we still consider 
a dice rolling off the table to be a showstopper.

To throw the dices sequentially we will be using a _promise chain_. Your job is 
to expand the given promise chain to include five dices.
------------------------------------------------------------------------------*/

// The line below makes the rollDice() function available to this file.
// Do not change or remove it.
const rollDice = require('../../helpers/pokerDiceRoller');

function rollTheDices() {
  const results = [];

  // TODO: expand the chain to include five dices
  return rollDice(1)
    .then((value1) => {
      results.push(value1);
      return rollDice(2);
    })
    .then((value2) => {
      results.push(value2);
      return rollDice(3);
    })
    .then((value3) => {
      results.push(value3);
      return rollDice(4);
    })
    .then((value4) => {
      results.push(value4);
      return rollDice(5);
    })
    .then((value5) => {
      results.push(value5);
      return results;
    });
}

rollTheDices()
  .then((value) => {
    console.log('Resolved!', value);
  })
  .catch((error) => {
    console.log('Rejected!',error.message);
  });

// ! Do not change or remove the code below
module.exports = rollTheDices;

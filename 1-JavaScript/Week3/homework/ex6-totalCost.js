'use strict';
/*------------------------------------------------------------------------------
You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  chips: 0.99,
  chocolate: 1.5,
  tea: 0.5,
  coffee: 2.75,
  snack: 4,
};

function calculateTotalPrice(items) {
  let totalAmonut = 0; //initialized my variable to a 0 (zero) to sum values
  for (const i in items) {
    totalAmonut += items[i];
  }
  return `Total: € ${totalAmonut}`;
}

function test1() {
  console.log('\nTest 1: calculateTotalPrice should take one parameter');
  // TODO replace this comment with your code
  console.assert(calculateTotalPrice.length === 1);
}

function test2() {
  console.log('\nTest 2: return correct output when passed cartForParty');
  // TODO replace this comment with your code
  const testResult = {
    chips: 1.5,
    chocolate: 1.5,
    tea: 2.5,
  };
  const expectedResult = 'Total: € 5.5';
  const reelResult = calculateTotalPrice(testResult);
  console.assert(expectedResult === reelResult);
}

function test() {
  test1();
  test2();
}

test();

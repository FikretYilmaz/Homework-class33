'use strict';

/*------------------------------------------------------------------------------
Rewrite this function, but replace the callback syntax with the Promise syntax:
- Have the `getAnonName` function return a `new Promise`.
- If the Promise `resolves`, pass the full name as an argument to resolve with.
- If the Promise `rejects`, pass an error as the argument to reject with: "You 
  didn't pass in a first name!"
------------------------------------------------------------------------------*/
// TODO see above
function getAnonName(firstName) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstName) {
        reject(new Error("You didn't pass in a first name!"));
      } else {
        const fullName = `${firstName} Doe`;
        resolve(fullName);
      }
    }, 1000);
  });
  return promise;
}

getAnonName('John', console.log)
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });

// ! Do not change or remove the code below
module.exports = getAnonName;

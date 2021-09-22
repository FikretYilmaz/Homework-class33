'use strict';
/*------------------------------------------------------------------------------
Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/

//Create HTML Structure With DOM
const header = document.createElement('h1');
header.textContent = 'Please Choose a Pokemon ';
document.body.appendChild(header);
const brEl = document.createElement('br');
header.appendChild(brEl);
const selectionFrame = document.createElement('div');
document.body.appendChild(selectionFrame);
const selectSection = document.createElement('select');
selectSection.id = 'selection';
selectionFrame.appendChild(selectSection);
const myImg = document.createElement('img'); // I create my Img here but I add it into html in the fetchImg function.
myImg.style.width = '200px';
myImg.alt = 'pokemon-img';
document.body.appendChild(myImg);
myImg.style.display = 'none';

async function fetchData(url) {
  try {
    const response = await fetch(url);
    console.log(response);
    return response;
  } catch (err) {
    console.log('Oops:', err.message);
  }
}

async function fetchAndPopulatePokemons() {
  try {
    const dataOfPokemonName =
      'https://pokeapi.co/api/v2/pokemon?limit=151&offset=151';
    const res = await fetch(dataOfPokemonName);
    if (res.status >= 200 && res.status < 400) {
      const data = await res.json();
      data.results.forEach((data) => {
        const option = document.createElement('option');
        selectSection.appendChild(option);
        option.value = data.name;
        option.textContent = data.name;
      });
      selectSection.addEventListener('change', () => {
        fetchImage(selectSection.value);
      });
    } else {
      throw new Error('Can not get the Data');
    }
  } catch (err) {
    console.log('Error is in the dataOfPokemonName Function', err);
  }
}

async function fetchImage(pokemonName) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const resolve = await fetchData(url);
    if (resolve.status >= 200 && resolve.status < 400) {
      //check if our promise return a valid data
      const data = await resolve.json();
      myImg.style.display = 'inline';
      myImg.src = data.sprites.front_default; //Change img src
    } else {
      throw new Error('Can not get the IMG'); //This is our own message because here we try to get img src if I can not find I throw a clear message
    }
  } catch (err) {
    console.log(err); // this is our default error for code block
  }
}

async function main() {
  await fetchAndPopulatePokemons();
}
window.addEventListener('load', main);

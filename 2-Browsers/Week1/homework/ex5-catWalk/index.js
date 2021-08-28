'use strict';
/*------------------------------------------------------------------------------
1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
const imgObj = document.querySelector('img');
imgObj.style.left = '0px';
let counter = 0;
// I try to get the current width of screen
const totalScreen = window.screen.width;

function catWalk() {
  // TODO complete this function

  // Change name before the middle of the screen my function is calling two times in second then with -100 my animation can dance 5 minutes
  if (counter < totalScreen / 2) {
    console.log(totalScreen / 2);
    counter += 20;
    imgObj.style.left = counter + 'px';
    imgObj.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
  }
  if (counter === totalScreen / 2) {
    imgObj.src =
      'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
    clearInterval(catWalk);
    setTimeout(function () {
      catWalk(), (counter = totalScreen / 2 + 20);
    }, 5000);
    //
  }
  if (counter > totalScreen / 2) {
    counter += 20;
    imgObj.style.left = counter + 'px';
    imgObj.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
  }
  if (counter >= totalScreen) {
    counter = 0;
  }
}

window.setInterval(catWalk, 1000);

// TODO execute `catWalk` when the browser has completed loading the page
window.onload = function () {
  catWalk();
};

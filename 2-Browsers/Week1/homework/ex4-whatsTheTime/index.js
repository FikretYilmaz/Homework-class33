'use strict';
/*------------------------------------------------------------------------------
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  // TODO complete this function
  // I adapted addZero function in this video to my code https://www.youtube.com/watch?v=ewyub_dmsDg
  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }
  const startTime = new Date();
  document.body.textContent =
    addZero(startTime.getHours()) +
    ':' +
    addZero(startTime.getMinutes()) +
    ':' +
    addZero(startTime.getSeconds());
}
window.setInterval(addCurrentTime, 1000);
// TODO execute `addCurrentTime` when the browser has completed loading the page
window.onload = function () {
  addCurrentTime();
};

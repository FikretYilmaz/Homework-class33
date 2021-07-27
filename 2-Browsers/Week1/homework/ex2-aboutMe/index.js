'use strict';
/*------------------------------------------------------------------------------
1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
document.body.style.fontFamily = 'Arial, sans-serif';
//My info list
const myInfo = ['Fiko', 'Pizza', 'Heerhugowaard'];
//add my info to span content
const spanInfo = document.getElementsByTagName('span');
for (let i = 0; i < spanInfo.length; i++) {
  spanInfo[i].textContent = myInfo[i];
}
//3.Change li class name
const liList = document.getElementsByTagName('li');
for (let i = 0; i < liList.length; i++) {
  liList[i].className = 'list-item';
}
//4.Create style tag in HTML file
const headTag = document.querySelector('head');
const styleTag = document.createElement('style');
headTag.appendChild(styleTag);
styleTag.textContent = '.list-item{color:red;}'; //add into style tag list-item color

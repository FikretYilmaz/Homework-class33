//cspell: disable
/*
  
 ** Exercise 1: The book list **

  I'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

*/
//cspell: enable

const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    isbn: '978-0465050659',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    isbn: '978-1617933431',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    isbn: '978-0201616224',
    alreadyRead: true,
  },
];

function createBookList(books) {
  const bookLists = document.getElementById('bookList');
  const myUlTag = document.createElement('ul'); //Create an ul
  bookLists.appendChild(myUlTag); // add ul tag in the div
  myUlTag.style.display = 'flex';
  myUlTag.style.flexWrap = 'wrap';
  myUlTag.style.listStyle = 'none';
  myUlTag.style.padding = '20px';

  for (let i = 0; i < books.length; i++) {
    const myLiTag = document.createElement('li'); //create a li tag
    myLiTag.style.listStyle = 'none';
    myLiTag.style.width = '300px';
    myLiTag.style.height = '300px';
    myLiTag.style.margin = '10px';
    myLiTag.style.border = '2px solid black';
    myUlTag.appendChild(myLiTag); // add li tag into ul tag
    const myParTag = document.createElement('p'); //Create a paragraph tag
    myLiTag.appendChild(myParTag); // add paragraph into li tag
    const myImgTag = document.createElement('img'); //create an img tag
    myImgTag.src = '';
    myImgTag.alt = 'My book image';
    myImgTag.id += `${books[i].author}`; //add an id name to img
    myImgTag.style.width = '250px';
    myImgTag.style.height = '200px';
    myLiTag.appendChild(myImgTag); //add img tag into li tag
    const booksInfo = books[i].title + ' - ' + books[i].author; // to add title and author to paragraph tag
    if (books[i].alreadyRead === false) {
      //to check that book is read or not
      myLiTag.style.backgroundColor = 'red';
    } else {
      myLiTag.style.backgroundColor = 'green';
    }
    myParTag.textContent = booksInfo; //write my result to HTML file
  }
  const donSrc = document.getElementById('Don Norman');
  donSrc.src =
    'https://lh3.googleusercontent.com/proxy/UhwmVwl3838yAm34tzYxdvM-Qpc68cXG8J580h67GBHfXiyqu6ZgiXjvSUsfzOPpDWWIUbp8_zzeIoR4yGaMhNp8UlMlqjQzINmEY68ovaOrx4DVLsqlvjF6KRWwpifiFlQKFFJHIPr5mTEAHdv1y4ajcCwYtAEXEt4k6HANGkl3gzHbfA';
  const brainSrc = document.getElementById('Brian Christian');
  brainSrc.src = 'https://images.penguinrandomhouse.com/cover/9780307476708';
  const andrewSrc = document.getElementById('Andrew Hunt');
  andrewSrc.src = 'https://media.s-bol.com/34489jXEA8x/550x718.jpg';
  // TODO your code goes in here, return the ul element
  return myUlTag;
}

const ulElement = createBookList(myBooks);

document.querySelector('#bookList').appendChild(ulElement);

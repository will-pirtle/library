let myLibrary = [];

const newBookBtn = document.querySelector('#new-book');
const closePopupBtn = document.querySelector('#close-btn');
const bookDisplay = document.querySelector('.books-display');


newBookBtn.addEventListener('click', openPopup);
closePopupBtn.addEventListener('click', closePopup);


function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
}

function displayBooks() {
  bookDisplay.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    book = document.createElement('div');
    bookTitle = document.createElement('span');
    bookTitle.textContent = `${myLibrary[i].title}`;
    bookAuthor = document.createElement('span');
    bookAuthor.textContent = `${myLibrary[i].author}`;
    bookPages = document.createElement('span');
    bookPages.textContent = `${myLibrary[i].pages} pages`;

    book.appendChild(bookTitle);
    book.appendChild(bookAuthor);
    book.appendChild(bookPages);

    bookDisplay.appendChild(book);
  }
}

function addBook(book) {
  myLibrary.push(book);
  displayBooks();
}

function openPopup() {
  const popupForm = document.querySelector('.popup');
  popupForm.style.display = 'flex';
}

function closePopup() {
  const popupForm = document.querySelector('.popup');
  popupForm.style.display = 'none';
}
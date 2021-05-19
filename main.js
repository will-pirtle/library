let myLibrary = [];

const newBookBtn = document.querySelector('#new-book');
const closePopupBtn = document.querySelector('#close-btn');
const bookDisplay = document.querySelector('.books-display');
const popup = document.querySelector('.popup');
const popupForm = document.querySelector('#popup-form');
const formSubmit = popupForm.querySelector('#add-book');


newBookBtn.addEventListener('click', openPopup);
closePopupBtn.addEventListener('click', closePopup);
formSubmit.addEventListener('click', addBook);


function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function displayBooks() {
  bookDisplay.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    bookCard = document.createElement('div');
    bookCard.classList.toggle('book-card');

    bookAuthor = document.createElement('span');
    bookAuthor.textContent = `${myLibrary[i].author}`;
    bookAuthor.classList.toggle('book-author');

    bookTitle = document.createElement('span');
    bookTitle.textContent = `${myLibrary[i].title}`;
    bookTitle.classList.toggle('book-title');
    
    bookPages = document.createElement('span');
    bookPages.textContent = `${myLibrary[i].pages} pages`;
    bookPages.classList.toggle('book-pages');

    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookPages);

    bookDisplay.appendChild(bookCard);
  }
}

function addBook(e) {
  e.preventDefault();

  if (popupForm.checkValidity()) {
    let title, author, pages, read;
    const formInputs = popupForm.querySelectorAll('input');
    formInputs.forEach((input) => {
      switch (input.id) {
        case 'title':
          title = input.value;
          break;
        case 'author':
          author = input.value;
          break;
        case 'pages':
          pages = input.value;
          break;
        case 'read':
          read = input.value;
          break;
      };
    });
    
    if (checkBookInLibrary(title) == false) {
      myLibrary.push(new Book(title, author, pages, read));
      closePopup();
    } else {
      closePopup();
      alert("This book is already in your library.");
    }
    displayBooks();
  } else {
    popupForm.reportValidity();
  }
}

function checkBookInLibrary(title) {
  if (myLibrary.some((book) => book.title === title)) {
    return true;
  }
  return false;
}

function openPopup() {
  popupForm.reset();
  popup.style.display = 'flex';
}

function closePopup() {
  popupForm.reset();
  popup.style.display = 'none';
}
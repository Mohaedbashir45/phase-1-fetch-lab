function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then((response) => response.json())
    .then(renderBooks);
}

function renderBooks(books) {
  books.forEach((book) => {
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});

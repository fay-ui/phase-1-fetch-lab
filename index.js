function fetchBooks() {
  // Return the fetch to allow tests to access it
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((books) => {
      renderBooks(books);
      // After rendering books, you can calculate the fifth book, total pages, etc.
      const fifthBook = books[4]; // 5th book (index 4)
      console.log(fifthBook.name); // Log the name of the 5th book

      // Calculate total pages
      let totalPages = books.reduce((sum, book) => sum + book.numberOfPages, 0);
      console.log(totalPages); // Log total pages
    })
    .catch((error) => console.error("Error fetching books:", error));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

// Call fetchBooks when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

// Fetching the character separately
fetch("https://anapioficeandfire.com/api/characters")
  .then((resp) => resp.json())
  .then((characters) => {
    const character1031 = characters[1030]; // 1031st character (index 1030)
    console.log(character1031.name); // Log the name of the 1031st character
  })
  .catch((error) => console.error("Error fetching characters:", error));

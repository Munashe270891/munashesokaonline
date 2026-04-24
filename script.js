fetch('books.json')
  .then(response => response.json())
  .then(data => {
    const library = document.getElementById('book-grid'); // Make sure your HTML has an id="book-grid"
    data.forEach(book => {
      const card = `
        <div class="book-card">
          <img src="${book.image}" alt="${book.title}">
          <h3>${book.title}</h3>
          <p>${book.description}</p>
          <a href="${book.link}" class="btn" target="_blank">Download Book</a>
        </div>
      `;
      library.innerHTML += card;
    });
  });
fetch('books.json')
  .then(response => response.json())
  .then(data => {
    const library = document.getElementById('book-grid');
    
    data.forEach(book => {
      // Create article element with card class for proper styling inheritance
      const article = document.createElement('article');
      article.className = 'card';
      
      // Create and append image
      const img = document.createElement('img');
      img.src = book.image;
      img.alt = book.title;
      article.appendChild(img);
      
      // Create and append title
      const title = document.createElement('h3');
      title.textContent = book.title;
      article.appendChild(title);
      
      // Create and append description
      const desc = document.createElement('p');
      desc.textContent = book.description;
      article.appendChild(desc);
      
      // Create and append button with proper styling classes
      const btn = document.createElement('a');
      btn.href = book.link;
      btn.target = '_blank';
      btn.className = 'btn btn-primary';
      btn.textContent = 'Download Book';
      article.appendChild(btn);
      
      library.appendChild(article);
    });
  })
  .catch(error => console.error('Error loading books:', error));
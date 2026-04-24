document.addEventListener('DOMContentLoaded', function() {
  // Array of featured book titles
  const featuredTitles = [
    'Faith Meets Financial Manipulation',
    'Faith Doesn\'t Move God'
  ];

  // Fetch books data from relative path
  fetch('./books.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Separate featured and regular books
      const featured = data.filter(book => 
        featuredTitles.includes(book.title)
      );
      const remaining = data.filter(book => 
        !featuredTitles.includes(book.title)
      );

      // Create featured books section
      if (featured.length > 0) {
        const featuredGrid = document.getElementById('featured-grid');
        featured.forEach(book => {
          const card = createBookCard(book, true); // Mark as featured
          featuredGrid.appendChild(card);
        });
      }

      // Create library section with remaining books
      const library = document.getElementById('book-grid');
      remaining.forEach(book => {
        const card = createBookCard(book, false); // Not featured
        library.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error loading books:', error);
      const errorMsg = document.createElement('p');
      errorMsg.textContent = 'Unable to load books. Please try again later.';
      errorMsg.style.color = '#d32f2f';
      errorMsg.style.textAlign = 'center';
      const library = document.getElementById('book-grid');
      if (library) library.parentElement.insertBefore(errorMsg, library);
    });

  // Helper function to create book card
  function createBookCard(book, isFeatured = false) {
    const article = document.createElement('article');
    article.className = isFeatured ? 'card card-featured' : 'card';
    
    // Create and append image container
    const imgContainer = document.createElement('div');
    imgContainer.className = 'card-image-container';
    
    // Create and append image
    const img = document.createElement('img');
    img.src = book.image;
    img.alt = book.title;
    img.loading = 'lazy';
    imgContainer.appendChild(img);
    
    // Add "Best Seller" badge for featured books
    if (isFeatured) {
      const badge = document.createElement('div');
      badge.className = 'bestseller-badge';
      badge.textContent = 'BESTSELLER';
      imgContainer.appendChild(badge);
    }
    
    article.appendChild(imgContainer);
    
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
    btn.rel = 'noopener noreferrer';
    btn.className = 'btn btn-primary';
    btn.textContent = 'Download Book';
    article.appendChild(btn);
    
    return article;
  }
});
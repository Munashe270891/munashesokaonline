const slides = document.querySelectorAll('.carousel-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
let activeIndex = 0;

function updateCarousel(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function showNext() {
  activeIndex = (activeIndex + 1) % slides.length;
  updateCarousel(activeIndex);
}

function showPrev() {
  activeIndex = (activeIndex - 1 + slides.length) % slides.length;
  updateCarousel(activeIndex);
}

nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

setInterval(showNext, 7000);

menuToggle.addEventListener('click', () => {
  siteNav.classList.toggle('open');
});

updateCarousel(activeIndex);

let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === idx) slide.classList.add('active');
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);
setInterval(nextSlide, 4000); // 4 seconds delay

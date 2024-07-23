
  let slideIndex = 0;

  function showSlides() {
      let slides = document.querySelectorAll('.slider-image');
      slides.forEach((slide, index) => {
          slide.style.transform = `translateX(-${slideIndex * 100}%)`;
      });
  }

  function moveSlide(n) {
      let slides = document.querySelectorAll('.slider-image');
      slideIndex += n;

      if (slideIndex >= slides.length) {
          slideIndex = 0;
      } else if (slideIndex < 0) {
          slideIndex = slides.length - 1;
      }

      showSlides();
  }

  // Initial display
  showSlides();

  // Auto slide
  setInterval(() => {
      moveSlide(1);
  }, 3000);

  const darkModeBtn = document.getElementById('dark-mode-btn');
  const bg = document.querySelector("#background");

  darkModeBtn.addEventListener('click', () => {
      bg.classList.toggle('dark-mode');
      darkModeBtn.innerText = bg.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
  });

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });


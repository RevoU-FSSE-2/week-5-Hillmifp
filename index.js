let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlide(n) {
  if (n < 0) {
    slideIndex = slides.length - 1;
  } else if (n >= slides.length) {
    slideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(${-slideIndex * 100}%)`;
  }
}

function changeSlide(n) {
  showSlide((slideIndex += n));
}

// Auto slide change every 3 seconds
setInterval(() => {
  changeSlide(1);
}, 3000);

// Initial slide display
showSlide(slideIndex);

const slides = document.querySelectorAll("#slider img"); //NodeList containing all the <img> elements inside the #slider div
let currentIndex = 0;

function moveSlide(direction) {
  slides[currentIndex].classList.remove("active");
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex >= slides.length) {
    currentIndex = slides.length - 1;
  }
  slides[currentIndex].classList.add("active");
}

// Header transition
window.addEventListener("load", () => {
  const header = document.querySelector(".menu");
  header.classList.add("fadeIn");

  const homeTextLeft = document.querySelector(".home-animation-left");
  homeTextLeft.classList.add("left-element");

  const homeTextRight = document.querySelector(".home-animation-right");
  homeTextRight.classList.add("right-element");
});

// Open CV
document.querySelector("#pdf-button").addEventListener("click", () => {
  const cvPath = "./assets/doc/Currículo Eros Netto Antunes.pdf";
  window.open(cvPath, "_blank");
});

// Blur Hearder
const header = document.querySelector(".menu");
window.addEventListener("scroll", function () {
  if (window.scrollY > 34) {
    header.classList.add("menu-blur");
  } else {
    header.classList.remove("menu-blur");
  }
});

// Slider
const slider = document.querySelectorAll(".slider");
const btnPrev = document.getElementById("prev-button");
const btnNext = document.getElementById("next-button");

let currentSlide = 0;

function hideSlider() {
  slider.forEach((item) => item.classList.remove("on"));
}

function showSlider() {
  slider[currentSlide].classList.add("on");
}

btnNext.addEventListener("click", () => {
  hideSlider();
  if (currentSlide === slider.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlider();
});
btnPrev.addEventListener("click", () => {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = slider.length - 1;
  } else {
    currentSlide--;
  }
  showSlider();
});

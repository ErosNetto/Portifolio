// Hearder transition
window.addEventListener("load", () => {
  // Hearder
  const header = document.querySelector(".menu");
  header.classList.add("fadeIn");

  // Home
  const homeTextLeft = document.querySelector(".home-text-content");
  homeTextLeft.classList.add("left-element");
  const homeTextRight = document.querySelector(".home-img");
  homeTextRight.classList.add("right-element");
});

// About transition revisar
const aboutTextAndTools = document.querySelector(".about-content");
const section = document.getElementById("about");

function isComponentAboveViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight - 250;
}

window.addEventListener("scroll", () => {
  if (isComponentAboveViewport(section)) {
    aboutTextAndTools.classList.add("top-element");
  }
});

// Open CV
document.querySelector("#pdf-button").addEventListener("click", () => {
  const cvPath = "./public/doc/Currículo Eros Netto Antunes.pdf";
  window.open(cvPath, "_blank");
});

// Blur Hearder
const header = document.querySelector(".menu");
window.addEventListener("scroll", () => {
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

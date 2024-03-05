// // Hearder transition
// window.addEventListener("load", () => {
//   // Hearder
//   const header = document.querySelector(".menu");
//   header.classList.add("fadeIn");

//   // Home
//   const homeTextLeft = document.querySelector(".home-text-content");
//   homeTextLeft.classList.add("left-element");
//   const homeTextRight = document.querySelector(".home-img");
//   homeTextRight.classList.add("right-element");
// });

// // About transition revisar
// const aboutTextAndTools = document.querySelector(".about-content");
// const section = document.getElementById("about");

// function isComponentAboveViewport(el) {
//   const rect = el.getBoundingClientRect();
//   return rect.top < window.innerHeight - 250;
// }

// window.addEventListener("scroll", () => {
//   if (isComponentAboveViewport(section)) {
//     aboutTextAndTools.classList.add("top-element");
//   }
// });

// Nav scroll function
function scrollToCenteredSection(id) {
  let section = document.getElementById(id);
  let sectionTop = section.offsetTop;
  let windowH = window.innerHeight;
  let position = sectionTop - windowH / 2 + section.offsetHeight / 2;

  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
}

// function scrollToSectionTop(id, offset = 0) {
//   let section = document.getElementById(id);
//   if (!section) return; // Verifica se a seção existe
//   let sectionTop = section.offsetTop;
//   let windowH = window.innerHeight;
//   let position = sectionTop + offset;

//   window.scrollTo({
//     top: position,
//     behavior: "smooth",
//   });
// }

// Open CV
document.querySelector("#cv-button").addEventListener("click", () => {
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
let intervalId;

function hideSlider() {
  slider.forEach((item) => item.classList.remove("on"));
}

function showSlider() {
  slider[currentSlide].classList.add("on");
}

function nextSlide() {
  hideSlider();
  if (currentSlide === slider.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlider();
}

function prevSlide() {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = slider.length - 1;
  } else {
    currentSlide--;
  }
  showSlider();
}

function sliderAutoPlay() {
  intervalId = setInterval(() => {
    nextSlide();
  }, 4500);
}

btnNext.addEventListener("click", () => {
  nextSlide();
  clearInterval(intervalId);
  sliderAutoPlay();
});

btnPrev.addEventListener("click", () => {
  prevSlide();
  clearInterval(intervalId);
  sliderAutoPlay();
});

sliderAutoPlay();

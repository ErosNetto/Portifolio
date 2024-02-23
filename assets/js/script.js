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

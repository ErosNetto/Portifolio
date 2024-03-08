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

// Translate
const translateImg = document.querySelector("#translate-button");
let idioma = "pt-br";
translateImg.addEventListener("click", () => {
  if (idioma === "pt-br") {
    translateImg.src = "./public/img/bandeira-eua.png";
    idioma = "en";
    translatePortugueseOrEnglish(idioma);
  } else {
    translateImg.src = "./public/img/bandeira-brasil.png";
    idioma = "pt-br";
    translatePortugueseOrEnglish(idioma);
  }
});

function translatePortugueseOrEnglish(lang) {
  // Nav
  let aboutText = document.querySelector("#aboutText");
  let projectText = document.querySelector("#projectText");
  let contactText = document.querySelector("#contactText");
  // Home
  let homeTextP = document.querySelector("#home p");
  // About
  let aboutTextH2 = document.querySelector(".about-text-content h2");
  let aboutTextP1 = document.querySelector(".about-text-content > p");
  let aboutTextP2 = document.querySelector(".about-text-content p + p");
  // Projects
  let projectsTextH2 = document.querySelector(".my-projects-content h2");
  let projectsTextP = document.querySelector(".my-projects-content > p");
  // Contact
  let contactTextH2 = document.querySelector("#contact h2");

  if (lang === "pt-br") {
    aboutText.innerHTML = "Sobre";
    projectText.innerHTML = "Projetos";
    contactText.innerHTML = "Contato";
    homeTextP.innerHTML = "Desenvolvedor Web";
    aboutTextH2.innerHTML = "Sobre mim";
    aboutTextP1.innerHTML =
      "1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam minus aliquam, quod quasi consectetur assumenda voluptatibus totam praesentium illum sapiente omnis. Incidunt autem quo natus quas quam aperiam possimus quae! Portugues";
    aboutTextP2.innerHTML =
      "2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam minus aliquam, quod quasi consectetur assumenda voluptatibus totam praesentium illum sapiente omnis. Incidunt autem quo natus quas quam aperiam possimus quae! Portugues";
    projectsTextH2.innerHTML = "Meus Projetos";
    projectsTextP.innerHTML =
      "Explore alguns dos projetos que desenvolvi com dedicação e empenho.";
    contactTextH2.innerHTML = "Contato";
  } else if (lang === "en") {
    aboutText.innerHTML = "About";
    projectText.innerHTML = "Projects";
    contactText.innerHTML = "Contact";
    homeTextP.innerHTML = "Web developer";
    aboutTextH2.innerHTML = "About me";
    aboutTextP1.innerHTML =
      "1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam minus aliquam, quod quasi consectetur assumenda voluptatibus totam praesentium illum sapiente omnis. Incidunt autem quo natus quas quam aperiam possimus quae! inglês";
    aboutTextP2.innerHTML =
      "2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam minus aliquam, quod quasi consectetur assumenda voluptatibus totam praesentium illum sapiente omnis. Incidunt autem quo natus quas quam aperiam possimus quae! inglês";
    projectsTextH2.innerHTML = "My Projects";
    projectsTextP.innerHTML =
      "Explore some of the projects I developed with dedication and commitment.";
    contactTextH2.innerHTML = "Contact";
  } else {
    console.log("ERROR");
  }
}

// Blur Hearder
const header = document.querySelector(".menu");
window.addEventListener("scroll", () => {
  if (window.scrollY > 34) {
    header.classList.add("menu-blur");
  } else {
    header.classList.remove("menu-blur");
  }
});

// Slide
// const slider = document.querySelectorAll(".slider");
// const btnPrev = document.getElementById("prev-button");
// const btnNext = document.getElementById("next-button");
// let currentSlide = 0;
// let intervalId;

// function hideSlider() {
//   slider.forEach((item) => item.classList.remove("on"));
// }

// function showSlider() {
//   slider[currentSlide].classList.add("on");
// }

// function nextSlide() {
//   hideSlider();
//   if (currentSlide === slider.length - 1) {
//     currentSlide = 0;
//   } else {
//     currentSlide++;
//   }
//   showSlider();
// }

// function prevSlide() {
//   hideSlider();
//   if (currentSlide === 0) {
//     currentSlide = slider.length - 1;
//   } else {
//     currentSlide--;
//   }
//   showSlider();
// }

// function sliderAutoPlay() {
//   intervalId = setInterval(() => {
//     nextSlide();
//   }, 4500);
// }

// btnNext.addEventListener("click", () => {
//   nextSlide();
//   clearInterval(intervalId);
//   sliderAutoPlay();
// });

// btnPrev.addEventListener("click", () => {
//   prevSlide();
//   clearInterval(intervalId);
//   sliderAutoPlay();
// });

// sliderAutoPlay();

// New carousel
let copy = document.querySelector(".tools-slide").cloneNode(true);
document.querySelector(".tools").appendChild(copy);

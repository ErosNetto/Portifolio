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

function scrollToSectionTop(id, offset = 0) {
  let section = document.getElementById(id);
  if (!section) return;
  let sectionTop = section.offsetTop;
  let windowH = window.innerHeight;
  let position;
  if (window.innerWidth > 800) {
    position = sectionTop + offset;
  } else {
    position = sectionTop;
  }
  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
}

// Open CV
document.querySelector("#cv-button").addEventListener("click", () => {
  const cvPath = "./public/doc/CurriculoErosNettoAntunes.pdf";
  window.open(cvPath, "_blank");
});

// Blur Hearder
const header = document.querySelector(".menu");
window.addEventListener("scroll", () => {
  if (window.innerWidth > 800) {
    if (window.scrollY > 34) {
      header.classList.add("menu-blur");
    } else {
      header.classList.remove("menu-blur");
    }
  }
});

// New carousel
let copy = document.querySelector(".tools-slide").cloneNode(true);
document.querySelector(".tools").appendChild(copy);

// Translate
const translateImg = document.querySelector("#translate-button");
let idioma = "pt-br";
translateImg.addEventListener("click", () => {
  if (idioma === "pt-br") {
    translateImg.src = "./src/assets/img/bandeira-eua.png";
    idioma = "en";
    translatePortugueseOrEnglish(idioma);
  } else {
    translateImg.src = "./src/assets/img/bandeira-brasil.png";
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
  let projectTitle1 = document.querySelector("#project1 h3");
  let project1 = document.querySelector("#project1 p");
  let projectTitle2 = document.querySelector("#project2 h3");
  let project2 = document.querySelector("#project2 p");
  let project3 = document.querySelector("#project3 p");
  let projectTitle4 = document.querySelector("#project4 h3");
  let project4 = document.querySelector("#project4 p");
  let project5 = document.querySelector("#project5 p");
  let project6 = document.querySelector("#project6 p");
  let project7 = document.querySelector("#project7 p");
  // Contact
  let contactTextH2 = document.querySelector("#contact h2");

  if (lang === "pt-br") {
    aboutText.innerHTML = "Sobre";
    projectText.innerHTML = "Projetos";
    contactText.innerHTML = "Contato";
    homeTextP.innerHTML = "Desenvolvedor Web";
    aboutTextH2.innerHTML = "Sobre mim";
    aboutTextP1.innerHTML =
      "Meu nome é Eros Netto Antunes e sou desenvolvedor web. Possuo formação técnica em informática e atualmente estou cursando Engenharia de Software na Universidade Unibrasil.";
    aboutTextP2.innerHTML =
      "Tenho trabalhado como freelancer na área de desenvolvimento web, onde crio aplicações completas, desde o backend até o frontend. Além disso, estou continuamente envolvido na criação de vários projetos enquanto prosigo com meus estudos, buscando aprimorar meu conhecimento em programação web.";
    projectsTextH2.innerHTML = "Meus Projetos";
    projectsTextP.innerHTML =
      "Explore alguns dos projetos que desenvolvi com dedicação e empenho.";
    projectTitle1.innerHTML = "Site Venda de Curso";
    project1.innerHTML =
      "Este é o meu Trabalho de Conclusão de Curso para o Técnico em Informática. O projeto consiste em um Site de Venda de Cursos Online, que foi inspirado no website da Udemy.";
    projectTitle2.innerHTML = "A Rede Social";
    project2.innerHTML = "Projeto de uma rede social parecida com o Instagram.";
    project3.innerHTML = "Este projeto consiste em um website de um MiniBlog.";
    projectTitle4.innerHTML = "Palavra Oculta";
    project4.innerHTML =
      "Jogo interativo de adivinhação de palavras com dicas.";
    project5.innerHTML =
      "Meu primeiro projeto desenvolvido durante o curso de TI é um site simples criado para uma mercearia.";
    project6.innerHTML = "Uma Landing page simples.";
    project7.innerHTML =
      "Este projeto consiste em um site desenvolvido para a imobiliária Casa Luz, com o objetivo de adicionar seus imóveis para locação ou venda.";
    contactTextH2.innerHTML = "Contato";
  } else if (lang === "en") {
    aboutText.innerHTML = "About";
    projectText.innerHTML = "Projects";
    contactText.innerHTML = "Contact";
    homeTextP.innerHTML = "Web developer";
    aboutTextH2.innerHTML = "About me";
    aboutTextP1.innerHTML =
      "My name is Eros Netto Antunes and I am a web developer. I have a technical background in IT and am currently studying Software Engineering at Unibrasil University.";
    aboutTextP2.innerHTML =
      "I have been working as a freelancer in the web development area, where I create complete applications, from the backend to the frontend. Furthermore, I am continually involved in creating various projects while continuing with my studies, seeking to improve my knowledge in web programming.";
    projectsTextH2.innerHTML = "My Projects";
    projectsTextP.innerHTML =
      "Explore some of the projects I developed with dedication and commitment.";
    projectTitle1.innerHTML = "Course Sale Website";
    project1.innerHTML =
      "This is my Course Completion Work for the IT Technician. The project consists of an Online Course Sales Site, which was inspired by the Udemy website.";
    projectTitle2.innerHTML = "The social network";
    project2.innerHTML = "Project for a social network similar to Instagram.";
    project3.innerHTML = "This project consists of a MiniBlog website.";
    projectTitle4.innerHTML = "Hidden Word";
    project4.innerHTML = "Interactive word guessing game with hints.";
    project5.innerHTML =
      "My first project developed during the IT course is a simple website created for a grocery store.";
    project6.innerHTML = "A simple landing page.";
    project7.innerHTML =
      "This project consists of a website developed for the real estate company Casa Luz, with the aim of adding its properties for rent or sale.";
    contactTextH2.innerHTML = "Contact";
  } else {
    console.log("ERROR");
  }
}

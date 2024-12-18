import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

document.addEventListener("scroll", function () {
  const parallaxElements = document.querySelectorAll(".parallax");

  parallaxElements.forEach((element) => {
    // Récupérer la vitesse (data-speed)
    const speed = parseFloat(element.getAttribute("data-speed"));
    // Déplacer l'arrière-plan
    const offset = window.scrollY * speed - 400;
    element.style.backgroundPositionY = `${-offset}px`;
  });
});

document.addEventListener("scroll", function () {
  const parallaxElements = document.querySelectorAll(".parallax2");

  parallaxElements.forEach((element) => {
    // Récupérer la vitesse (data-speed)
    const speed = parseFloat(element.getAttribute("data-speed"));
    // Déplacer l'arrière-plan
    const offset = window.scrollY * speed - 1000;
    element.style.backgroundPositionY = `${-offset}px`;
  });
});

document.addEventListener("scroll", function () {
  const parallaxElements = document.querySelectorAll(".parallax3");

  parallaxElements.forEach((element) => {
    // Récupérer la vitesse (data-speed)
    const speed = parseFloat(element.getAttribute("data-speed"));
    // Déplacer l'arrière-plan
    const offset = window.scrollY * speed - 1500;
    element.style.backgroundPositionY = `${-offset}px`;
  });
});

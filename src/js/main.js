const track = document.querySelector(".products");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const cards = document.querySelectorAll(".products .col-4");

let currentIndex = 0;
const cardWidth = cards[0].offsetWidth + 24;

function updateCarousel() {
  track.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}

// Boucle infinie
function goToNext() {
  if (currentIndex >= cards.length - 1) {
    currentIndex = 0; // Retour au début
    track.style.transition = "none";
    updateCarousel();
    setTimeout(() => {
      track.style.transition = "transform 0.5s ease";
      currentIndex++;
      updateCarousel();
    });
  } else {
    currentIndex++;
    updateCarousel();
  }
}

function goToPrev() {
  if (currentIndex <= 0) {
    currentIndex = cards.length - 1; // Retour à la fin
    track.style.transition = "none";
    updateCarousel();
    setTimeout(() => {
      track.style.transition = "transform 0.5s ease";
      currentIndex--;
      updateCarousel();
    });
  } else {
    currentIndex--;
    updateCarousel();
  }
}

nextBtn.addEventListener("click", goToNext);
prevBtn.addEventListener("click", goToPrev);

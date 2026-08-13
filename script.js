const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,

  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 10,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const toggleButton = document.querySelector(".brand__show-hide");
const hiddenCards = document.querySelectorAll(".hidden-card, .extra-card");

let isExpanded = false;

toggleButton.addEventListener("click", () => {
  isExpanded = !isExpanded;
  
  if (isExpanded) {
    hiddenCards.forEach((card) => {
      card.style.display = "flex";
    });
    toggleButton.textContent = "Скрыть";
    toggleButton.classList.add("expanded");
  } else {
    hiddenCards.forEach((card) => {
      card.style.display = "none";
    });
    toggleButton.textContent = "Показать все";
    toggleButton.classList.remove("expanded");
  }
});
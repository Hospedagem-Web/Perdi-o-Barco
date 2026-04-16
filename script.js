const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function showSlide(i) {
  // garante que o índice fique dentro do intervalo
  if (i < 0) {
    index = images.length - 1;
  } else if (i >= images.length) {
    index = 0;
  } else {
    index = i;
  }

  // move o carrossel
  slides.style.transform = `translateX(${-index * 100}%)`;
}

// eventos dos botões
prevBtn.addEventListener("click", () => {
  showSlide(index - 1);
});

nextBtn.addEventListener("click", () => {
  showSlide(index + 1);
});

// inicia no primeiro slide
showSlide(index);

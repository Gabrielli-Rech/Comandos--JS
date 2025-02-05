// Funções do carrossel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
}

// Automatizar o carrossel para exibir uma imagem de cada vez
setInterval(() => {
    nextSlide();
}, 3000); // Troca de slide a cada 3 segundos

// Configuração inicial do carrossel
updateCarousel();
document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 0;

    const moveToNextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        const offset = -currentIndex * (images[0].clientWidth + 20); // 20px por el margen
        carouselTrack.style.transform = `translateX(${offset}px)`;
    };

    setInterval(moveToNextImage, 3000); // Mueve las imágenes cada 3 segundos
});

document.addEventListener('DOMContentLoaded', () => {
    const ajolote = document.querySelector('#ajolote');

    function moveAjoloteRandomly() {
        const windowWidth = window.innerWidth - ajolote.clientWidth;
        const windowHeight = window.innerHeight - ajolote.clientHeight;

        const randomX = Math.random() * windowWidth;
        const randomY = Math.random() * (windowHeight + window.scrollY); // Considera la posición del scroll

        ajolote.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }

    // Mueve el ajolote a una posición aleatoria cada 8 segundos para un movimiento más lento
    setInterval(moveAjoloteRandomly, 8000);

    // También lo mueve al iniciar
    moveAjoloteRandomly();

    // Mueve el ajolote cuando el usuario hace scroll
    window.addEventListener('scroll', moveAjoloteRandomly);
});

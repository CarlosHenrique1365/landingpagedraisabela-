
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementsByClassName('content');

    function handleScroll() {
        const targetPosition = target.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (targetPosition.top < windowHeight && targetPosition.bottom >= 0) {
            target.classList.add('show');
        } else {
            target.classList.remove('show');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verifica a posição inicial do elemento
});

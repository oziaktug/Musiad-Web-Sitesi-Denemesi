let index = 0;
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;

function setPositionByIndex() {
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function showNextSlide() {
    index++;
    if (index >= slideCount) index = 0;
    setPositionByIndex();
}

function showPrevSlide() {
    index--;
    if (index < 0) index = slideCount - 1;
    setPositionByIndex();
}

document.querySelector('.next').addEventListener('click', showNextSlide);
document.querySelector('.prev').addEventListener('click', showPrevSlide);

// Add touch support
let startX;
let currentIndex = 0;

slides.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slides.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;
    
    if (diffX > 50) {
        showNextSlide(); // Swipe left
    } else if (diffX < -50) {
        showPrevSlide(); // Swipe right
    }
});

// Optional: Auto-slide every 5 seconds (Comment this out if you don't want auto-slide)
setInterval(showNextSlide, 5000);

document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.children.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.children.length - 1;
    else currentIndex = index;

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function currentSlide(index) {
    showSlide(index - 1);
}
// Auto-slide function (optional)
setInterval(() => {
    nextSlide();
}, 3000); // Change slide every 3 seconds
let slideIndex = 0;
const slides = document.querySelectorAll('.slides');

function showSlides() {
    // Reset classes for all slides
    slides.forEach(slide => {
        slide.classList.remove('active', 'previous', 'next');
    });

    // Current slide
    slides[slideIndex].classList.add('active');

    // Previous slide
    const previousIndex = (slideIndex === 0) ? slides.length - 1 : slideIndex - 1;
    slides[previousIndex].classList.add('previous');

    // Increment slide index
    slideIndex = (slideIndex + 1) % slides.length;

    // Next slide
    const nextIndex = (slideIndex === slides.length) ? 0 : slideIndex;
    slides[nextIndex].classList.add('next');

    // Change slide every 4 seconds
    setTimeout(showSlides, 4000);
}

// Initialize the slideshow
showSlides();

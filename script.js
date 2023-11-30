function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    if (n >= slides.length) {
        slideIndex = 0; // Wrap around to the first slide
    }

    if (n < 0) {
        slideIndex = slides.length - 1; // Go to the last slide
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

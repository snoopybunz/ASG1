let slideIndex = 0;
function validateForm() {
    var emailInput = document.getElementById('emailInput');
    var emailValue = emailInput.value.trim();

    if (emailValue === '') {
        alert('Please enter a valid email address.');
        return false; // Prevent form submission
    }

    // Display a confirmation message on the page
    var confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerHTML = 'Subscription successful!';

    // Optionally, you can hide the form after successful submission
    var form = document.querySelector('.newsletter form');
    form.style.display = 'none';

    return false; // Prevent form submission
}

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

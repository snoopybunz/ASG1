// Global variable to keep track of the slide index
let slideIndex = 0;

// Function to validate the email input in the form
function validateForm() {
    // Get the email input element
    var emailInput = document.getElementById('emailInput');
    
    // Trim and get the value of the email input
    var emailValue = emailInput.value.trim();

    // Check if the email is empty
    if (emailValue === '') {
        alert('Please enter a valid email address.');
        return false; // Prevent form submission
    }

    // Display a confirmation message on the page
    var confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.innerHTML = 'Subscription successful!';

    // Can hide the form after successful submission
    var form = document.querySelector('.newsletter form');
    form.style.display = 'none';

    return false; // Prevent form submission
}

// Slideshow functionality for rotating images
let currentImageIndex = 0;
const images = document.querySelectorAll('.special-A-imgs img');

// Function to rotate images
function rotateImages() {
    images[currentImageIndex].style.display = 'none';

    currentImageIndex = (currentImageIndex + 1) % images.length;

    images[currentImageIndex].style.display = 'block';
}

// Initial call to start rotating images
rotateImages();

// Set interval to rotate images every 2 seconds
setInterval(rotateImages, 2000);

// Function to toggle display of navigation links on small screens
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

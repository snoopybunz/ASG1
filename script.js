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

let currentImageIndex = 0;
        const images = document.querySelectorAll('.special-A-imgs img');

        function rotateImages() {
            images[currentImageIndex].style.display = 'none';

            currentImageIndex = (currentImageIndex + 1) % images.length;

            images[currentImageIndex].style.display = 'block';
        }

        // Initial call to start rotating images
        rotateImages();

        // Set interval to rotate images every 2 seconds
        setInterval(rotateImages, 2000);


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

let slideIndex = 0;

//Function to validate the email input of the form//
function validateForm() {
    //get email input element//
    var emailInput = document.getElementById('emailInput');
    //trim and get the value of the email input, trim is a method to remove any leading and trailing whitespaces from the string//
    var emailValue = emailInput.value.trim();

    //Check if the email is empty//
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


//home page photos
const dishImages = document.querySelectorAll('.dish-image');
dishImages[0].style.display = 'block'; // Show the first image
let currentImageIndex = 0;

document.getElementById('nextButton').addEventListener('click', () => {
    // Hide the current image
    dishImages[currentImageIndex].style.display = 'none';

    currentImageIndex++;

    if (currentImageIndex >= dishImages.length) {
        currentImageIndex = 0;
    }
    dishImages[currentImageIndex].style.display = 'block';
});

document.getElementById('previousButton').addEventListener('click',() => {
    dishImages[currentImageIndex].style.display = 'none';
    currentImageIndex--;
    if(currentImageIndex < 0) {
        currentImageIndex = dishImages.length - 1;
    }
    dishImages[currentImageIndex].style.display = 'block';
});

//contact us page
/*document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const name = contactForm.elements['name'].value;
        const email = contactForm.elements['email'].value;
        const message = contactForm.elements['message'].value;

        fetch('submit_form.html', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
        .then(response => {
            if (response.ok) {
                window.location.href = 'submit_form.html'; // Redirect to the confirmation page
            } else {
                alert('Error submitting form. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Network error. Please try again later.');
        });
        
    });
});*/


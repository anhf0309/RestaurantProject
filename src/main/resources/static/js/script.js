// welcome text animation
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h2').classList.add('fade-in');
});
//home page photos
const dishImages= document.querySelectorAll('.dish-image');
dishImages[0].style.display = 'block'
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

//using regex to validate name input
function validateForm() {
    let nameInput = document.getElementById("name");
    let nameRegex = /[A-Za-z]+\s[A-Za-z]+$/;//both upper and lower case are accepted

    if (!nameRegex.test(nameInput.value)) {
        alert("Please enter your full name");
        return false;
    }
    return true;
}

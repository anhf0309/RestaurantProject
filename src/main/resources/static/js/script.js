
// welcome text animation
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h2').classList.add('fade-in');
});
//home page photos
const dishImages = document.querySelectorAll('.dish-image');
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



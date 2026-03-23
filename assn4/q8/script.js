// Array of images
const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg"
];

let currentIndex = 0;

const sliderImage = document.getElementById("sliderImage");

// Show image
function showImage(index) {
    sliderImage.src = images[index];
}

// Next image
function nextImage() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    showImage(currentIndex);
}

// Previous image
function prevImage() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
}

// Auto slide every 3 seconds
setInterval(function () {
    nextImage();
}, 3000);

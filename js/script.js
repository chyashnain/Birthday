// Carousel functionality for text/content
let currentIndex = 0;
const contentElements = document.querySelectorAll('#content .carousel-content');
const prevButton = document.querySelector('.arrow-left');
const nextButton = document.querySelector('.arrow-right');

function changeContent(index) {
    contentElements.forEach((element, i) => {
        element.style.display = i === index ? 'block' : 'none';
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + contentElements.length) % contentElements.length;
    changeContent(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % contentElements.length;
    changeContent(currentIndex);
});

// Initialize the display of the first element
changeContent(0);

// Neon letters animation
document.addEventListener("DOMContentLoaded", function () {
    const letters = document.querySelectorAll(".letter");

    function getRandomNeonColor() {
        const randomChannel = () => Math.floor(Math.random() * 155 + 100);
        const randomRed = randomChannel();
        const randomGreen = randomChannel();
        const randomBlue = randomChannel();
        return `rgb(${randomRed},${randomGreen},${randomBlue})`;
    }

    function applyRandomProperties(letter) {
        const randomDelay = Math.random() * 0.6;
        const randomColor = getRandomNeonColor();

        letter.style.animation = `randomMove 0.5s infinite alternate ${randomDelay}s`;
        letter.style.color = randomColor;

        setInterval(function () {
            letter.style.color = getRandomNeonColor();
        }, 1000); // Update color every 1000 milliseconds (1 second)
    }

    letters.forEach(applyRandomProperties);
});

// Balloons animation
document.addEventListener("DOMContentLoaded", function () {
    const balloons = document.querySelectorAll(".balloon");

    function getRandomColor() {
        const randomRed = Math.floor(Math.random() * 80 + 20);
        const randomGreen = Math.floor(Math.random() * 50 + 20);
        const randomBlue = Math.floor(Math.random() * 80 + 20);
        return `rgb(${randomRed},${randomGreen},${randomBlue})`;
    }

    function applyRandomColor(balloon) {
        const randomColor = getRandomColor();
        balloon.querySelector("svg").style.fill = randomColor;
    }

    function onAnimationIteration(event) {
        const balloon = event.target;
        applyRandomColor(balloon);
    }

    balloons.forEach((balloon) => {
        balloon.addEventListener("animationiteration", onAnimationIteration);
        applyRandomColor(balloon);
    });
});

// Image carousel functionality
const images = document.querySelectorAll(".carousel img");

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle("active", i === index);
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

document.querySelector(".arrow-left").addEventListener("click", prevImage);
document.querySelector(".arrow-right").addEventListener("click", nextImage);

// Auto-slide every 5 seconds
setInterval(nextImage, 5000);

// Show the first image initially
showImage(currentIndex);

// Auto-scrolling functionality
const container = document.getElementById("scrollContainer");
let scrollAmount = 0;
const scrollInterval = 400; // Time in milliseconds
const restartDelay = 2000; // Delay in milliseconds before restarting auto-scroll
let autoScrollInterval;
let restartTimeout;

function startAutoScroll() {
    autoScrollInterval = setInterval(autoScroll, scrollInterval);
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

function restartAutoScroll() {
    stopAutoScroll();
    restartTimeout = setTimeout(startAutoScroll, restartDelay);
}

function autoScroll() {
    scrollAmount += 10; // Change the scroll amount as needed
    container.scrollTop = scrollAmount;

    // Reset scroll if it reaches the bottom
    if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        scrollAmount = 0;
    }
}

// Start auto-scrolling initially
startAutoScroll();

// Stop and restart auto-scrolling after manual scroll is detected
container.addEventListener("scroll", () => {
    stopAutoScroll();
    clearTimeout(restartTimeout); // Clear any existing timeout
    restartAutoScroll(); // Restart auto-scrolling after the delay
});

// Background music play after user clicks anywhere on the document
const audio = new Audio('music/merge1.mp3'); // Ensure the path is correct
audio.loop = true;

// Play audio only after user clicks anywhere on the document
document.addEventListener('click', function playAudioOnce() {
    audio.play().then(() => {
        console.log('Audio is playing');
    }).catch(error => {
        console.error('Error playing audio:', error);
    });

    // Remove the event listener after the first click to prevent multiple plays
    document.removeEventListener('click', playAudioOnce);
});

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const mainContainer = document.getElementById('main-container');
const successContainer = document.getElementById('success-container');

// Variables to track Yes button size
let yesFontSize = 1.5;
let yesPadding = 12;

// 1. FALLING HEARTS ANIMATION
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; 
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    document.querySelector('.hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Start raining hearts immediately
setInterval(createHeart, 300);

// 2. "NO" BUTTON CLICK (Makes Yes Bigger)
noBtn.addEventListener('click', () => {
    yesFontSize += 0.5; // Increase font size
    yesPadding += 5;    // Increase button size
    
    yesBtn.style.fontSize = `${yesFontSize}rem`;
    yesBtn.style.padding = `${yesPadding}px ${yesPadding * 2.5}px`;
    
    // Change No text to be funny
    const noTexts = ["Are you sure?", "Really?", "Think again!", "Last chance!", "No!", "Please?"];
    noBtn.innerText = noTexts[Math.floor(Math.random() * noTexts.length)];
});

// 3. "YES" BUTTON CLICK (Shows Success)
yesBtn.addEventListener('click', () => {
    // Trigger Confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Hide Question, Show Celebration
    mainContainer.style.display = 'none';
    successContainer.classList.remove('hidden');
});

// 4. SLIDESHOW LOGIC (Left/Right Arrows)
let slideIndex = 1;
showSlides(slideIndex);

// Function called by arrows
function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[slideIndex-1].style.display = "block";  
}
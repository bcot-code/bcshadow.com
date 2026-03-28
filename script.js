/**
 * BCSHADOW | Theme Toggle Logic
 * Switches between Deep Black (Shadow) and Tactical Grey
 */

function toggleMode() {
    const body = document.body;
    const btn = document.getElementById('theme-button');
    const isTactical = body.getAttribute('data-theme') === 'tactical';

    if (isTactical) {
        body.removeAttribute('data-theme');
        btn.innerHTML = "🌑 SHADOW MODE";
        console.log("BCSHADOW: Shadow Mode Engaged.");
    } else {
        body.setAttribute('data-theme', 'tactical');
        btn.innerHTML = "🔥 TACTICAL MODE";
        console.log("BCSHADOW: Tactical Mode Engaged.");
    }
}

// Optional: Save the user's preference for their next visit
window.onload = () => {
    const savedTheme = localStorage.getItem('bc-theme');
    if (savedTheme === 'tactical') {
        document.body.setAttribute('data-theme', 'tactical');
        document.getElementById('theme-button').innerHTML = "🔥 TACTICAL MODE";
    }
};

// Set slow playback speed for video
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.shadow-video-frame');
    if (video) {
        video.playbackRate = 0.5;  // 50% speed - slow motion
        console.log('Video playback set to 0.5x speed');
    }
});

// Mobile burger menu toggle
const burgerBtn = document.getElementById('burger-btn');
        const navLinks = document.querySelector('.nav-links');
        const body = document.body;

        burgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle body scroll
            if (navLinks.classList.contains('active')) {
                body.style.overflow = 'hidden'; // Stop background scroll
                burgerBtn.textContent = '✕';
            } else {
                body.style.overflow = 'auto'; // Enable background scroll
                burgerBtn.textContent = '☰';
            }
        });

        window.onscroll = function() {
    updateScrollProgress();
};

function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-progress").style.width = scrolled + "%";
}

const titleText = document.getElementById('title-text');
const hero = document.querySelector('.hero');

// Force scroll to top on load
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// Fit text to screen
function fitText() {
    const text = titleText.innerText;
    let fontSize = 10; // Start small
    titleText.style.fontSize = fontSize + 'px';
    
    // Binary search or simple loop to find max size
    // Simple loop for robustness
    while (titleText.scrollWidth < window.innerWidth && titleText.scrollHeight < window.innerHeight) {
        fontSize += 5;
        titleText.style.fontSize = fontSize + 'px';
        if (fontSize > 1000) break; // Safety break
    }
    
    // Back off a bit to ensure it fits
    fontSize -= 10;
    titleText.style.fontSize = fontSize + 'px';
}

window.addEventListener('resize', fitText);
window.addEventListener('load', fitText);

// Blur Effect
function triggerBlur() {
    titleText.classList.add('blur-active');
    setTimeout(() => {
        titleText.classList.remove('blur-active');
    }, 5000); // Remove class after 5s animation completes
}

// Schedule Animation
// 5 seconds normal -> 5 seconds animation -> repeat
// Total cycle: 10 seconds
// First run starts after 5 seconds
setTimeout(() => {
    triggerBlur();
    setInterval(triggerBlur, 10000);
}, 5000);

// script.js

window.addEventListener('load', () => {
    const overlay = document.querySelector('.overlay');
    overlay.addEventListener('animationend', () => {
        overlay.style.display = 'none';
    });
});

document.querySelector('.ui-button').addEventListener('click', () => {
    alert('UI Elements are shown!');
});

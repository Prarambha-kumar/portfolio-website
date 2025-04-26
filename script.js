// script.js

// window.addEventListener('load', () => {
//     const overlay = document.querySelector('.overlay');
//     overlay.addEventListener('animationend', () => {
//         overlay.style.display = 'none';
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 1300); // Match the duration of the loader animation (1.7 seconds)
});


document.querySelector('.ui-button').addEventListener('click', () => {
    alert('UI Elements are shown!');
});


letmenu = document.querySelector('#menu-icon');
let navnar = document.querySelector('.nav-bar');
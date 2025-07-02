document.addEventListener("DOMContentLoaded", function () {
    console.log("Testing - JavaScript is working!");
});

function toggleMenu() {
        var nav = document.getElementById('mainNav');
        nav.classList.toggle('show');
    }
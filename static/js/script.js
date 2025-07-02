document.addEventListener("DOMContentLoaded", function () {
    console.log("Testing - JavaScript is working!");
});

function toggleMenu() {
    var nav = document.getElementById('mainNav');
    nav.classList.toggle('show');
}

/* Check if slideshow exists before running slideshow script */

let slides = document.getElementsByClassName("mySlides");
if (slides.length > 0) {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
}
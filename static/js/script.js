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

// Check if the form with id 'travelForm' exists before adding event listener
const travelForm = document.getElementById('travelForm');
if (travelForm) {
    travelForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('favoriteDestination').value;
        const reason = document.getElementById('whyFavorite').value;
        const motivation = document.getElementById('tripMotivation').value;
        document.getElementById('formMessage').textContent = `Thanks for sharing! We are delighted ${name} was your favorite destination! It is an impressive destination and we can understand why you loved it, based on your answer "${reason}". We hope History Explorer can match your expectations and provide you "${motivation}"`;
        this.reset();
    });
}

// Random destination selector
const randomDestination = document.getElementById('travelForm');
if (randomDestination) {
document.getElementById('randomDestination').addEventListener('click', () => {
    const destinations = ['Tokyo', 'Paris', 'Sidney', 'New York', 'Rio de Janeiro', 'Cairo', 'Stockholm', 'Machu Picchu', 'Budapest', 'Lisbon', 'London', 'Karachi', 'Washington', 'Cape Town'];
    const random = destinations [Math.floor(Math.random() * destinations.length)];
    document.getElementById('randomDestinationResult').textContent = `Congratulations, prepare for your next trip to ${random}!`;
});
}
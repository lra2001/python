// Toggle menu function (you can leave it here or outside)
function toggleMenu() {
  const nav = document.getElementById('mainNav');
  nav.classList.toggle('show');
}
document.addEventListener("DOMContentLoaded", function () {
  console.log("Testing - JavaScript is working!");

  const hamburger = document.querySelector(".hamburger");
  const mainNav = document.getElementById("mainNav");

  if (hamburger && mainNav) {
    hamburger.addEventListener("click", () => {
      mainNav.classList.toggle("show");
    });
  }

  // Slideshow
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

  // Travel form
  const travelForm = document.getElementById('travelForm');
  if (travelForm) {
    travelForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('favoriteDestination').value;
      const reason = document.getElementById('whyFavorite').value;
      const motivation = document.getElementById('tripMotivation').value;
      document.getElementById('formMessage').textContent =
        `Thanks for sharing! We are delighted ${name} was your favorite destination! It is an impressive destination and we can understand why you loved it, based on your answer "${reason}". We hope History Explorer can match your expectations and provide you "${motivation}"`;
      this.reset();
    });

    // Random destination selector (make sure you have #randomDestination and #randomDestinationResult in your HTML)
    const randomBtn = document.getElementById('randomDestination');
    if (randomBtn) {
      randomBtn.addEventListener('click', () => {
        const destinations = ['Tokyo', 'Paris', 'Sidney', 'New York', 'Rio de Janeiro', 'Cairo', 'Stockholm', 'Machu Picchu', 'Budapest', 'Lisbon', 'London', 'Karachi', 'Washington', 'Cape Town'];
        const random = destinations[Math.floor(Math.random() * destinations.length)];
        const resultEl = document.getElementById('randomDestinationResult');
        if (resultEl) {
          resultEl.textContent = `Congratulations, prepare for your next trip to ${random}!`;
        }
      });
    }
  }

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const subjectError = document.getElementById('subjectError');
    const nameError = document.getElementById('nameError');
    const mailError = document.getElementById('mailError');
    const messageError = document.getElementById('messageError');
    const responseDiv = document.getElementById('contactResponse');
    const messageField = document.getElementById('message');
    const charCount = document.getElementById('charCount');

    // Character count live update
    if (messageField && charCount) {
      messageField.addEventListener('input', () => {
        charCount.textContent = `${messageField.value.length} / 500 characters`;
      });
    }

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Reset error messages & response
      subjectError.textContent = '';
      nameError.textContent = '';
      mailError.textContent = '';
      messageError.textContent = '';
      responseDiv.textContent = '';
      responseDiv.classList.remove('show');
      responseDiv.classList.add('hidden');

      let isValid = true;

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const subject = this.subject.value.trim();
      const name = this.name.value.trim();
      const mail = this.mail.value.trim();
      const message = this.message.value.trim();

      if (!subject) {
        subjectError.textContent = 'Please select a reason for contact.';
        isValid = false;
      }

      if (!name) {
        nameError.textContent = 'Please enter your name.';
        isValid = false;
      }

      if (!mail) {
        mailError.textContent = 'Please enter your email address.';
        isValid = false;
      } else if (!emailPattern.test(mail)) {
        mailError.textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      if (!message) {
        messageError.textContent = 'Please enter a message.';
        isValid = false;
      }

      if (!isValid) {
        contactForm.classList.add('shake');
        setTimeout(() => contactForm.classList.remove('shake'), 300);
        return;
      }

      // If valid
      responseDiv.innerHTML = `Thanks for reaching out, <strong>${this.name.value.trim()}</strong>! We'll be in touch with you soon.`;
      responseDiv.classList.remove("hidden");
      responseDiv.classList.add("show");

      contactForm.reset();
      charCount.textContent = '0 / 500 characters';
    });
  }
});
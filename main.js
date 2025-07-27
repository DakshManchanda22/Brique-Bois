let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Slideshow initialization
    if (slides.length > 0) {
        showSlide(slideIndex);
        setInterval(() => {
            slideIndex = (slideIndex + 1) % slides.length;
            showSlide(slideIndex);
        }, 5000);
    }
    
    // Form validation setup
    const contactForm = document.querySelector('.form');
    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }
});

// Show the current slide
function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}

function validateForm(event) {
    event.preventDefault();
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var messageInput = document.getElementById('message');
    
    nameInput.value = nameInput.value.toUpperCase();
    

    if (nameInput.value === "" || emailInput.value === "" || phoneInput.value === "" || messageInput.value === "") {
        window.alert("All fields must be filled out.");
        return false;
    }
    
    if (!emailInput.value.includes('@')) {
        window.alert("Email must contain @ symbol.");
        emailInput.focus();
        return false;
    }
    
    if (isNaN(phoneInput.value)) {
        window.alert("Phone must contain only numbers.");
        phoneInput.focus();
        return false;
    }
    
    window.alert("Form submitted successfully!");
    this.reset();
    return false;
} 
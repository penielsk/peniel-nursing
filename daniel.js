// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Form Submission Handling (Consultation Booking)
document.getElementById('consultation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    // Send data to your email (using FormSubmit or backend)
    alert(`Thank you, ${name}! We will contact you shortly.`);
    this.reset();
});

// WhatsApp Integration
function openWhatsApp() {
    window.open('https://wa.me/256708515107', '_blank');
}
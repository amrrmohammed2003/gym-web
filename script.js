document.getElementById('joinButton').addEventListener('click', function() {
    alert('Thank you for your interest in joining our gym!');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    // Here you can add code to send the form data to a server if needed
    this.reset(); // Reset the form fields
});
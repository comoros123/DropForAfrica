// Hamburger menu toggle for mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('open');
});

// Close menu when clicking outside (mobile)
document.addEventListener('click', function(e) {
  const nav = document.querySelector('nav');
  const menu = document.querySelector('.menu');
  if (menu.classList.contains('open') && !nav.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// Booking form alert
document.getElementById('bookingForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you for booking with Drop for Africa! We will contact you shortly.');
  this.reset();
});
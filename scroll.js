// This script handles the scroll functionality
document.addEventListener('DOMContentLoaded', function() {
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href');
if (targetId === '#') return;
const targetElement = document.querySelector(targetId);
if (targetElement) {
window.scrollTo({
top: targetElement.offsetTop - 80, // Adjust for header height
behavior: 'smooth'
});
}
});
});
// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', function() {
if (window.scrollY > 50) {
header.classList.add('py-2');
header.classList.add('shadow-lg');
} else {
header.classList.remove('py-2');
header.classList.remove('shadow-lg');
}
});
});

// This script handles the mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
mobileMenuButton.addEventListener('click', function() {
if (mobileMenu.classList.contains('hidden')) {
mobileMenu.classList.remove('hidden');
} else {
mobileMenu.classList.add('hidden');
}
});
// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
link.addEventListener('click', function() {
mobileMenu.classList.add('hidden');
});
});
});

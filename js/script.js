const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Tambahkan event listener untuk toggle menu
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
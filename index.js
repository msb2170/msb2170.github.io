const threeDots = document.getElementById('three-dots');
const scrollUp = document.getElementById('scroll-up');

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})

const ul = document.querySelector('nav ul');

threeDots.addEventListener('click', () => {
    ul.classList.toggle('show');
});

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach((link) => 
    link.addEventListener('click', () => {
        ul.classList.remove('show');
    })
);
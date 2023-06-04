const threeDots = document.getElementById('three-dots');
const scrollUp = document.getElementById('scroll-up');
const dateField = document.getElementById('date')
const ul = document.querySelector('nav ul');

const navLink = document.querySelectorAll('.nav-link');


scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})


threeDots.addEventListener('click', () => {
    ul.classList.toggle('show');
});


navLink.forEach((link) => 
    link.addEventListener('click', function() {
        ul.classList.remove('show');
        const current = document.getElementsByClassName("hover");
        current[0].className = current[0].className.replace(" hover", "")
        this.className += "hover"
    })
);

dateField.innerHTML = new Date().getFullYear()
//mobile
const burgerIcon = document.querySelector('#dev-logo');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});

function openPortfolioProject() {
    window.open('https://portfolio-base-seven.vercel.app/', '_blank');
}

function openCloneNetflix() {
    window.open('https://clone-netflix-delta.vercel.app/', '_blank');
}

function openEcoNabo() {
    window.open('https://econabo-cpdi.vercel.app/', '_blank');
}

function openLinkedin() {
    window.open('https://www.linkedin.com/in/yan-damasco-27630a242/', '_blank');
}

function openGithub() {
    window.open('https://github.com/YanDamasco', '_blank');
}

function openWhatsapp() {
    window.open('https://api.whatsapp.com/send?phone=5548999993282&text=Ol%C3%A1%20Yan%2C%20tudo%20bem%3F', '_blank');
}
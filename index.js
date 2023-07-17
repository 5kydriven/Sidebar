const openNav = document.querySelector('.open__btn');
const navbar = document.querySelector('.navigation__container');

// openNav.addEventListener('click', () => {
//     navbar.classList.toggle('show__navbar');
// })


function navBtn () {
    if (navbar.classList.contains('show__navbar')) {
        navbar.classList.remove('show__navbar');
    } else {
        navbar.classList.add('show__navbar');
    }
}
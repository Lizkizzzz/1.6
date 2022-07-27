const menuOpenBtn = document.querySelector('.nav-item__menu');
const menuCloseBtn = document.querySelector('.menu__header__item--close');
const  menuContainer = document.querySelector('.menu');
const overlay = document.querySelector('.overlay')

let openMenu = function () {
    menuContainer.classList.add('menu--on');
    overlay.classList.add('overlay--on');

    // if (document.documentElement.clientWidth > 1440) {
    //     menuContainer.classList.remove('menu--on');
    //     overlay.classList.remove('overlay--on');
    // }
}

let closeMenu = function () {
    menuContainer.classList.remove('menu--on');
    overlay.classList.remove('overlay--on');
}

menuOpenBtn.addEventListener('click', openMenu)
menuCloseBtn.addEventListener('click', closeMenu)
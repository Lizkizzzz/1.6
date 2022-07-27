const feedbackBtn = document.querySelector('.menu__list-item__chat');
const feedbackContainer = document.querySelector('.modal__feedback');
const callbackBtn = document.querySelector('.menu__list-item__phone');
const callbackContainer = document.querySelector('.modal__callback');
const overlay = document.querySelector('.overlay');
const menuContainer = document.querySelector('.menu');
const feedbackCloseBtn = document.querySelector('.modal__feedback__close-btn');
const callbackCloseBtn = document.querySelector('.modal__callback__close-btn')

let openFeedback = function () {
    menuContainer.classList.remove('menu--on');
    overlay.classList.add('overlay--on');
    feedbackContainer.classList.add('modal__feedback--on');
}

let openCallback = function () {
    menuContainer.classList.remove('menu--on');
    overlay.classList.add('overlay--on');
    callbackContainer.classList.add('modal__callback--on');
}

let closeFeedback = function () {
    overlay.classList.remove('overlay--on');
    feedbackContainer.classList.remove('modal__feedback--on');
}

let closeCallback = function () {
    overlay.classList.remove('overlay--on');
    callbackContainer.classList.remove('modal__callback--on');
}

feedbackBtn.addEventListener('click', openFeedback)
callbackBtn.addEventListener('click', openCallback)
feedbackCloseBtn.addEventListener('click', closeFeedback)
callbackCloseBtn.addEventListener('click', closeCallback)







const mainBtn = document.querySelector('.content__button');
const mainContent = document.querySelector('.content__descr__excerpt');
const mainBtnText = document.querySelector('.content__button__text');
const mainBtnSVG = mainBtn.querySelector("svg");

let openDescr = function () {
    if (mainBtnText.textContent === 'Читать далее') {
        mainContent.classList.remove(`content__descr__excerpt--hidden`);
        mainBtnSVG.classList.add('btn--rotate');
        mainBtnText.textContent = 'Скрыть';
    } else {
        mainContent.classList.add(`content__descr__excerpt--hidden`);
        mainBtnSVG.classList.remove('btn--rotate');
        mainBtnText.textContent = 'Читать далее';
    }
}

mainBtn.addEventListener('click', openDescr);
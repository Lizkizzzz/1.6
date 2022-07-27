const typesBtn = document.querySelector('.types-repair__btn');
const typesList = document.querySelector('.types-repair__list');
const typesText = typesBtn.querySelector('.types-repair__text');
const typesSVG = typesBtn.querySelector('svg')

let allTypesOpen = function () {
    if (typesText.textContent === 'Показать все') {
        typesList.classList.remove(`types-repair__list--hidden`);
        typesSVG.classList.add('btn--rotate');
        typesText.textContent = 'Скрыть';
    } else {
        typesList.classList.add(`types-repair__list--hidden`);
        typesSVG.classList.remove('btn--rotate');
        typesText.textContent = 'Показать все';
    }
}

typesBtn.addEventListener('click', allTypesOpen)

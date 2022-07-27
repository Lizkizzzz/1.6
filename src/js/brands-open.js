const brandBtn = document.querySelector('.brand-repair__btn');
const brandList = document.querySelector('.brand-repair__list');
const brandText = brandBtn.querySelector('.brand-repair__text');
const brandSVG = brandBtn.querySelector('svg');

let allBrandsOpen = function () {
    if (brandText.textContent === 'Показать все') {
        brandList.classList.remove(`brand-repair__list--hidden`);
        brandSVG.classList.add('btn--rotate');
        brandText.textContent = 'Скрыть';
    } else {
        brandList.classList.add(`brand-repair__list--hidden`);
        brandSVG.classList.remove('btn--rotate');
        brandText.textContent = 'Показать все';
    }
}

brandBtn.addEventListener('click', allBrandsOpen)
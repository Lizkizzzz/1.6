import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
const brands = document.querySelector(".brand-repair__swiper")

function create () {
    return new Swiper(brands, {
        modules: [Pagination],

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: "bullets",
        },
        watchOverflow: true,
        spaceBetween: 16,
        slidesPerView: 1,
    });
}

create();

// let swiper;
// function createSlider() {
//     if (window.innerWidth <= 767) {
//         return swiper = new Swiper(brands, {
//             loop: true,
//             width: 272,
//             slidesPerView: 1,
//             spaceBetween: 16,
//             modules: [Pagination],
//             pagination: {
//                 el: '.swiper-pagination',
//                 type: 'bullets',
//                 clickable: true,
//             },
//         });
//     }
//
//     if (window.innerWidth > 767) swiper.destroy()
// }
//
// createSlider()
//
// window.addEventListener('resize', () => {
//     createSlider();
// });










import Swiper, { Navigation, Pagination } from 'swiper';

let swiper;


    swiper = new Swiper('.swiper-container-brands',
        {
            modules: [Pagination],
            pagination: {
                el: '.swiper-pagination',
                enabled: true,
                clickable: true,
                type: "bullets",

            },
            breakpoints: {
                320: {
                    spaceBetween: 16,
                    slidesPerView: 'auto',
                    scrollbar: false,
                    init: true,
                    allowSlidePrev: true,
                    allowTouchMove: true,
                },
                768: {
                    init: false,
                    scrollbar: false,
                    allowSlidePrev: false,
                    allowTouchMove: false,
                },
                1120: {
                    init: false,
                    scrollbar: false,
                    allowSlidePrev: false,
                    allowTouchMove: false,
                },
            }
        })

swiper = new Swiper('.swiper-container-types',
    {
        modules: [Pagination],
        pagination: {
            el: '.swiper-pagination',
            enabled: true,
            clickable: true,
            type: "bullets",

        },
        breakpoints: {
            320: {
                spaceBetween: 16,
                slidesPerView: 'auto',
                scrollbar: false,
                init: true,
                allowSlidePrev: true,
                allowTouchMove: true,
            },
            768: {
                init: false,
                scrollbar: false,
                allowSlidePrev: false,
                allowTouchMove: false,
            },
            1120: {
                init: false,
                scrollbar: false,
                allowSlidePrev: false,
                allowTouchMove: false,
            },
        }
    })

swiper = new Swiper('.swiper-container-prices',
    {
        modules: [Pagination],
        pagination: {
            el: '.swiper-pagination',
            enabled: true,
            clickable: true,
            type: "bullets",

        },
        breakpoints: {
            320: {
                spaceBetween: 16,
                slidesPerView: 'auto',
                scrollbar: false,
                init: true,
                allowSlidePrev: true,
                allowTouchMove: true,
            },
            768: {
                init: false,
                scrollbar: false,
                allowSlidePrev: false,
                allowTouchMove: false,
            },
            1120: {
                init: false,
                scrollbar: false,
                allowSlidePrev: false,
                allowTouchMove: false,
            },
        }
    })











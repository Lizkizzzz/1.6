
import Swiper, { Navigation, Pagination } from 'swiper';

let swiper;


    swiper = new Swiper('.swiper-container',
        {
            modules: [Pagination],
            pagination: {
                el: '.swiper-pagination',
                enabled: true,
                clickable: true,
                type: "bullets",
                hideOnClick: true,
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
                }
            }
        })


// window.addEventListener('resize', destroySwiper)










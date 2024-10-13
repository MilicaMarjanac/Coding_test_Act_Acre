import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/swiper-bundle.css";

export default function carousel() {
  const swiper = new Swiper(".swiper", {

    modules: [Navigation],

    autoplay: {
      delay: 2000,
    },
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
      },
      576: {
        slidesPerView: 1.5,
      },
      
      768: {
        slidesPerView: 1.5,
      },

      992: {
        slidesPerView: 2,
      },

      1200: {
        slidesPerView: 3,
      },
      
      1500: {
        slidesPerView: 3,

      },
    },
  });
}

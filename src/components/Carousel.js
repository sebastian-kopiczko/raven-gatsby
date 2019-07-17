import React from 'react';
import Swiper from 'react-id-swiper';
import "react-id-swiper/lib/styles/scss/swiper.scss";

const Carousel = ({ children }) => {
    const params = {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }
    return (
        <Swiper {...params}>
            {children}
        </Swiper>
    )
};
export default Carousel;
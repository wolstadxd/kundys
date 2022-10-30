// Custom Scripts
// // Custom scripts
AOS.init({
    offset: 80
});

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.portfolio__arrow-right',
        prevEl: '.portfolio__arrow-left',
    },
    loop: true,

});

// window.addEventListener('DOMContentLoaded', () => {
//     const slides = document.querySelectorAll('.portfolio__projects-item'),
//         prev = document.querySelector('.portfolio__slider-prev'),
//         next = document.querySelector('.portfolio__slider-next')
//
//     let slideIndex = 0
//
//     next.addEventListener('click', () => {
//         slideIndex++
//         for (let i of slides) {
//             if (slideIndex===0) {i.style.translate = '0'}
//             if (slideIndex===1) {i.style.translate = slideIndex*-400 + 'px'}
//             if (slideIndex===2) {i.style.translate = slideIndex*-400 + 'px'}
//             if (slideIndex===3) {i.style.translate = slideIndex*-400 + 'px'}
//             if (slideIndex>3) {i.style.translate = '0'
//             slideIndex=0}
//         }
//     })
//     prev.addEventListener('click', () => {
//         slideIndex--
//         for (let i of slides) {
//             if (slideIndex===0) {i.style.translate = '0'}
//             if (slideIndex===1) {i.style.translate = '-400px'}
//             if (slideIndex===2) {i.style.translate = '-800px'}
//             if (slideIndex===3) {i.style.translate = '-1200px'}
//             if (slideIndex<0) {slideIndex=0}
//         }
//     })
// })
;


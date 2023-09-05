var swiper = new Swiper(".mySwiper", {
    autoHeight: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    // breakpoints: {
    //     100: {
    //         width: auto,
    //     },
    // }
});


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
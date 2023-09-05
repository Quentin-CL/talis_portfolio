var swiper = new Swiper(".mySwiper", {
    // autoHeight: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
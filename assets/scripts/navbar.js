const burgerButton = document.querySelector(".hamburger button");
const burgerBtnIcons = document.querySelectorAll(".hamburger button *");
const burgerMenu = document.querySelector(".hamburger ul")

// Activate the navbar transition and toggle the close and open buttons
burgerButton.addEventListener("click", () => {
    burgerMenu.classList.toggle('navbar-transition')
    for (const burgerBtnIcon of burgerBtnIcons) { burgerBtnIcon.classList.toggle("display-none") }

})
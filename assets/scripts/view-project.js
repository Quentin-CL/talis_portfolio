const cursors = document.querySelectorAll('.view-project');
const articles = document.querySelectorAll('#projects .view-project-zone');
const buttons = document.querySelectorAll(".btn-project")
let speed = 0.01;
const links = [
    'https://french-fests.quentincolombier.com/',
    "https://videv.quentincolombier.com/",
    'https://threads-jet-rho.vercel.app/',
    'https://the-resto.quentincolombier.com/'
];


window.addEventListener('load', function () {

    // Setup the cursor tracker on all the articles with a recursive function
    articles.forEach((article, i) => {
        let [offsetTop, offsetLeft, mouseX, mouseY, cursorX, cursorY, rotate] = initializePosition(article);
        function animate() {
            (rotate != 360) ? rotate += 0.5 : rotate = 0;
            let distX = mouseX - cursorX - offsetLeft;
            let distY = mouseY - cursorY - offsetTop;
            cursorX = cursorX + (distX * speed);
            cursorY = cursorY + (distY * speed);

            cursors[i].style.left = cursorX + 'px';
            cursors[i].style.top = cursorY + 'px';
            cursors[i].style.transform = ` translate(-50%,-50%) rotate(${rotate}deg)`;
            myReq = requestAnimationFrame(animate);
        }
        animate();

        // Retrieve the postion of the mouse whenever the mouse move in the article
        article.addEventListener('mousemove', (event) => {
            mouseX = event.pageX;
            mouseY = event.pageY;
        })

        // Reset the position of the buttons when the mouse leave the article
        article.addEventListener('mouseleave', () => {
            res = initializePosition(article);
            mouseX = res[2];
            mouseY = res[3];
        })

        // Reset the positions of buttons and adjust offsets when the window is resized
        window.addEventListener('resize', () => {
            res = initializePosition(article);
            [offsetTop, offsetLeft, mouseX, mouseY] = res
        })
    })

    // Initialize the position of buttons
    function initializePosition(container) {
        const offsetTop = container.parentElement.offsetTop;
        const offsetLeft = container.parentElement.offsetLeft;
        let mouseX = offsetLeft + container.parentElement.clientWidth * 0.25;
        let mouseY = offsetTop + container.clientHeight;
        let cursorX = container.parentElement.clientWidth * 0.25;
        let cursorY = container.clientHeight;
        let rotate = 0;
        return [offsetTop, offsetLeft, mouseX, mouseY, cursorX, cursorY, rotate]
    };

    buttons.forEach((button, i) => {
        button.addEventListener('click', () => {
            window.open(links[i], "_blank")
        })
    })
})

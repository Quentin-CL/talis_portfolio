const cursors = document.querySelectorAll('.view-project');
const articles = document.querySelectorAll('#projects article');
const buttons = document.querySelectorAll(".btn-project")
let speed = 0.01;




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

    article.addEventListener('mousemove', (event) => {
        mouseX = event.pageX;
        mouseY = event.pageY;
    })
    article.addEventListener('mouseleave', () => {
        res = initializePosition(article);
        mouseX = res[2];
        mouseY = res[3];
    })
})


function initializePosition(container) {
    const offsetTop = container.offsetTop;
    const offsetLeft = container.offsetLeft;
    let mouseX = offsetLeft + container.clientWidth * 0.2;
    let mouseY = offsetTop + container.clientHeight;
    let cursorX = container.clientWidth * 0.2;
    let cursorY = container.clientHeight;
    let rotate = 0;
    return [offsetTop, offsetLeft, mouseX, mouseY, cursorX, cursorY, rotate]
}

function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
        var contents = e.target.result;
        displayContents(contents);
    };
    reader.readAsText(file);
}

function displayContents(contents) {
    var element = document.getElementById('file-content');
    element.textContent = contents;
}

buttons[1].addEventListener("click", () => {
    window.open("file:///C:/Users/quent/Documents/Pole_emploi/Formation/Projet/JS/2_pokemon/index.html", "_self");
})




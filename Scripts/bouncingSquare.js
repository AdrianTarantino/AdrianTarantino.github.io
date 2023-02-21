var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

let width = 150;
let height = 150;
let x = 10;
let y = 10;

let multiplierX = 1;
let multiplierY = 1;

let movementSpeed = 1;
let fps = 1;

function draw(x, y, width, height) {
    ctx.fillRect(x, y, width, height);
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


function loop(timestamp) {
    var progress = timestamp - lastRender

    ctx.clearRect(0, 0, 800, 600);
    draw(x, y, width, height);

    x += movementSpeed * multiplierX;
    y += movementSpeed * multiplierY;

    if(x > 800 - width) { multiplierX *= -1; }
    else if(y > 600 - height) { multiplierY *= -1; }
    else if(x < 0) { multiplierX *= -1; }
    else if(y < 0) { multiplierY *= -1; }

    sleep(fps);
    lastRender = timestamp
    window.requestAnimationFrame(loop)
}

var lastRender = 0
draw(x, y, width, height);
window.requestAnimationFrame(loop)
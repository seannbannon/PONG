// select canvas
const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");

// draw rectangle function
function drawRectangle(x, y, w, h, color){
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
}

drawRectangle(0, 0, canvas.width, canvas.height, "BLACK");

//Draw Crirle
function drawCircle(x, y, r, color){
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
}

drawCircle(100, 100, 50, "WHITE");
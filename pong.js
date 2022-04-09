// Select Canvas
const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");

//Create User Paddle
const user = {
    x : 0,
    y : canvas.height/2 - 100/2,
    width : 10,
    height : 100,
    color : "WHITE",
    score : 0
}

//Create Computer Paddle
const computer = {
    x : canvas.width - 10,
    y : canvas.height/2 - 100/2,
    width : 10,
    height : 100,
    color : "WHITE",
    score : 0
}

//Create the Ball

// Draw Rectangle Function
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

//Draw Text
function drawText(text, x, y, color){
    context.fillStyle = color;
    context.font = "45px fantasy";
    context.fillText(text, x, y);
}

drawText("WUSSUP", 300, 200, "WHITE")
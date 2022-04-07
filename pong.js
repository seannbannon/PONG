// select canvas
const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");

// draw rectangle function
function drawRectangle(x, y, w, h, color){
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
}

drawRectangle(0, 0, canvas.width, canvas.height, "BLACK");

//Draw Cricle
function drawCircle(x, y, r, color){

}
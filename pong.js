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
const ball = {
    x : canvas.width/2,
    y : canvas.height/2,
    radius : 10,
    speed : 5,
    velocityX : 5,
    velocityY : 5,
    color : "WHITE"
}

// Draw Rectangle Function
function drawRectangle(x, y, w, h, color){
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
}

//Create the Net
const net = {
    x : canvas.width/2 - 1,
    y : 0,
    width : 2,
    height : 10,
    color : "WHITE"
}

//Draw the Net 
function drawNet(){
    for(let i = 0; i <= canvas.height; i += 15){
        drawRectangle(net.x, net.y + i, net.width, net.height, net.color);
    }
}

//Draw Crirle
function drawCircle(x, y, r, color){
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
}

//Draw Text
function drawText(text, x, y, color){
    context.fillStyle = color;
    context.font = "45px fantasy";
    context.fillText(text, x, y);
}

//Render the Game
function render(){
    // Clear the Canvas
    drawRectangle(0, 0, canvas.width, canvas.height, "BLACK");

    // Draw the Net
    drawNet();

    //Draw the Score
    drawText(user.score, canvas.width/4, canvas.height/5, "WHITE");
    drawText(computer.score, 3 * canvas.width/4, canvas.height/5, "WHITE");

    //Draw the User and Computer Paddles
    drawRectangle(user.x, user.y, user.width, user.height, user.color);
    drawRectangle(computer.x, computer.y, computer.width, computer.height, computer.color);

    //Draw the Ball
    drawCircle(ball.x, ball.y, ball.radius, ball.color);
}

//Control the User Paddle

canvas.addEventListener("mousemove", movePaddle);

function movePaddle(event){
    let rect = canvas.getBoundingClientRect();

    user.y = event.clientY - rect.top - user.height/2; 
}

//Collision Detection (b = ball, p = player)
function collision(b, p){
    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;

    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    return b.right > p.left && b.bottom > p.top && b.left < p.right && b.top < p.bottom;
}

//Update : Position, Movement, Score, ...
function update(){
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    //Simple AI to control the computer paddle
    computerLevel = 0.1;
    computer.y += (ball.y - (computer.y + computer.height/2)) * computerLevel;

    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0){
        ball.velocityY = -ball.velocityY;
    }

    let player = (ball.x < canvas.width/2) ? user : computer;

    if (collision(ball, player)){

    }
}

//Game Init
function game(){
    update();
    render();
}

//Loop
const framesPerSecond = 50;
setInterval(game, 1000/framesPerSecond);
//author: achanta
window.onload=function() {
    canv = document.getElementById("game");
    ctx = canv.getContext("2d");
    document.getElementById("start").addEventListener("click", startGame);
}

function startGame() {
    snake_color = document.getElementById("snake").value;
    dot_color = document.getElementById("dot").value;
    speed = parseFloat(document.getElementById("speed").value)*10;
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/speed);
}

px = py = 10;   
block = 20;
dot_x = dot_y = 15;
x=y=0;

body = [];
tail = 5;
function game() {
    px+=x;
    py+=y;
    if(px<0) {
        px= block-1;
    }
    if(px>block-1) {
        px= 0;
    }
    if(py<0) {
        py= block-1;
    }
    if(py>block-1) {
        py= 0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0, 0, canv.width, canv.height);
 
    ctx.fillStyle=snake_color;
    for(var i=0;i<body.length;i++) {
        ctx.fillRect(body[i].x*block,body[i].y*block,block-2,block-2);
        if(body[i].x==px && body[i].y==py) {
            tail = 5;
        }
    }
    body.push({x:px,y:py});
    while(body.length>tail) {
    body.shift();
    }
 
    if(dot_x==px && dot_y==py) {
        tail++;
        dot_x=Math.floor(Math.random()*block);
        dot_y=Math.floor(Math.random()*block);
    }
    ctx.fillStyle=dot_color;
    ctx.fillRect(dot_x*block,dot_y*block,block-2,block-2);
}
function keyPush(event) {
    switch(event.keyCode) {
        case 37:
            x=-1;y=0;
            break;
        case 38:
            x=0;y=-1;
            break;
        case 39:
            x=1;y=0;
            break;
        case 40:
            x=0;y=1;
            break;
    }
}
//author: achanta
window.onload=function() {
    canv = document.getElementById("game");
    ctx = canv.getContext("2d");
    snake_color = document.getElementById("snake").value;
    dot_color = document.getElementById("dot").value;
    speed = parseFloat(document.getElementById("speed").value)*10;
    document.getElementById("start").addEventListener("click", startGame);
}

function startGame() {
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/speed);
}

px = py = 10;   
gs = tc = 20;
ax = ay = 15;
x=y=0;

body = [];
tail = 5;
function game() {
    px+=x;
    py+=y;
    if(px<0) {
        px= tc-1;
    }
    if(px>tc-1) {
        px= 0;
    }
    if(py<0) {
        py= tc-1;
    }
    if(py>tc-1) {
        py= 0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0, 0, canv.width, canv.height);400
 
    ctx.fillStyle=snake_color;
    for(var i=0;i<body.length;i++) {
        ctx.fillRect(body[i].x*gs,body[i].y*gs,gs-2,gs-2);
        if(body[i].x==px && body[i].y==py) {
            tail = 5;
        }
    }
    body.push({x:px,y:py});
    while(body.length>tail) {
    body.shift();
    }
 
    if(ax==px && ay==py) {
        tail++;
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
    }
    ctx.fillStyle=dot_color;
    ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
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
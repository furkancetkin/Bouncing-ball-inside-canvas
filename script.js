var canvas = document.getElementById("canvas");
var drawing = canvas.getContext("2d");
var gradient = drawing.createLinearGradient(0, 0, 0, canvas.height-20);
gradient.addColorStop(0, "yellow");
gradient.addColorStop(0.5, "orange");
gradient.addColorStop(1, "red");

    var w = canvas.width;
    var h = canvas.height;
    var x = w/2;
    var y = h/2;
    var dx = 5;
    var dy = 5;

function bouncingBall(){
    clear();
    drawing.beginPath();
    drawing.arc(x,y, 40, 0, 2*Math.PI);
    drawing.closePath();
    drawing.fillStyle = gradient;
    x = x + dx;
    y = y + dy;
    drawing.fill();
    if(x>w - 40 || x<40){
        dx = -1 * dx;
    }
    if(y>h - 40 || y<40){
        dy = -1 * dy;
    }
}

setInterval(bouncingBall,15);

function clear(){
    drawing.beginPath();
    drawing.fillStyle="#151320";
    drawing.fillRect(0,0,canvas.width,canvas.height);
    drawing.closePath();
    drawing.fill();
}

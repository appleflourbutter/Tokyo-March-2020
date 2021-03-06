var pg;
var first = 0;
var count = 0;
var canvasWidth = 0;
var canvasHeight = 0;
var mobile = 0;
var pos = [0,0,0,0,0,0,0,0,0];

function preload(){
  img = loadImage("./images/7.jpg")
}

function setup(){

    try {
        if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
            throw new Error('モバイルです');
        }
    }
    catch (e) {
        console.log(e.message);
        mobile = 1;
        var message = document.getElementById("message");
        message.innerHTML = "<p class=message>スマートフォン、タブレットなどではご覧いただけません。PCもしくはMacでご覧ください。</p>";
        return;
    }

    if (windowWidth - 220 > windowHeight * 1.5){
        canvasWidth = windowHeight * 1.5;
        canvasHeight = windowHeight;
        var canvas = createCanvas(canvasWidth, canvasHeight);
        pg = createGraphics(canvasWidth, canvasHeight);
        prev = createGraphics(50, 50);
        next = createGraphics(50, 50);
        index = createGraphics(50, 50);
        console.log(canvasWidth);
        console.log(canvasHeight);
        //createCanvas(1000, 1000);
        //pg = createGraphics(1000, 1000);
    }

    else{
        canvasWidth = windowWidth - 220;
        canvasHeight = (windowWidth - 220)  * 0.67;
        var canvas = createCanvas(canvasWidth, canvasHeight);
        pg = createGraphics(canvasWidth, canvasHeight);
        console.log(windowWidth);
    }
    canvas.parent('canvas');
    pg.parent('canvas');

}


function draw (){
    pg.strokeWeight(0);
    pg.stroke(255, 255, 255,0);
    pg.fill(255, 255, 255, 255);
    pg.rect(0, 0, canvasWidth, canvasHeight);
    pg.erase();
    //pg.stroke(255,25,255,255);
    //pg.line(0,0,200,500);
    //pg.line(random(1000), random(1000), random(1000), random(1000));
    pg.strokeWeight(13);

    for (let i = 0; i < pos.length;  i++){
        pg.line(0, pos[i], canvasWidth, pos[i]);
        pos[i] = pos[i] + random(34);
        if (pos[i] > canvasHeight){
            pos[i] = 0;
        }
        pg.line(0, pos[i], canvasWidth, pos[i]);
    }
    pg.noErase();
    //pg.clear();
    imageMode(CENTER);
    image(img,canvasWidth / 2, canvasHeight/2, canvasWidth, canvasHeight);
    image(pg, canvasWidth / 2, canvasHeight/2, canvasWidth, canvasHeight);
    //image(img,500, 500, 1000, 1000);
    //image(pg, 500, 500, 1000, 1000);
}
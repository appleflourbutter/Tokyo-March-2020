var pg;
var first = 0;
var count = 1800;
var canvasWidth = 0;
var canvasHeight = 0;
var mobile = 0;

function preload(){
  img = loadImage("./images/2.jpg")
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
        message.innerHTML = "<p class=message>スマートフォンなどではご覧いただけません。PCもしくはMacでご覧ください。</p>";
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
        canvasHeight = windowWidth  * 0.67;
    	var canvas = createCanvas(canvasWidth, canvasHeight);
        pg = createGraphics(canvasWidth, canvasHeight);
        console.log(windowWidth);
    }
    canvas.parent('canvas');
    pg.parent('canvas');

}

function draw (){
    if (mobile == 1){
        return;
    }
    image(img,canvasWidth / 2, canvasHeight/2, canvasWidth, canvasHeight);
    if (count > 0){
        //pg.fill(255, 255, 255, Math.ceil(255*(count/600.0)));
        stroke(255, 255, 255, Math.ceil(255*(count/1800.0)));
        fill(255, 255, 255, Math.ceil(255*(count/1800.0)));
        console.log(Math.ceil(255*(count/1800.0)));
    	count = count - 1;
    }
    rect(0, 0, canvasWidth, canvasHeight);
    imageMode(CENTER);
    //image(img,canvasWidth / 2, canvasHeight/2, canvasWidth, canvasHeight);
    image(pg, canvasWidth / 2, canvasHeight/2, canvasWidth, canvasHeight);
    //image(img,500, 500, 1000, 1000);
    //image(pg, 500, 500, 1000, 1000);
}
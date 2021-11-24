var airplaneImage;
var airplane;
var birdImage;
var bird;
var backgroundImg;
var coinImage;
var coin;
var score = 0;

function preload(){
 airplaneImage = loadImage("airplane.png");
 birdImage = loadImage("bird.png");
 backgroundImg = loadImage("istockphoto-1138179296-170667a.jpg");
 coinImage = loadImage("new coin.png");
}

function setup() {
 canvas = createCanvas(1000,500);
}

function draw() {
 background("blue")
 image(backgroundImg, 0,0, width, height);

 airplane = createSprite(930,200);
 airplane.addImage(airplaneImage);
 airplane.scale = 0.25;
 airplane.y = World.mouseY

 fill("black");
 textSize(40);
 text("Score = " + score, 400, 40);

 drawSprites()
}

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
 background.velocityX = -3

 airplane = createSprite(970,200);
 airplane.addImage(airplaneImage);
 airplane.scale = 0.25;
 airplane.velocityX = 3;

 if (airplane.isTouching(coin)) {
    coin.destroy();
    score = score+5
 }


 
 spawnCoins();
 spawnBirds();

 drawSprites();
}

function spawnBirds() {
  if (frameCount % 200) {
   bird = createSprite(200,200);
   bird.addImage(birdImage);
   bird.scale = 0.75;
   bird.lifetime = 900
  }
}

function spawnCoins () {
  if (frameCount % 100){
    coin = createSprite(200);
    coin.addImage(coinImage)
    coin.scale = 0.75;
    coin.lifetime = 1000
  }
}
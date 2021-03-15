var cat,catImage1,catImage2,catImage3;
var mouse,mouseImage1,mouseImage2,mouseImage3,mouseImage4;
var garden,gardenImage;

function preload(){
    gardenImage = loadImage("images/garden.png");

    catImage1 = loadAnimation("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImage3 = loadAnimation("images/cat4.png");

    mouseImage1 = loadAnimation("images/mouse1.png");
    mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImage3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

   cat = createSprite(870,600);
   cat.addAnimation("tomSleeping",catImage1);
   cat.scale = 0.2;

   mouse = createSprite(200,600);
   mouse.addAnimation("jerryStanding",mouseImage1);
   mouse.scale = 0.15;
}

function draw(){ 
background(gardenImage);

  if(cat.x - mouse.x < (cat.width - mouse.width)/2){
   cat.velocityX = 0;
   cat.addAnimation("catLastImage",catImage3);
   cat.changeAnimation("catLastImage");
   mouse.addAnimation("mouseLastImage",mouseImage3);
   mouse.changeAnimation("mouseLastImage");
  }
   
  text(mouseX + ',' + mouseY, 10,45);

drawSprites();
}

function keyPressed(){
   if (keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning",catImage2);
      cat.changeAnimation("catRunning");
      mouse.addAnimation("mouseTeasing",mouseImage2);
      mouse.changeAnimation("mouseTeasing");
   }
  }
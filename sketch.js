
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
 
}



function setup() {
  
 monkey=createSprite(60,320,16,16);
   monkey.addAnimation("moving", monkey_running);
   monkey.scale=0.1;

  ground = createSprite(600,340,820,12);
  ground.velocityX=-5;
  ground.x=ground.width/2;
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  

  
}


function draw() {
  background("white");
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
   if(keyDown("space") ) {
      monkey.velocityY = -10;
    }
  food();
  obstacles();
    monkey.velocityY = monkey.velocityY + 0.6;
  monkey.collide(ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/getFrameRate());
  text("Survival Time: "+ survivalTime, 100,50);
  
drawSprites();
  
}

function food(){
  if (frameCount % 80 === 0) {
    banana = createSprite(400,300,20,20);
    banana.y = random(140,200);    
    banana.velocityX = -5;
    banana.lifetime = 200;
    banana.addImage(bananaImage);
    banana.scale=0.04;
    FoodGroup.add(banana);
    
  }
}
function obstacles(){
  if(frameCount % 300 === 0) {
    obstacle = createSprite(700,314,20,20);
    obstacle.velocityX = -5;
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.12;
    obstacle.lifetime = 200;
    obstaclesGroup.add(obstacle);
}
}






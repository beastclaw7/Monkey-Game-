
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
 
}



function setup(){
  
 monkey = createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale = 0.1;
  
 
  ground = createSprite(200,350,20000,20);
   ground.velocityX = -3;
  ground.x = ground.width/2;
  
}


function draw() {
 background("blue");
  
 if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
  
    monkey.collide(ground); 
  
 
  score = score+1;
  spawnFood();
  spawnObstacles();
  drawSprites();
}

function spawnFood(){
if(frameCount%80==0){ 
banana = createSprite(120);
banana.addImage("banana",bananaImage);
banana.velocityX = -3;
banana.lifetime = 190;
  banana.scale=0.1;
FoodGroup.add(banana);
  }
  
}
function spawnObstacles(){
 if(frameCount%300==0){
  obstacle = createSprite(300,315);
   obstacle.addImage("obstacle",obstacleImage);
   obstacle.velocityX = -3;
   obstacle.lifetime = 200;
   obstacle.scale=0.2;
  obstacleGroup.add(obstacle);
 } 
  
  
}




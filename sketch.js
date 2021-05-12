var bg,backgroundImg;
var boy,boyImg
var obstacle,obstacleGroup,obstaclesImage
var mask,maskGroup,maskImage
var Score = 0
var invisibleGround
var gameOver, gameOverImage;


function preload(){
backgroundImg = loadImage("images/background.jpg")
boyImg = loadImage("images/boy.png")
obstaclesImage=loadImage("images/stone.png")
maskImage=loadImage("images/mask.png")
gameOverImage=loadImage("images/gameover.jpg")
}

function setup(){
createCanvas(1000,500)

bg=createSprite(500,250,1500,500)
bg.addImage(backgroundImg)
bg.velocityX=-2
bg.scale=2.6

boy= createSprite(200,400,50,50)
boy.addImage(boyImg)

invisibleGround = createSprite(500,500,1000,20);
invisibleGround.visible = false;


obstacleGroup = new Group();
maskGroup = new Group();

gameOver = createSprite(500,250,1500,500);
  gameOver.addImage(gameOverImage );
  gameOver.visible = false;
  gameOver.scale = 3.5


}

function draw(){
background(0)

boy.collide(invisibleGround)

if (keyDown("space")) {
    boy.velocityY = -10;
  }

  

boy.velocityY = boy.velocityY + 0.8

if(bg.x<250){
    bg.x=bg.width/2
}

if (boy.isTouching(maskGroup)){
  maskGroup.destroyEach();
}

if(boy.isTouching(obstacleGroup)){
    bg.velocityX = 0;
    boy.velocityY = 0;
   maskGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    
   obstacle.visible = false
    mask.visible = false
    
    
    maskGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
    
    gameOver.visible = true;

}

obstacles();
masks();



drawSprites();
}

function obstacles() {
    if (frameCount % 300 === 0) {
      obstacle = createSprite(950, 310, 10, 10);
      obstacle.addImage("obstacle", obstaclesImage);
      obstacle.y = Math.round(random(480, 480));
      obstacle.scale = 0.2;
      obstacle.velocityX = -5;
      obstacle.lifetime = 200;
  
  
      obstacleGroup.add(obstacle)
    }
  }

  function masks() {
    if (frameCount % 100 === 0) {
      mask = createSprite(950, 200, 10, 10);
      mask.addImage(maskImage);
      mask.y = Math.round(random(200, 250));
      mask.scale = 0.3;
      mask.velocityX = -5;
      mask.lifetime = 200; 
  
      maskGroup.add(mask)
    }
  }
  
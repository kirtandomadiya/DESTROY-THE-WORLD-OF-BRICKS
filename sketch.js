var form ;
var title ; 
var gameState=0;
var brick1 ;
var brick=[];
var brick1=[];
var brick2=[];
var brick3=[];
var brick4=[];
var paddle , ball ;
var wall1 ,wall2 , wall2;
var brick4Group; 
var score=0 ;

function preload(){
paddleimage = loadImage ('IMAGES/paddle.png');
ballimage = loadImage('IMAGES/ball.png');


nightbg = loadImage('IMAGES/nightbg.jpg');
}
function setup() {
  createCanvas(displayWidth-25,displayHeight-25);
  for (var i=1;i<=100;i=i+1){
    brick [i]= new Brick(i*100,200)
  
  }
  for (var i=1;i<=100;i=i+1){
    brick1 [i]= new Brick(i*100,250)
  }
  for (var i=1;i<=100;i=i+1){
    brick2 [i]= new Brick(i*100,100)
  }
  for (var i=1;i<=100;i=i+1){
    brick3 [i]= new Brick(i*100,150)
  }
  for (var i=1;i<=100;i=i+1){
    brick4 [i]= new Brick(i*100,300)
  }
  

 paddle=createSprite(displayWidth/2,displayHeight-150,50,10);
 paddle.addImage('paddle',paddleimage);
 paddle.scale = 0.8;
 paddle.debug=true;
 paddle.setCollider('rectangle',0,0,225,40);
 ball = createSprite(displayWidth/2,displayHeight-200,20,20);
ball.addImage('ball',ballimage);
ball.scale = 0.5;
ball.debug=true;
wall1 = createSprite(0,displayHeight/2,2,displayHeight);
wall2 = createSprite(displayWidth/2,0,displayWidth,2);
wall3 = createSprite(displayWidth-27,displayHeight/2,2,displayHeight);

ball.velocityX = -2;
ball.velocityY = -3;
 

 
form=new Form();
}

function draw() {
  
 
  paddle.x = mouseX;
  
  if (gameState===0){
    form.display();
  }
  if (gameState===1){
    textSize(20);
    fill("black");
 text("press space to start",displayWidth/2,displayHeight-125);
 if (keyDown('space')){
  gameState=2;
 }
 
  }
  if (gameState===2){
    background(nightbg);
    textSize(20);
    fill('black');
    text('score :'+score,displayWidth-200,20);
    ball.bounceOff(wall1);
  ball.bounceOff(wall2);
  ball.bounceOff(wall3);
  ball.bounceOff(paddle);
  
  for (var i=1;i<=100;i=i+1){
    brick [i].display();
  }
  for (var i=1;i<=100;i=i+1){
    brick1 [i].display();
  }
  for (var i=1;i<=100;i=i+1){
    brick2 [i].display();
  }
  for (var i=1;i<=100;i=i+1){
    brick3 [i].display();
  }
  for (var i=1;i<=100;i=i+1){
    brick4 [i].display();
  }
   drawSprites();
  }
 
 
}
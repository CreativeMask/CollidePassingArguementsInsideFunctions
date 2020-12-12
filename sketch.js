
var mr, fr;
var go1, go2, go3, go4;


function preload(){

}

function setup() {
  createCanvas(1536,720);

  mr = createSprite(400, 800, 80,30);
  mr.shapeColor = "red";

  fr = createSprite(400,100,50,80);
  fr.shapeColor = "yellow";
  fr.velocityY = 5;

  go1 = createSprite(100,600,60,60);
  go1.shapeColor = "green";

  go2 = createSprite(200,600,60,60);
  go2.shapeColor = "green";

  go3 = createSprite(300,600,60,60);
  go3.shapeColor = "green";
 
  go4 = createSprite(400,600,60,60);
  go4.shapeColor = "green";




  
}

function draw() {
  background("black");
  if(collide(mr,go2)){
    mr.shapeColor = "green";
    go2.shapeColor = "red";
  } else {
    mr.shapeColor = "red";
    go2.shapeColor = "green";
  }

  mr.x = World.mouseX;
  mr.y = World.mouseY;
  

  drawSprites();
}

function collide(object1, object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2 && object2.x -  object1.x < object1.width/2 +  object2.width/2 && 
    object1.y -  object2.y < object1.width/2 +  object2.width/2 && object2.y - object1.y < object1.width/2 +  object2.width/2){
    return true;
  } else {
    return false;
  }
   
  }

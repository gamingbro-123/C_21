var rect1,rect2, rect3;
var fixedRect, movingRect;


function setup() 
{
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "yellow";
  movingRect = createSprite(500, 200, 50, 50);
  movingRect.shapeColor = "blue";

  rect1 = createSprite(300, 100, 50, 50);
  rect1.shapeColor = "cyan";
  rect1.velocityX = 3;

  rect3 = createSprite(100, 100, 50, 50);
  rect3.shapeColor = "purple";
  rect3.velocityX = 5;

  rect2 = createSprite(500, 100, 50, 50);
  rect2.shapeColor = "pink";
}

function draw() {
  background(220,255,255); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

console.log("Distance " + (movingRect.x-fixedRect.x));
console.log(" Width/2 " + (movingRect.width+fixedRect.width)/2)   

if(isTouching(movingRect,fixedRect))
{  
  fixedRect.shapeColor = "red";

 }
else
{
  fixedRect.shapeColor = "yellow";

}

if(isTouching(movingRect,rect2))
{
  rect2.x = rect2.x+10;

}

bounceOff();



  drawSprites();
}



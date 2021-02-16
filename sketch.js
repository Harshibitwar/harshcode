var fixedRect, movingRect;
var car, wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(300,300,50,20)
  car.shapeColor="red";
  wall=createSprite(1000,300,20,50)
  wall.shapeColor="red"
  car.velocityX=2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(car,wall)){
    car.shapeColor="blue";
    wall.shapeColor="blue";
    car.velocityX=0;
  }
  else{
    car.shapeColor="red";
    wall.shapeColor="red";
  }
  drawSprites();
}    

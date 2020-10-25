var wall1,rect,thickness; 

var bullet,speed,weight;

function setup() {
  createCanvas(800,400);

  speed = random(223,321);
  weight = random(400,1500);
  thickness= random(22,83);

  car =  createSprite(79, 75, 20, 5); 
car.shapeColor = "red";
car.velocityX = speed;


 wall1 = createSprite(300,100,1000,10);
wall1.shapeColor = "white";



 car =  createSprite(79, 150, 20, 5); 
car.shapeColor = "green ";
car.velocityX = speed;

wall1 = createSprite(300,200,1000,10);
wall1.shapeColor = "white";


car =  createSprite(79, 250, 20, 5); 
car.shapeColor = "green ";
car.velocityX = speed;


wall1 = createSprite(300,300,1000,10);
wall1.shapeColor = "white";

 rect = createSprite(790,50,thickness,heigth/2);
 rect = createSprite(790,150,thickness,heigth/2);
 rect = createSprite(790,250,thickness,heigth/2);

}
 


function draw() {
  background(0,0,0); 
 

if(rect.x-car.x<(car.width+rect.width)/2){
car.velocityX = 0;
var deformation=0.5 * weight * speed * speed/22509;
if(deformation<180){
car.shapeColor = color(255,0,0)
}
if(deformation<180 && deformation>100){
  car.shapeColor = color(230,230,230)
}
if(deformation<100){
  car.shapeColor = color(0,255,0)
}
if( hascollided(bullet,rect)){
  bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness); 
  
  if(damage>10){
  
  rect.shapeColor=color(255,0,0);
  
  }
  
  if(damage<10){
    rect.shapeColor=color(0,255,0);
  }
  
  
  
   } 

}

function hascollided(bullet,rect ){
bulletrigthEdge=bullet.x +bullet.width;
rectleftEdge=left.x;
if(bulletrigthEdge>=rectleftEdge){
return  true

}

return false;

}
drawSprites();
}
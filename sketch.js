var car,wall
var height,speed
var maining , safing , averaging 

function preload(){
  maining=loadImage("main.jpg");
  safe=loadImage("safe.jpg");
  averaging=loadImage("average.jpg")
  leathaling=loadImage("lethal.jpg");

}


function setup(){
  createCanvas(1400,400)
  speed=random(30,100)
  weight=ramdom(700,2500)



  car=createSprite(50,200,50,50)
  car.shapeColor("white")
  car.addImage(maining)
  car.scale=0.5;
  car.addAnimation("safe",safeing);
  car.addAnimation("avege",avegering);
  car.addAnimation("letha",leathaling);
  car.velocityX=speed;


  wall=createSprite(1340,200,40,200);
  wall.shapeColor("grey")


}




function draw(){
  background("black");


     if(car.x - wall.x < wall.width/2 + car.width
      && wall .x - car.x < width/2 + car.width/2){
       car.velocityX=0;


       if(((0.5*weight*speed*speed)/22500)>180){
       car.changeAnimation("lethal",lethalimg);
       }else if(((0.5*weight*speed*speed)/22500)<80){
         car.changeAnimation("safe",safeimg);
       }else if(((0.5*weight*speed*speed)/22500)<180 && ((0.5*weight*speed*speed)/22500)>80){
         car.changeAnimation("average",averageimg);
       }

       
      
       }

      
      }
  
  

  

      drawSprites();
    
var box1,box2,box3;
var ground,paper,paperImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
paperImg = loadImage("paper.png");	
}

function setup() {
	createCanvas(1200, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1 = new Dustbin(900,640,400,20);
	
	paper = new Paper(200,200,30);
	//paper.bounceOff(ground);
	ground = new Ground(600,660,1200,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(117,114,114);
  paper.display(); 
  box1.display(); 
  ground.display();
  drawSprites();
 
}

function keyPressed(){
       if(keyCode === UP_ARROW){
		   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	   }
}



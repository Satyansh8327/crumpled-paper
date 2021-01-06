
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1 
var  ground1

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1= new Paper(100,100);
	ground1=new Ground(400,300);
	dustbin1=new Dustbin (600,300,10,300);
	dustbin2=new Dustbin(500,300,200,10);
	dustbin3=new Dustbin (400,300,10,200);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine)
  ball1.display();
  ground1.display();
  dustbin1.display();  
 
}




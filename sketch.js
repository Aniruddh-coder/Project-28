
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	platform = new Ground(150, 305, 300, 170);
	
	stone1 = new Stone(150,200);
	tree1 = new Tree(650,height-35,40,200);

	Mango1 = new Mango();
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 

  ground.display();
  
  drawSprites();
 
}



